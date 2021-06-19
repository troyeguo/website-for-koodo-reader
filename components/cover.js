import React from "react";
import PropTypes from "prop-types";
import { withTranslation, Link } from "../i18n";
const Cover = ({ t }) => (
  <div className="container-fluid cover-container" style={{ padding: 0 }}>
    <div className="cover-bg">
      <img src="/images/cover.png" alt="Koodo Reader Cover" className="cover" />
      <section className="bg-dark">
        <div className="container" style={{ height: "100%" }}>
          <div
            className="row justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div className="col-10  mt-6 mb-md-5 mb-lg-0">
              <p className="title text-center">
                {t("All-in-one eBook reader")}
              </p>
              <h1 className="subtitle text-center">
                {t(
                  "Koodo Reader is a full-featured ebook manager to help you better study and digest your books"
                )}
              </h1>
              <div className="container cover-button">
                <div className="row justify-content-md-center mt-4 cover-button">
                  <Link href="/download">
                    <div className="row download-button m-2  justify-content-center align-items-center">
                      <div>{t("Download")}</div>
                    </div>
                  </Link>

                  <div className="row preview-button m-2  justify-content-center align-items-center">
                    <a
                      href="https://github.com/troyeguo/koodo-reader"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("Github")}
                      <svg className="icon ml-2" aria-hidden="true">
                        <use href="#icon-qianjin"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-50 h-50 bottom right position-absolute section-spacer"
          data-jarallax-element="50"
        >
          <div className="blob blob-2 bg-gradient w-100 h-100"></div>
        </div>
        <div
          className="w-50 h-50 bottom right position-absolute section-spacer"
          data-jarallax-element="75"
        >
          <div className="blob blob-4 bg-white opacity-10 w-100 h-100"></div>
        </div>
        <div className="divider divider-bottom bg-white dark-theme"></div>
      </section>
    </div>

    <style jsx>{`
      .cover-container {
        color: white;
        width: 100%;
        height:55vw;
        overflow:hidden;
      }
      .cover {
        width:100%
      }
      .title {
        font-size: calc(1rem + 2.5vw);
        font-weight: 600;
        line-height: 1.2;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        margin-top:-300px;
        text-align:center
      }
      .subtitle {
        font-size: 1.25rem;
        line-height: 1.5;
        color: rgba(190, 190, 190, 1);
        opacity: 1;
        font-weight:500;
        margin-top: 10px;
        text-align:center
      }

      @media (max-width: 768px) {
        .title {
          margin-top: 40vh;
        }
        .subtitle {
          font-size: 1rem;
          line-height: 1.5;
        }
        .cover-container {
          height: 600px;
          width:100%;
          background:url('/images/cover.png');
          margin-bottom:20px;
          background-position: 50% 65%;
        }
        .cover {
          display:none
        }
        .cover-button {
          display:flex;
          justify-content:center;
        }
      }
      .bg-dark {
        height: 100%;
        width:100%;
      }
      .download-button {
        height: 46px;
        width:175px
        background: rgba(255, 226, 183, 1);
        opacity: 1;
        border-radius: 23px;
        font-size: 18px;
        color: rgba(0, 0, 0, 1);
        font-weight: 500;
      }
      .preview-button {
        width:175px;
        height: 46px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        border-radius: 23px;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
      }
    `}</style>
  </div>
);
Cover.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Cover.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Cover);
