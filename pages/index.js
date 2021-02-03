import React from "react";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
import MainFeature from "../components/mainFeature";
import MoreFeature from "../components/moreFeature";
import Ready from "../components/ready";
import Cover from "../components/cover";
const Homepage = ({ t }) => (
  <React.Fragment>
    <NextSeo
      title="Koodo Reader"
      description="A modern eBook reader for epub, pdf, mobi, azw3 and txt, supporting Windows, macOS, Linux and Web"
    />
    <Cover />
    <Header />
    <div className="divider"></div>
    <MainFeature />
    <MoreFeature />
    <Ready />
    <Footer />
    <img
      src="/images/demo.png"
      style={{ display: "none" }}
      alt="Koodo Reader demo"
    />
  </React.Fragment>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
