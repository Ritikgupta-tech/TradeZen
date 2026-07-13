import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Section */}
      <div className="container d-flex justify-content-between align-items-center py-4">
        <h4 className="m-0 fw-bold">Support Portal</h4>

        <a href="#" className="text-white">
          Track Tickets
        </a>
      </div>

      {/* Bottom Section */}
      <div className="container py-5">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control"
              placeholder="Eg. how do I activate F&O"
            />

            <div className="row mt-4">
              <div className="col-6 mb-3">
                <a href="#" className="text-white">
                  Track account opening
                </a>
              </div>

              <div className="col-6 mb-3">
                <a href="#" className="text-white">
                  Track segment activation
                </a>
              </div>

              <div className="col-6">
                <a href="#" className="text-white">
                  Intraday margins
                </a>
              </div>

              <div className="col-6">
                <a href="#" className="text-white">
                  Kite user manual
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 mt-5 mt-lg-0 ps-lg-5">
            <h2 className="fw-bold mb-4">Featured</h2>

            <ol>
              <li className="mb-3">
                <a href="#" className="text-white">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="#" className="text-white">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;