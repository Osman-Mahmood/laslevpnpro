import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import lady from "../../assets/Testimonialimg/lady.png";

function Testimonial() {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <section id="Testimonials">
        <div className="testimonials">
          {/* <div className="container"> */}
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="text-content text-center">
                <h1 className="mt-5">
                  Trusted by Thousands of
                  <br /> Happy Customer
                </h1>
                <p>
                  These are the stories of our customers who have joined us with
                  great
                  <br />
                  pleasure when using this crazy feature.
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-section">
            <div className="row text-center mt-5 spaces justify-content-center">
              <OwlCarousel
                className="owl-carousel"
                id="testimonial-carousel"
                {...options}
              >
                <div className="col-lg-12" id="arrows">
                  <div className="testi-item">
                    <div className="client-info">
                      <img src={lady} alt="no internet connection"></img>
                      <h5>
                        Viezh Robert
                        <span>
                          4.5 <i className="fa fa-star" />
                        </span>
                      </h5>

                      <p>
                        <span>Warsaw,poland</span>
                      </p>
                    </div>

                    <div className="testi-comment text-align-start justify-content-start text-left">
                      <p>
                        I patronized Usman and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="client-info">
                      <img src={lady} alt="no internet connection"></img>
                      <h5>
                        Viezh Robert
                        <span>
                          4.5 <i className="fa fa-star" />
                        </span>
                      </h5>

                      <p>
                        <span>Warsaw,poland</span>
                      </p>
                    </div>
                    <div className="testi-comment text-align-start justify-content-start text-left">
                      <p>
                        It was nice hiring this guy for my e-commerce project.He
                        delivered even more than i can imagine. I recommend him
                        for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="client-info">
                      <img src={lady} alt="no internet connection"></img>
                      <h5>
                        Viezh Robert
                        <span>
                          4.5 <i className="fa fa-star" />
                        </span>
                      </h5>

                      <p>
                        <span>Warsaw,poland</span>
                      </p>
                    </div>
                    <div className="testi-comment text-align-start justify-content-start text-left">
                      <p>
                        When he delivered my job, my head spinned, it was so
                        nice and he implemented every functionality i requested
                        for. Thank you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" id="arrowslide">
                  <div className="testi-item">
                    <div className="client-info">
                      <img src={lady} alt="no internet connection"></img>
                      <h5>
                        Viezh Robert
                        <span>
                          4.5 <i className="fa fa-star" />
                        </span>
                      </h5>

                      <p>
                        <span>Warsaw,poland</span>
                      </p>
                    </div>
                    <div className="testi-comment text-align-start justify-content-start text-left">
                      <p>
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He
                        is indeed a great guy,
                      </p>
                      
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <div className="radio-section">
        <label className="radio">
          <input type="radio" checked="checked" name="is_company" />
          <span className="checkround"></span>
        </label>
        <label className="radio">
          <input type="radio" name="is_company" />
          <span className="checkround"></span>
        </label>
        <label className="radio">
          <input type="radio" name="is_company" />
          <span className="checkround"></span>
        </label>
        <label className="radio">
          <input type="radio" name="is_company" />
          <span className="checkround"></span>
        </label>
      </div>
      <a href="#arrowslide">
        <i className="far fa-arrow-alt-circle-right"></i>
      </a>
      <a className="left-arrow" href="#arrows">
        <i className="far fa-arrow-alt-circle-left"></i>
      </a>
    </div>
  );
}

export default Testimonial;
