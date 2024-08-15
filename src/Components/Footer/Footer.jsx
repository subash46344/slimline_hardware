import React from "react";
import "./FooterStyle.css";
import FooterLogo from "./../../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_container_block">
          <div className="footer_container_sub_block">
            <div
              className="footer_container_sub_block_card"
              // style={{ width: "30%" }}
            >
              <img src={FooterLogo} alt="" />
              <p className="logo_paragraph">
                We are most steadfast and inspirational manufacturer, wholesaler
                and supplier of Kitchen and Wardrobe Accessories.
              </p>
              <div className="logo_icon">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-youtube-play"></i>
              </div>
            </div>
            <div
              className="footer_container_sub_block_card"
              // style={{ width: "15%" }}
            >
              <h2 className="footer_heading">INFOMATION</h2>
              <p className="information">About Us</p>
              <p className="information">Contact Us</p>
              <p className="information">Latest News</p>
            </div>
            <div
              className="footer_container_sub_block_card"
              // style={{ width: "10%" }}
            >
              <h2 className="footer_heading">LINKS</h2>
              <p className="information">Products</p>
            </div>
            <div
              className="footer_container_sub_block_card"
              // style={{ width: "30%" }}
            >
              <h2 className="footer_heading">CONTACT US</h2>
              <p className="address">
                Slimline (a Product Of Sunlight Home Products) 1289, Modern
                Industrial Estate, Part B, Bahadurgarh - 124507, Haryana, India
              </p>
            </div>
          </div>
          <div className="scroll_text">
            <div className="scroll_paragraphs-wrapper">
              <p className="scroll_paragraph">Kitchen Basket Manufacturers</p>
              <p className="scroll_paragraph">Tandem Box Manufacturers</p>
              <p className="scroll_paragraph">
                Telescopic Channel Manufacturers
              </p>
              <p className="scroll_paragraph">Kitchen Basket Manufacturers</p>
              <p className="scroll_paragraph">Tandem Box Manufacturers</p>
              <p className="scroll_paragraph">Kitchen Basket Manufacturers</p>
              <p className="scroll_paragraph">Tandem Box Manufacturers</p>
              <p className="scroll_paragraph">
                Telescopic Channel Manufacturers
              </p>
              <p className="scroll_paragraph">Kitchen Basket Manufacturers</p>
              <p className="scroll_paragraph">Tandem Box Manufacturers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_container_copyright">
        <div className="footer_container_copyright_block">
          <p>Copyright © 2018 Slimline. All Right Reserved</p>
          <ul className="footer_navbar">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
