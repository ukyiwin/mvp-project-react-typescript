export const truncString = (value: string, add: string, max: number) => {
  add = add || '...';
  return (value.length > max ? value.substring(0, max) + add : value);
};

export const lengthInMinutes = (value: string) => {
  
    const min = value.split(' ').length / 250;
    if (min <= 0 || min === 0) {
      return 'less than a minute read';
    } else if (min <= 0.9 || min === 0.9) {
      return 'less than a minute read';
    } else {
      return `${min} min read`;
    }
};

// tslint:disable-next-line:only-arrow-functions
export function b64toBlob(b64Data, contentType, sliceSize?) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [] as any;

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

// tslint:disable-next-line:only-arrow-functions
export function urltoFile(url, filename, mimeType) {
  return (fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, {type: mimeType}))
  );
}

// tslint:disable-next-line:only-arrow-functions
export function strip_html_tags(str) {
   if ((str === null) || (str === '')) {
      return false;
   } else {
    str = str.toString();
   }
   return str.replace(/<[^>]*>/g, '');
}
