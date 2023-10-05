import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div id="about" className="about-area area-padding">
  <div className={styles.container}>
    <div className={styles.row}>
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className={`${styles.sectionHeadline} text-center`}>
          <h2 style={{ alignItems: "center" }}>About eBusiness</h2>
        </div>
      </div>
    </div>
    <div className={styles.row}>
      {/* Image column */}
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className={styles.wellLeft}>
          <div className={styles.singleWell}>
            <a href="#">
              <img
                src="https://bootstrapmade.com/demo/templates/eBusiness/assets/img/about/1.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* Text column */}
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className={styles.wellMiddle}>
          <div className={styles.singleWell}>
            <a href="#">
              <h4 className={styles.secHead}>Project Maintenance</h4>
            </a>
            <p>
              Redug Lagre dolor sit amet, consectetur adipisicing elit.
              Itaque quas officiis iure aspernatur sit adipisci quaerat unde
              at nequeRedug Lagre dolor sit amet, consectetur adipisicing
              elit. Itaque quas officiis iure
            </p>
            <ul>
              <li>
                <i className="bi bi-check" /> Interior design Package
              </li>
              <li>
                <i className="bi bi-check" /> Building House
              </li>
              <li>
                <i className="bi bi-check" /> Repairing of Residential Roof
              </li>
              <li>
                <i className="bi bi-check" /> Renovation of Commercial
                Office
              </li>
              <li>
                <i className="bi bi-check" /> Make Quality Products
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End col*/}
    </div>
  </div>
</div>

  );
}
