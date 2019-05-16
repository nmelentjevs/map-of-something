import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <title>Sick Fits!</title>
  </Head>
);

export default Meta;
