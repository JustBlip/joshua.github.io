import "./Experience.css";
import Navbar from "./Navbar";


import ojtk1Image from "../img/ojtk1.jpg";
import ojtk2Image from "../img/ojtk2.jpg";
import ojtk3Image from "../img/ojtk3.jpg";
import OJTImage from "../img/OJT.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">My Experiences</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <h4><p className="display-6 text-white">OJT at the Office of Panasiatic, Bacolod City</p></h4 >
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojtk1Image} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojtk2Image} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojtk3Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJTImage} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              

              <hr />
              

              
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div class="row mt-3">
            <div class="col-md-12 text-center text-md-left text-light">
              <p> Copy rigth @ 2024 Joshua's Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
