import React from 'react';
import styles from './Contact.module.css'; // Correct the import path

export default function Contact() {
  return (
    <div>
      {/* ======= Contact Section ======= */}
      <div id="contact" className={styles.contactArea}>
        <div className={`contactInner ${styles.areaPadding}`}>
          <div className={styles.contactOverlay} />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className={`sectionHeadline text-center ${styles.headline}`}>
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              {/* Start contact icon column */}
              <div className="col-md-4">
                <div className="contactIcon text-center">
                  <div className={styles.singleIcon}>
                    <i className="bi bi-phone" />
                    <p>
                      Call: +1 5589 55488 55<br />
                      <span>Monday-Friday (9am-5pm)</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Start contact icon column */}
              <div className="col-md-4">
                <div className="contactIcon text-center">
                  <div className={styles.singleIcon}>
                    <i className="bi bi-envelope" />
                    <p>
                      Email: info@example.com<br />
                      <span>Web: www.example.com</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Start contact icon column */}
              <div className="col-md-4">
                <div className="contactIcon text-center">
                  <div className={styles.singleIcon}>
                    <i className="bi bi-geo-alt" />
                    <p>
                      Location: A108 Adam Street<br />
                      <span>NY 535022, USA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
