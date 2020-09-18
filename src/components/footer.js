import React from "react"
import PropTypes from "prop-types"
import "./footer.css"
import { withTranslation, Link } from "../i18n"

const Footer = ({ t }) => (
  <section className="row justify-content-center footer-text m-0">
    <div className="col-auto">
      <Link href="/privacy">
        <a className="link">{t("privacy")}</a>
      </Link>
    </div>
    <div className="col-auto">
      <Link href="/terms">
        <a className="link">{t("terms")}</a>
      </Link>
    </div>

    <div className="col-12 row justify-content-center my-3 footer-copyright">
      © 2020 App by Troye. All rights reserved.
    </div>
    <div className="divider"></div>
  </section>
)
Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
})
Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("common")(Footer)
