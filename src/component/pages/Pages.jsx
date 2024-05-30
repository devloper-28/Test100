import React, { useState } from "react";
import "../../assets/css/index.css";
import {
  Image1,
  Image10,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
  Image8,
  Image9,
} from "../../assets/images";
const Pages = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (

    <div>
      <div
        className="modal fade modal-xl"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
       
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close Desktop"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div className="modal-body">
            <div className="Navabr Mobile">
                    <img src={Image10} className="img-fluid"/>
                    <button>Enquire Now</button>
                  </div>
              <div className="container-fluid">
                  
                <div className="row">
                  
                  <div className="col-lg-6 col-md-12">
                    <div className="row g-4 h-100">
                      <div className="col-lg-12 col-md-6">
                        <img src={Image1} className="img-fluid bannerImg" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <img src={Image2} className="img-fluid bannerImg" />
                      </div>
                      <div className="col-lg-4  col-md-6">
                        <img src={Image3} className="img-fluid bannerImg" />
                      </div>
                      <div className="col-lg-4  col-md-6">
                        <img src={Image4} className="img-fluid bannerImg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="MapDiv">
                      <h3 className="mb-4 Desktop">Tangled Up In Green</h3>
                      <h3>Tangled Up In Green</h3>
                      <p>
                        Tangled Up In Green, a vision of Total Environment, is a
                        luxury plotted development nestled amidst the lush
                        landscapes of Devanahalli. This peaceful hideaway in
                        North Bangalore sits on 115 acres and has exclusive
                        residential plots with a modern design and green living
                        blend. The plots range from 1800 sq. ft. to 7200 sq. ft.
                        You could be fascinated by the botanical wonders found
                        at the Tree Museum or…
                      </p>
                      <hr className="mb-2" />

                      <div className="row">
                        <div className="col-lg-7 col-md-12">
                          <div className="row g-0">
                            <div className="col-xl-4 col-6">
                              <div className="CardBox First">
                                <h4>₹ 1.4 Cr</h4>
                                <h6>(₹ 6,990 / Sq Ft )</h6>
                              </div>
                            </div>
                            <div className="col-xl-4 col-6">
                              <div className="CardBox  ">
                                <h4>
                                  <img src={Image8} className="img-fluid" />{" "}
                                  Plot Size
                                </h4>
                                <h6>1,800 to 7,200 Sq Ft</h6>
                              </div>
                            </div>

                            <div className="col-xl-4 col-6">
                              <div className="CardBox border-0">
                                <h4>
                                  <img src={Image9} className="img-fluid" />{" "}
                                  Area
                                </h4>
                                <h6>115 Acres</h6>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-6 d-lg-none">
                              <div className="CardBox First">
                                <h4 className="Black">Total Unit</h4>
                                <h6>968</h6>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-6  d-lg-none">
                              <div className="CardBox ">
                                <h4 className="Black">Project Type </h4>
                                <h6>Plotted Development </h6>
                              </div>
                            </div>
                            <div className="col-xl-4 col-6  d-lg-none">
                              <div className="CardBox  border-0">
                                <h4 className="Black">Status</h4>
                                <h6>Newly Launched</h6>
                              </div>
                            </div>


                          </div>
                          <hr className="Desktop"/>
                          <div className="row g-0 Desktop" >
                            <div className="col-xl-4 col-lg-6 col-6">
                              <div className="CardBox First">
                                <h4 className="Black">Total Unit</h4>
                                <h6>968</h6>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-6">
                              <div className="CardBox ">
                                <h4 className="Black">Project Type </h4>
                                <h6>Plotted Development </h6>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                              <div className="CardBox  border-0">
                                <h4 className="Black">Status</h4>
                                <h6>Newly Launched</h6>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-3">
                            <hr />
                            <h5 className="mt-2 mb-2">30+ Amenities</h5>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Children's Liberary</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Ampitheare</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Basket ball,volley ball,</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Heated pool</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Tree Museum</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Cycling track</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Jogging track</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="Amenities">
                                <img src={Image5} className="img-fluid" />{" "}
                                <span>Pet park,</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12  p-sm-0">
                          <img src={Image7} className="img-fluid bannerImg Map" />
                        </div>
                      </div>
                      <div className="row Info Desktop">
                        <div className="col-md-12">
                          <div className="BtnGroup">
                            <a href="javascript:void(0)" className="BdrBtn">
                              Chat Now
                            </a>
                            <a href="javascript:void(0)" className="BdrBtn">
                              Call Now
                            </a>
                            <a href="javascript:void(0)" className="DarkBtn">
                              Schedule Site Visit
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="row Info Mobile">
                        <div className="col-md-12">
                          <div className="BtnGroup">
                            <a href="javascript:void(0)" className="BdrBtn">
                              Know More
                            </a> 
                            <a href="javascript:void(0)" className="DarkBtn">
                              Schedule Site Visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="DarkBtn ModalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Modal
</button>
 

    </div>
  );
};

export default Pages;
