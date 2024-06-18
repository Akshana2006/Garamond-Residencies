import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import SearchOutlined from "@ant-design/icons";
import {FacebookOutlined} from '@ant-design/icons';
import {TwitterOutlined} from '@ant-design/icons';
import {LinkedinOutlined} from '@ant-design/icons';
import {InstagramOutlined} from '@ant-design/icons';

function Home() {
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
            <SearchOutlined />
            <input type="search" placeholder="🔎 Search..." />
          </div>
        </ul>
      </div>
      <div className={styles.banner}>
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230828/pngtree-apartments-in-the-middle-of-a-city-as-sunset-falls-image_13120535.jpg" />
        <div className={styles.text}>
          <h1>
            Discover Garamond Residencies: Where Urban Living Meets Elegance
          </h1>
          <h4>
            Discover a new level of modern living at Garamond Residencies, where
            luxury meets comfort in the heart of the city. Our meticulously
            designed apartments offer a serene oasis amidst the bustling urban
            landscape. Whether you're seeking a cozy studio or a spacious family
            home, Garamond Residencies has the perfect space for you.
          </h4>
        </div>
      </div>
      <div className={styles.body}>
        <h2>Elegantly Designed Living Spaces</h2>
        <div className={styles.scrollimage}>
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/842d7758c847c57c20fdb1522ca420dcfcd461ba-3000x2000.jpg?auto=format&fit=max&q=50&w=1875"
            alt="image1"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/5cf89e061afd8c668da28bd4ef16dc4fcad5d4e4-2048x1365.jpg?auto=format&fit=max&q=50&w=2048"
            alt="image2"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/9f58bb54f156cc8131b7d82e94a04a39e73000a6-3000x1998.jpg?auto=format&fit=max&q=50&w=1875"
            alt="image3"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/cb915412851f446078dc628ea3decd9fb736c1d0-3500x2333.jpg?auto=format&fit=max&q=50&w=1750"
            alt="image4"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/4922986e8175353a54b49aaa052487af9730eeee-5389x3593.jpg?auto=format&fit=max&q=75&w=2021"
            alt="image5"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/cb68702f071b99489228e2637db9ca830269b2a6-3696x2448.jpg?auto=format&fit=max&q=75&w=1848"
            alt="image6"
          />
          <img
            src="https://cdn.sanity.io/images/v48q37k7/production/96af54ae895238672e73a5015fc068450bc4eb5f-3000x1998.jpg?auto=format&fit=max&q=50&w=1875"
            alt="image7"
          />
        </div>
        <h4>
          Step into sophisticated living with our beautifully designed
          apartments. Each residence is meticulously curated to provide comfort,
          style, and functionality, creating a space you'll be proud to call
          home.
        </h4>
      </div>
      <div className={styles.footer}>
            <div className={styles.foot}>
                <div className={styles.contact_foot}>
                    <h3>Contact Us</h3>
                    <br/>
                    <h4>Project/Sales office address</h4>
                    <br />
                    <h4>127 Sir James Peiris Mawatha</h4>
                    <br />
                    <h4>Colombo - 2</h4>
                    <br />
                    <h4>Sri Lanka</h4>
                    <br />
                    <br />
                    <h4>P: +94 11 74 66 550</h4>
                    <br />
                    <h4>E: sales@altair.lk</h4>
                </div>
                <div className={styles.socials}>
                    <h3>Follow Us</h3>
                    <div className={styles.icons}>
                    <FacebookOutlined />
                    <TwitterOutlined />
                    <LinkedinOutlined />
                    <InstagramOutlined />
                    </div>
                </div>
                <div className={styles.form}>
                    <h3>Schedule a Tour</h3>
                    <br />
                    <label>
                        Name  <br /><input type='text' onChange={(e) => e.target.value}/>
                    </label>
                    <br />
                    <label> Email  <br /> <input type='email'  onChange={(e) => e.target.value}/></label>
                    <br />
                    <label> Mobile <br /> <input type='text'  onChange={(e) => e.target.value}/></label>
                    <br />
                    <label> Message <br /> <textarea type='text' onChange={(e) => e.target.value}/></label>
                   <button>Submit</button>
                </div>
            </div>
            <div className={styles.foot_items}>
                <div>© 2024 Garamond. | Disclaimer - This is a demo website  </div>
            </div>
      </div>
    </div>
  );
}

export default Home;
