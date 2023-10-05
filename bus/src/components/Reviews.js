import React from 'react'
import  '../index.css';

export default function Reviews() {
  return (
    <div>
         {/* ======= Rviews Section ======= */}
      <div className="reviews-area">
        <div className="row g-0">
          <div className="col-lg-6">
            <img src="assets/img/about/2.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 work-right-text d-flex align-items-center">
            <div className="px-5 py-5 py-lg-0">
              <h2>working with us</h2>
              <h5>Web Design, Ready Home, Construction and Co-operate Outstanding Buildings.</h5>
              <a href="#contact" className="ready-btn scrollto">Contact us</a>
            </div>
          </div>
        </div>
      </div>{/* End Rviews Section */}
      
    </div>
  )
}
