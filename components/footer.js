import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

const Footer = ({ t }) => (
  <section className="row justify-content-around footer-text m-0 pt-4">
    <div className="col-12 col-md-4 align-items-baseline mb-2">
      <a>
        <svg className="icon icon-black" aria-hidden="true">
          <use href="#icon-zu48"></use>
        </svg>

        <span className="header-name">Koodo Reader</span>
      </a>
      <div style={{ position: "relative", bottom: "15px" }}>
        <a className="link">
          {t(
            "Koodo Reader is an open-source eBook reader for epub, pdf, mobi, azw3 and txt"
          )}
        </a>
      </div>
    </div>
    <div
      className="col-12 col-md-auto align-items-baseline  mb-2"
      style={{ textAlign: "center" }}
    >
      <div>
        <a className="link-id">{t("Product")}</a>
      </div>
      <Link href="/faq">
        <div>
          <a className="link">{t("FAQ")}</a>
        </div>
      </Link>
      <Link href="/log">
        <div>
          <a className="link">{t("Changelog")}</a>
        </div>
      </Link>
      <Link href="/download">
        <div>
          <a className="link">{t("Download")}</a>
        </div>
      </Link>
    </div>

    <div
      className="col-12 col-md-auto align-items-baseline  mb-2"
      style={{ textAlign: "center" }}
    >
      <div>
        <a className="link-id">{t("Customer")}</a>
      </div>
      <Link href="/privacy">
        <div>
          <a className="link">{t("Privacy")}</a>
        </div>
      </Link>
      <Link href="/terms">
        <div>
          <a className="link">{t("Terms")}</a>
        </div>
      </Link>
      <Link href="/support">
        <div>
          <a className="link">{t("Support")}</a>
        </div>
      </Link>
    </div>

    <div
      className="col-12 col-md-auto align-items-baseline  mb-2"
      style={{ textAlign: "center" }}
    >
      <div>
        <a className="link-id">{t("Resource")}</a>
      </div>
      <div>
        <a
          className="link"
          href="https://sci-hub.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Sci-hub")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://booksc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Z-Library")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://libgen.is/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Libgen")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="http://www.gutenberg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Gutenberg")}
        </a>
      </div>
    </div>
    <div
      className="col-12 col-md-auto align-items-baseline  mb-2"
      style={{ textAlign: "center" }}
    >
      <div>
        <a className="link-id">{t("Couterpart")}</a>
      </div>
      <div>
        <a
          className="link"
          href="https://www.neat-reader.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Neat Reader")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="http://www.bookxnote.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("BookxNote")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://calibre-ebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Calibre")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://www.sumatrapdfreader.org/free-pdf-reader.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Sumatra")}
        </a>
      </div>
    </div>
    <div
      className="col-12 col-md-auto align-items-baseline  mb-2"
      style={{ textAlign: "center" }}
    >
      <div>
        <a className="link-id">{t("Developer")}</a>
      </div>
      <div>
        <a
          className="link"
          href="https://960960.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Profolio")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://github.com/troyeguo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Github")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://dribbble.com/troyeguo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Dribbble")}
        </a>
      </div>
      <div>
        <a
          className="link"
          href="https://www.behance.net/a22370262185571"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Behance")}
        </a>
      </div>
    </div>
    <div
      className="col-12 row justify-content-center mt-5 footer-copyright"
      style={{ textAlign: "center" }}
    >
      © 2020 App by Troye. All rights reserved.
    </div>
    <div className="divider"></div>
    <style jsx>{`
      .header-name {
        display: inline-block;
        font-size: 1.3rem;
        position: relative;
        bottom: 10px;
        left: 10px;
        font-weight: 600;
        line-height: 80px;
      }
      .icon-more {
        font-size: 0;
        cursor: pointer;
      }
      .icon-black {
        font-size: 50px;
      }
      .footer-text {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        color: rgba(141, 141, 141, 1);
        min-height: 280px;
        background-color: rgba(247, 249, 252, 0.8);
      }
      .footer-copyright {
        font-size: 16px;
        line-height: 30px;
        color: rgba(172, 174, 179, 1);
        font-weight: 400;
        margin-bottom: 30px;
      }
      .link {
        color: rgba(141, 141, 141, 1);
        cursor: pointer;
      }
      .link-id {
        color: black;
        line-height: 40px;
      }
      @media (max-width: 768px) {
        .link {
          text-align: center;
        }
      }
    `}</style>
  </section>
);
Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Footer);
