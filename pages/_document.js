import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PPG8MQP');`,
            }}
          ></script>

          <meta name="title" content="Frans VVS AB" />
          <meta
            name="Description"
            content="Frans VVS är ett serviceföretag som utför arbeten med allt inom VVS!"
          />
          <meta
            name="Keywords"
            content="Frans VVS Björketorp Hyssna Jilvero Rör Rörmokare Rörläggare VVS-installatör värmepump"
          />
        </Head>
        <body className="w-full">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPG8MQP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
