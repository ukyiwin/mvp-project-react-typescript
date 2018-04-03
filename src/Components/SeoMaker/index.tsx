import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string; 
  description?: string;
  seoTags?: string;
  buffer?: string;
  words?: string;
}
const SeoMaker = ({title, description, seoTags, buffer, words}: Props) => {
  return (
    <Helmet>
      <title>{`Unizonn | ${title ? title : title} `}</title>
      <meta name="an inclusive community" content="Unizonn community" />
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
      <meta name="description">{description ? description : null}</meta>
    </Helmet>
  );
};

export default SeoMaker;