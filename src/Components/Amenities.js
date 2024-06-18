import React from "react";
import styles from "./Amenities.module.css";
import { Link } from "react-router-dom";

function Amenities() {
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
      <div className={styles.body}>
        <img src='https://agarch.com/wp-content/uploads/2022/08/Lifestyle-Image_Eblast-2022-1.jpg' />
        <h2>Garamond Residency units include: </h2>
        <ul>
          <li>24-hour front desk service</li>
          <li>Resident advisor support and planned social activities</li>
          <li>Onsite management</li>
          <li>Security present at Garamond Residencies 8 p.m. to 4 a.m.</li>
          <li>24-hour fitness area</li>
          <li>Storage and laundry facilities</li>
          <li>Easy access to shopping across the street</li>
        </ul>
      </div>
      <div className={styles.foot_items}>
                <div>© 2024 Garamond. | Disclaimer - This is a demo website  </div>
            </div>
    </div>
  );
}

export default Amenities;
