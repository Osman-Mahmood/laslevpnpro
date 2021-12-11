import React, { useState, useEffect } from "react";
import "./Pricing.css";
import Free from "../../assets/Pricing/Free.png";
function Pricing() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    if (show) {
      document.getElementById("first").classList.add("activate");
    } else {
      document.getElementById("first").classList.remove("activate");
    }
  }, [show]);
  const onToggleClick = () => {
    setShow(!show);
    setShow2(false);
    setShow3(false);
  };

  const onToggleClick2 = () => {
    setShow(false);
    setShow2(!show2);
    setShow3(false);
  };

  const onToggleClick3 = () => {
    setShow(false);
    setShow2(false);
    setShow3(!show3);
  };
  return (
    <div>
      <section id="Pricing">
        <div className="Pricing mb-5">
          <div className="container">
            <div className="row mb-5 ">
              <div className="col-sm-12">
                <div className="text-content align-items-center justify-content-center text-center mt-5 mb-5">
                  <h1>Choose Your Plan</h1>
                  <p>
                    Let's choose the pakage that is best for you and explore it
                    happily and <br />
                    cheerfully
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center mt-3 justify-content-center align-items-center">
              <div className="col-md-4 col-sm-3 text-center justify-content-center">
                <div className="card bg-white text-dark" id="first">
                  <div
                    className="card-body text-center "
                    onClick={onToggleClick}
                    className={show ? "activate" : ""}
                  >
                    <img src={Free} alt="no-connection"></img>
                    <h1 className="h6 text-uppercase font-weight-bold mb-4 mt-5">
                      Free Plan
                    </h1>

                    <ul className="list-unstyled my-5 text-small text-center">
                      <li className="mb-2">
                        <i className="fa fa-check mr-2  text-success"></i>{" "}
                        Unlimited Bandwidth
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check mr-2 text-success"></i>{" "}
                        Encrypted Connnection
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check mr-2 text-success"></i> No
                        Traffic Logs
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check mr-2 text-success"></i> Work
                        on all devices
                      </li>
                      <li className="mb-2 mt-4">
                        <a
                          href="#"
                          className="free-price"
                          style={{ color: "black" }}
                        >
                          <b>Free</b>
                        </a>
                      </li>
                    </ul>

                    <a href="#" className="btn danger-btn mt-3">
                      Select
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-3">
                <div className="card bg-white text-dark">
                  <div
                    className="card-body text-center"
                    onClick={onToggleClick2}
                    className={show2 ? "activate" : ""}
                  >
                    <img src={Free} alt="no-connection"></img>
                    <h1 className="h6 text-uppercase font-weight-bold mb-4 mt-5">
                      Standard Plan
                    </h1>

                    <ul className="list-unstyled my-5 text-small text-center">
                      <li className="mb-1">
                        <i className="fa fa-check mr-2  text-success"></i>{" "}
                        Unlimited Bandwidth
                      </li>
                      <li className="mb-1">
                        <i className="fa fa-check mr-2 text-success"></i>{" "}
                        Encrypted Connnection
                      </li>
                      <li className="mb-1">
                        <i className="fa fa-check mr-2 text-success"></i> Yes
                        Traffic Logs
                      </li>
                      <li className="mb-1">
                        <i className="fa fa-check mr-2 text-success"></i> Work
                        on all devices
                      </li>
                      <li className="mb-1">
                        <i className="fa fa-check mr-2 text-success"></i>Connect
                        Anywhere
                      </li>
                      <h2 className="h1 font-weight-bold">
                        $9
                        <span className="text-small font-weight-normal ml-2">
                          / month
                        </span>
                      </h2>
                    </ul>

                    <a href="#" className="btn danger-btn mt-2">
                      Select
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-3">
                <div className="card bg-white text-dark popular ">
                  <div
                    className="card-body text-center"
                    onClick={onToggleClick3}
                    className={show3 ? "activate" : ""}
                  >
                    <img src={Free} alt="no-connection"></img>
                    <h1 className="h6 text-uppercase font-weight-bold mb-4 mt-5">
                      Premium Plan
                    </h1>

                    <ul className="list-unstyled my-5 text-small text-center">
                      <li className="mb-0">
                        <i className="fa fa-check mr-2  text-success"></i>{" "}
                        Unlimited Bandwidth
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-check mr-2 text-success"></i>{" "}
                        Encrypted Connnection
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-check mr-2 text-success"></i> Yes
                        Traffic Logs
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-check mr-2 text-success"></i> Work
                        on all devices
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-check mr-2 text-success"></i>Connect
                        Anywhere
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-check mr-2 text-success"></i>Get new
                        Features
                      </li>
                      <li className="mb-0">
                        <h2 className="h1 font-weight-bold">
                          $12
                          <span class="text-small font-weight-normal ml-2">
                            / month
                          </span>
                        </h2>
                      </li>
                    </ul>

                    <a href="#" className="btn danger-btn">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
