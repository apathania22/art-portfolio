import "./index.scss";
import hero from "./assets/hero.jpg";
import about from "./assets/about-1.png";
import fb from "./assets/fb.png";
import arrow from "./assets/arrow.png";
import linked from "./assets/linkedin.png";
import TextField from "./textField.jsx";
function App() {
  return (
    <div className="App">
      {/* --- Hero Page ---  */}
      <div className="main">
        <div className="name-hero">
          <div className="name">
            <h2 className="title"> AKSHAT R. TIWARY</h2>
            &nbsp; &nbsp;
            <span className="line" />
          </div>
          <h5 className="sub-title"> Hello there!</h5>
          <h6 className="sub-title-2"> Welcome to my home in </h6>
          <h6 className="sub-title-2"> the digital world. </h6>
        </div>
        <div className="image-containers">
          <img src={hero} alt={hero} className="img-fluid" />
        </div>
      </div>

      {/* About me ----  */}
      <div className="main-2">
        <div className="image-containers-2">
          <img src={about} alt={about} className="img-fluid" />
        </div>
        <div className="about">
          <div className="name ">
            <h2 className="title"> About me</h2>
            &nbsp; &nbsp; &nbsp;
            <span className="line" />
          </div>
          <p>
            {" "}
            If you are here, your search has led you to me - Akshat Tiwary, a
            curious marketeer building global brands by working on my passion
            for creativity, technology and business strategy.{" "}
          </p>
          <p>
            {" "}
            Working at some iconic agencies within WPP and IPG, I have been an
            Advertising Media consultant to brands in consumer apps, smartphone,
            alcobev, banking and financial services industries.Time spent in
            Asia, Europe and North America enriches the bank of my experience
            both professionally and culturally. When I tune down my work mode, I
            lean into my fitness routine and satisfy my love for long drives.{" "}
          </p>
          <div className="mini-content">
            <div>
              <p>
              If you are a buddy, let's catch up in my living room! Hit me up on{" "}
              </p>
              <a href="https://www.facebook.com/AkshatRTiwary">
              <img src={fb} alt={fb} className="img-fluid" height="35px"
                width="35px" />
              </a>
              &nbsp; &nbsp; &nbsp;
            </div>
            <div>
              <p>If we are associated professionally, connect with me. </p>
      <a href="https://www.linkedin.com/in/akshatrtiwary">
              <img
                src={linked} alt={linked} 
                className="img-fluid linkedin"
                height="35px"
                width="35px"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us container">
        <div className="contact-heading">
          <p className="title"> Contact me </p>
          &nbsp; &nbsp; &nbsp;
          <span className="line" />
        </div>
        <form name="contact-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
        <input 
         type='hidden' 
          name='form-name'
              value="contact-form" />
          <div className="form-holder">
            <div className="holder">
              <TextField placeholder="Name" type="text"  name="name"/>
            </div>

            <div className="holder">
              <TextField placeholder="Email" type="text" name="email" />
            </div>

            <div className="holder">
              <TextField placeholder="Mobile number" type="text" name="mobile"/>
            </div>
          </div>
          <br />
          <div className="holder">
            <TextField placeholder="Message" type="text" name="message" />
          </div>
          <br />
          <div data-netlify-recaptcha="true"></div>
          <br />
          <div>
          <button type="submit" className="sendMessage">Send Message</button>
            {/* <input type="submit" className="sendMessage" value="Send Message" /> */}

            <img src={arrow} alt={arrow} className="img-fluid" height="15px" width="15px" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
