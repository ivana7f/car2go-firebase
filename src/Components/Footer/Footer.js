import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../img/logo_car2go1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,.
          </p>
        </div>
        <div className={classes.sitemap}>
          <h2 className={classes.footerHeading}>Sitemap</h2>
          <ul className={classes.footerList}>
            <li>
              <a href="#" className={classes.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                Cars
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.help}>
          <h2 className={classes.footerHeading}>Support</h2>
          <ul className={classes.footerList}>
            <li>
              <a href="#" className={classes.footerLink}>
                Live Support
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                Help
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className={classes.footerLink}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h2 className={classes.footerHeading}>Contact</h2>
          <address>
            <p>7760 Glenridge Dr. Oak Lawn, IL 60453</p>
            <p>
              <a href="tel:972-968-9359" className={classes.footerLink}>
                972-968-9359
              </a>
              <br />
              <a
                href="mailto:hello@omnifood.com"
                className={classes.footerLink}
              >
                info@car2go.com
              </a>
            </p>
          </address>
        </div>
        <div className={classes.social}>
          <div>
            <p>&copy; 2022 car2go. All rights reserved.</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF size="2rem" color="#1f5c90" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter size="2rem" color="#1f5c90" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram size="2rem" color="#1f5c90" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className={classes.footerLink}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
