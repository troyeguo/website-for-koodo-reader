/* eslint react/no-danger: 0 */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="ebook epub pdf mobi azw3 txt reader free koodo ebook 免费 阅读器 电子书"
          />
          <meta name="application-name" content="Koodo Reader" />
          <meta
            name="description"
            content="Koodo Reader is an open-source eBook reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta name="referrer" content="unsafe-url" />
          <meta
            itemProp="name"
            content="Koodo Reader - Free EBook Reader for Windows, Mac, Linux and Web"
          />
          <meta
            itemProp="description"
            content="Koodo Reader is an open-source eBook reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://koodo.960960.xyz" />
          <meta
            property="og:title"
            content="Koodo Reader - Free EBook Reader for Windows, Mac, Linux and Web"
          />
          <meta
            property="og:description"
            content="Koodo Reader is an open-source EBook reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta
            property="og:image"
            content="https://koodo.960960.xyz/images/meta.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://koodo.960960.xyz" />
          <meta
            property="twitter:title"
            content="Koodo Reader - Free EBook Reader for Windows, Mac, Linux and Web"
          />
          <meta
            property="twitter:description"
            content="Koodo Reader is an open-source EBook reader with backup and restore support, runs on Windows, Mac, Linux and Web"
          />
          <meta
            property="twitter:image"
            content="https://koodo.960960.xyz/images/meta.png"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link href="/lib/aos.css" rel="stylesheet" />{" "}
          <script src="/lib/aos.js"></script>
          <script src="https://at.alicdn.com/t/font_1803854_q7xmgrr4cy.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3eacc64ea8b140fa42d83cc7fdaf2679";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
            }}
          />
          <link href="/lib/bootstrap-grid.min.css" rel="stylesheet" />
          <link rel="dns-prefetch" href="https://koodo.960960.xyz" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>AOS.init();</script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
