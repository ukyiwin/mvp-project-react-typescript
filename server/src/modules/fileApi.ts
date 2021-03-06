import { v4 as uuid } from 'uuid';
import * as mime from 'mime-types';
import * as multiparty from 'multiparty';

const azure = require('azure');
const azureStorage = require('azure-storage');

export default ({ prisma }) => (req, res) => {
  const form = new multiparty.Form();
  const blobService = azure.createBlobService();
  const startDate = new Date();
  const expiryDate = new Date(startDate);
  expiryDate.setMinutes(startDate.getMinutes() + 100);
  startDate.setMinutes(startDate.getMinutes() - 100);

  const sharedAccessPolicy = {
    AccessPolicy: {
      Permissions: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
      Start: startDate,
      Expiry: expiryDate
    }
  };
  // tslint:disable-next-line:no-any
  form.on('part', async (part: any) => {
    if (part.name !== 'data') {
      return;
    }

    const secret = uuid();
    const name = `${secret}_${part.filename}`;
    const size = part.byteCount;
    const contentType = mime.lookup(part.filename);
    const container = 'unizonn';
    // tslint:disable-next-line:no-console
    blobService.createBlockBlobFromStream(
      // tslint:disable-next-line:typedef
      container, name, part, size , async (error, result, response) => {
        if (error) {
          // tslint:disable-next-line:no-console
          console.log('errror');
          
        } else {
          const token = blobService.generateSharedAccessSignature(container, result.name, sharedAccessPolicy);
          const url = blobService.getUrl(container, result.name, token);
          const publicUrl = result.name;
          try {
            const data = {
              name,
              size,
              secret,
              contentType,
              url,
              publicUrl
            };
      
            const { id }: { id: string } = await prisma.mutation.createFile({ data }, ` { id } `);

            const file = {
              id,
              name,
              secret,
              contentType,
              size,
              url,
              publicUrl
            };
            return res.status(200).send(file);
          } catch (err) {
            // tslint:disable-next-line:no-console
            console.log(err);
            return res.sendStatus(500);
          }
    
        }
      }
    );
  });

  form.on('error', (err) => {
    // tslint:disable-next-line:no-console
    console.log(err);
    return res.sendStatus(500);
  });

  form.parse(req);
};
