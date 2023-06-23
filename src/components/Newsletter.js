import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <h2 className="newsletter_title">Subscribe My Newsletter</h2>
        <p className="newsletter_subtitle">
          Subscribe and get my latest article in your inbox
        </p>
        <div className="newsletter_inputgroup">
          <input type="email" placeholder="Your email" className="input" />
          <button type="button" className="newsletter_btn">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Newsletter