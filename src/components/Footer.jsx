import React from 'react'
import './FooterStyle.css'
import ig from "../assets/instagram.png"
import ln from "../assets/linkedin.png"
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className='pages'>
      <div className="footer-sectiona">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/website-policy">Website Policy</a></li>
          <li><a href="add link">Career</a></li>
        </ul>
      </div>
      <div className="footer-sectionb">
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/rentals">Rentals</a></li>
         
          </ul>
      </div>
      </div>
      <div className="footer-sectiond">
        <h3>Connect</h3>
        <ul>
          <li><a href="https://www.instagram.com/yourcompany"><img src={ig}/></a></li>
          <li><a href="https://www.linkedin.com/company/yourcompany"><img src={ln}/></a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer