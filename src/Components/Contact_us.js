import React from "react";
import styles from "./Contact_us.module.css";
import { Link } from "react-router-dom";

function Contact_us() {
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
      <h1>Contact Us</h1>
      <div className={styles.image}>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/6d/3d/35/beautiful-sunset-from.jpg" />
        <h5>The view during sunset</h5>
      </div>

      <div className={styles.body}>
        <div className={styles.icons}>
          <div className={styles.location}>
            <img src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_location-64.png" />
            <br />
            <h4>127 Sir James Peiris Mawatha</h4>
            <br />
            <h4>Colombo - 2</h4>
            <br />
            <h4>Sri Lanka</h4>
          </div>
          <div className={styles.email}>
            <img src="https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-64.png" />
            <h4>sales@altair.lk</h4>
          </div>
          <div className={styles.telephone}>
            <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-01-64.png" />
            <h4>+94 11 74 66 550</h4>
          </div>
          <div className={styles.moreinfo}>
            <h2>More Contact Information</h2>
            <ul>
              <li>John Smith - (555) 123-4567</li>
              <li>Emily Johnson - (555) 987-6543</li>
              <li>David Brown - (555) 234-5678</li>
              <li>Sarah Miller - (555) 876-5432</li>
              <br />
              <li>Garamond Residencies Office - (555) 555-5555</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.foot_items}>
        <div>© 2024 Garamond. | Disclaimer - This is a demo website </div>
      </div>
    </div>
  );
}

export default Contact_us;
