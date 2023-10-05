// import React from 'react'
// import  '../index.css';



export default function Contact2() {
  return (
    <div>
              <div className="col-md-6">
        <div className="form contact-form">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group mt-3">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
      {/* End Left contact */}
      {/* End Contact Section */}
      
    </div>
  )
}
