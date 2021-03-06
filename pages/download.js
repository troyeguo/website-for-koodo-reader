import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import DownloadOption from "../components/downloadOption";
import Share from "../components/share";
import { NextSeo } from "next-seo";
const changeLogs = require("../configs/logs");
const version = changeLogs[0].version;

const Homepage = ({ t }) => {
  useEffect(() => {
    if (
      navigator.language !== "zh-CN" &&
      navigator.language !== "zh-SG" &&
      navigator.language !== "zh-TW" &&
      navigator.language !== "zh-HK"
    ) {
      document.getElementsByClassName("demo")[0].src = "/images/demo_en.png";
    }
  }, []);
  return (
    <React.Fragment>
      <NextSeo
        title={t("Download")}
        description={t("Download option for Koodo Reader")}
      />
      <Header />
      <div className="container">
        <section className="row justify-content-center demo-container">
          <div>
            <div className="demo-title mt-5 mb-3">Koodo Reader</div>
            <div
              className="lanzou-download-title"
              style={{ fontWeight: "500" }}
            >
              {t("Download the latest version of") + " " + version}
            </div>
            <img
              src="/images/demo.png"
              alt="Koodo Reader demo"
              className="demo aos-init"
              data-aos="fade-up"
            />
          </div>
        </section>
        <DownloadOption />
        <Share />
      </div>
      <style jsx>{`
        .demo-container {
          margin-top: 93px;
        }
        .demo-title {
          margin-top: 93px;
          font-size: calc(1rem + 3vw);
          font-weight: 600;
          line-height: 1.2;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
        }
        .demo {
          width: 100%;
        }
      `}</style>
      <Footer />
    </React.Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
