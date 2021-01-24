import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

const Footer = ({ t }) => (
  <section className="row justify-content-around footer-text m-0 pt-4">
    <div className="col-12 col-md-4 align-items-baseline mb-2 footer-intro">
      <a>
        <svg className="icon icon-black" aria-hidden="true">
          <use href="#icon-zu48"></use>
        </svg>

        <span className="header-name">Koodo Reader</span>
      </a>
      <div style={{ position: "relative", bottom: "15px" }}>
        <a className="link">
          {t(
            "Koodo Reader 是一个开源的电子书阅读器，支持 epub，pdf，mobi，azw3 和 txt"
          )}
        </a>
      </div>
    </div>
    <div className="justify-content-center">
      <div
        className="col-12 col-md-auto align-items-baseline  mb-2"
        style={{ textAlign: "left" }}
      >
        <div>
          <a className="link-id">{t("产品信息")}</a>
        </div>
        <Link href="/faq">
          <div>
            <a className="link">{t("常见问题")}</a>
          </div>
        </Link>
        <Link href="/log">
          <div>
            <a className="link">{t("更新日志")}</a>
          </div>
        </Link>
        <Link href="/download">
          <div>
            <a className="link">{t("下载")}</a>
          </div>
        </Link>
      </div>

      <div
        className="col-12 col-md-auto align-items-baseline  mb-2"
        style={{ textAlign: "left" }}
      >
        <div>
          <a className="link-id">{t("用户条款")}</a>
        </div>
        <Link href="/privacy">
          <div>
            <a className="link">{t("隐私策略")}</a>
          </div>
        </Link>
        <Link href="/terms">
          <div>
            <a className="link">{t("服务条款")}</a>
          </div>
        </Link>
        <Link href="/support">
          <div>
            <a className="link">{t("客户支持")}</a>
          </div>
        </Link>
      </div>

      <div
        className="col-12 col-md-auto align-items-baseline  mb-2"
        style={{ textAlign: "left" }}
      >
        <div>
          <a className="link-id">{t("资源下载")}</a>
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
        style={{ textAlign: "left" }}
      >
        <div>
          <a className="link-id">{t("同类产品")}</a>
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
        style={{ textAlign: "left" }}
      >
        <div>
          <a className="link-id">{t("开发者信息")}</a>
        </div>
        <div>
          <a
            className="link"
            href="https://960960.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("个人博客")}
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
        font-weight: 500;
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
