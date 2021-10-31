import React from 'react';
import Head from 'next/head';

export default function Seo({
  description = 'The Newest NFT project with its own Crypto Wallet!, Newest NFT project is coming! Lets jump into this project where it will have its own Crypto wallet. It will be fast and easy for users, and we will make sure that it is user friendly in every way.',
  author = 'Meta Network, MNT.',
  meta,
  title = 'Meta Network | Meta Coin',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
