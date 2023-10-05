import React from 'react'
import Header from './Header'
// import  '../index.css';

export default function Home() {
  return (
    <div>
       
         
  <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" style={{backgroundImage: "url({https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SlZ7VN_D9A4pmR3ycH-0_mIQ4tY_QW3b_pbybKns&s})"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">The Best Business Information </h2>
                <p className="animate__animated animate__fadeInUp">We're In The Business Of Helping You Start Your Business</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage: "url(assets/img/hero-carousel/2.jpg)"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">At vero eos et accusamus</h2>
                <p className="animate__animated animate__fadeInUp">Helping Business Security & Peace of Mind for Your Family</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage: "url(assets\img\hero-carousel\x03.jpg)"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">Temporibus autem quibusdam</h2>
                <p className="animate__animated animate__fadeInUp">Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>
      
    </div>
  )
}
