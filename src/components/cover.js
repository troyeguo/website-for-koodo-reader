import React from "react"
import PropTypes from "prop-types"
import "./cover.css"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import { withTranslation, Link } from "../i18n"
const Cover = ({ t }) => (
  <div className="container-fluid  cover-bg">
    <img src="/images/cover.jpg" alt="Koodo Reader Cover" className="cover" />
    <section className="bg-dark pb-0">
      <div className="container" style={{ height: "100%" }}>
        <div
          className="row justify-content-between align-items-center"
          style={{ height: "100%" }}
        >
          <div
            className="col-xl-6 col-lg-7 text-center text-lg-left mb-4 mb-md-5 mb-lg-0 aos-init"
            data-aos="fade-right"
          >
            <h1 className="cover-title">{t("title")}</h1>
            <p className="cover-subtitle">{t("subtitle")}</p>
            <div
              className="container aos-init cover-button"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row justify-content-md-start mt-4 cover-button">
                <Link href="/download">
                  <div className="row cover-download-button m-2  justify-content-center align-items-center">
                    <div>{t("download")}</div>
                  </div>
                </Link>

                <div className="row cover-preview-button m-2  justify-content-center align-items-center">
                  <a
                    href="https://reader.960960.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("preview")}
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
)
Cover.getInitialProps = async () => ({
  namespacesRequired: ["common"],
})
Cover.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("common")(Cover)
