import React from 'react'
import './Footer.css'
import logo from '../../assets/navbarlogo/logo.svg'
function Footer() {
    return (
        <div>
            <footer className="footer-area ">
  <div className="footer-big">
   
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div class="footer-widget">
            <div className="widget-about">
              <img src={logo} alt="no-connection" className="img-fluid"></img>
              <p>LaslesVPN is a private virtual network that has unqiue features and hhas high security</p>
              <ul className="contact-details">
                <li>
                  <span className="icon-earphones"></span> @2020LaslesVPN
                  
                </li>
                
              </ul>
           </div>
          </div>
          
        </div>
       
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title">Product</h4>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Server</a>
                </li>
                <li>
                  <a href="#">Countries</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
           
          </div>
          
        </div>
      

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title">Engage</h4>
              <ul>
                <li>
                  <a href="#">LaslesVPN ?</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Abour Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            
          </div>
         
        </div>
       

        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title">Earn Money</h4>
              <ul>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Become Partner</a>
                </li>
              </ul>
            </div>
           
          </div>
         
        </div>
      

      </div>
   
    </div>
   
  </div>
  
 
</footer>
        </div>
    )
}

export default Footer
