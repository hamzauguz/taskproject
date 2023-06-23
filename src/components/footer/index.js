import React from "react";
import "./Styles.footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerDivContainer">
        <div className="leftFooterPlace">
          <span className="footerTitle">Let there be change</span>
          <div className="gridFooterPages">
            <a className="footerPageItem">Preference Center</a>
            <a className="footerPageItem">Privacy Statement</a>
            <a className="footerPageItem">Careers</a>
            <a className="footerPageItem">Terms & Conditions</a>

            <a className="footerPageItem">About Us</a>
            <a className="footerPageItem">Cookie Policy/Settings</a>

            <a className="footerPageItem">Contact Us</a>
            <a className="footerPageItem">Accessibility Statement</a>

            <a className="footerPageItem">Locations</a>
            <a className="footerPageItem">
              Do Not Sell/Share My Personal Information (for CA)
            </a>
            <a className="footerPageItem lastFooterTitle">Sitemap</a>

            {/* <div>left right div</div> */}
          </div>
          <span className="footerSignTitle">
            © 2023 Accenture. All Rights Reserved.
          </span>
        </div>
        <img
          className="footerImageRight"
          src={require("../../assets/footer.png")}
        />
      </div>
    </footer>
  );
};

export default Footer;
