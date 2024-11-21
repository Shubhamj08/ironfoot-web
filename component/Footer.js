import React from "react";
import styles from "../scss/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import fb from "../src/facebook.svg";
import insta from "../src/instagram.svg";
import twitter from "../src/twitter.svg";
import linkedin from "../src/linkedin.svg";

function Footer() {
  const Year = new Date().getFullYear();

  return (
    <div className={styles.backGroundColor}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <div className={styles.div1}>
              <p>Where Expertise Meets Every Need</p>
              <a href="@ironfoot.com">@ironfoot.com</a>
            </div>

            <div className={styles.div2}>
              <h3>About Us</h3>

              <div className={styles.urls}>
                <Link href="/company-overview">Company Overview</Link>
                <Link href="/mission">Mission</Link>
                <Link href="/vission">Vision</Link>
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </div>

            <div className={styles.div3}>
              <h3>Contact Us</h3>
              <div className={styles.urls}>
                <a email="ironfoot.services@gmail.com">ironfoot.services@gmail.com</a>
                <a tel="+919570528877">+919570528877</a>
              </div>
            </div>

            <div className={styles.div4}>
              <div className={styles.social1} style={{ marginBottom: "2px" }}>
                <a href="">
                  <Image src={fb} height="30" width="30" alt="" />
                </a>

                <a href="">
                  <Image src={insta} height="30" width="30" alt="" />
                </a>
              </div>

              <div className={styles.social1}>
                <a href="">
                  <Image src={twitter} height="30" width="30" alt="" />
                </a>

                <a href="">
                  <Image src={linkedin} height="30" width="30" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.bottomContainer}>
            <p>Copyright © {Year} Company All rights Rcerved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
