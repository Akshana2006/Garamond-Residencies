import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <div className={styles.header}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/amenities">Amenities</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <div className={styles.search}>
            <input type="search" placeholder="🔎 Search..." />
          </div>
        </ul>
      </div>
      <div className={styles.banner}>
        <h1>About us</h1>
        <div>
          <img src="https://i.pinimg.com/564x/49/dc/17/49dc174c2648b3fff5a5e01815899f35.jpg" />
        </div>
        <h4>
          At Garamond Residencies, we believe in redefining urban living by
          creating spaces that inspire and elevate everyday life. Our commitment
          to excellence, attention to detail, and dedication to customer
          satisfaction set us apart in the real estate industry.
        </h4>
      </div>
      <div className={styles.body}>
        <div className={styles.ourTeam}>
          <h2>Our Team</h2>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.card}>
                <img src="https://i.namu.wiki/i/REdd-iuFO91t3jNmTanJFjtJVy8YG112L0YOIbSNFYbGZdXXFR-Vtx_wC7QPsC1-x4KeJyjkNkvVPjcQeqGEWQ.webp" />
                <div className={styles.container}>
                  {" "}
                  <h3>Sarah Kang</h3>
                  <h4>Founder & CEO</h4>
                  <h4 style={{ color: "black" }}>
                    Meet Sarah Kang, the visionary founder and CEO of Garamond
                    Residencies. With a passion for creating exceptional living
                    spaces, Sarah's leadership has transformed Garamond
                    Residencies into a premier destination for modern urban
                    living. Her commitment to excellence, innovative design, and
                    sustainable practices defines the essence of Garamond
                    Residencies, shaping it into a community where luxury meets
                    lifestyle.
                  </h4>
                  <br />
                  <h4 style={{ color: "black" }}>sarahkang@garamond.com</h4>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
                <img src="https://i.redd.it/sn6pn6yjjwk71.jpg" />
                <div className={styles.container}>
                  <h3>Ted Mosby</h3>
                  <h4>Architect</h4>
                  <h4 style={{ color: "black" }}>
                    Meet Ted Mosby, the brilliant architect behind Garamond
                    Residencies' iconic design. With a keen eye for detail and a
                    passion for creating spaces that harmonize aesthetics and
                    functionality, Ted has brought to life the vision of
                    Garamond Residencies. His innovative approach to
                    architecture has resulted in a distinctive and timeless
                    urban oasis that embodies luxury, comfort, and modern
                    living.
                  </h4>
                  <br />
                  <h4 style={{ color: "black" }}>Ted Mosby@garamond.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Join the Garamond Residencies Community! 🌸</h3>
        <h4>
          Experience the Garamond Residencies difference and join a community of
          discerning individuals who appreciate the finer things in life.
          Whether you're looking for a place to call home or an investment
          opportunity, Garamond Residencies welcomes you to discover a new
          standard of urban living. Contact us today to learn more or schedule a visit.
        </h4>
        <Link to="/contact_us">Contact Us</Link>
      </div>
      <div className={styles.foot_items}>
        <div>© 2024 Garamond. | Disclaimer - This is a demo website </div>
      </div>
    </div>
  );
}

export default About;
