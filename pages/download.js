import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import DownloadOption from "../components/downloadOption";
import Share from "../components/share";
import { NextSeo } from "next-seo";

const Homepage = ({ t }) => (
  <React.Fragment>
    <NextSeo title="Download" description="Download option for Koodo Reader" />
    <Header />
    <div className="container">
      <section className="row justify-content-center demo-container">
        <div>
          <div className="demo-title my-5">Koodo Reader</div>
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

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
