import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-me">
        <h3>ABOUT ME</h3>
        <p>Hi there, I&apos;m Naeem Sarker. I&apos;m a full stack web developer.</p>
        <span>Copyright 2024 All Right Reserved</span>
      </div>

      <div className="newsletter">
        <h3>NEWSLETTER</h3>
        <div className="imput">
          <input type="email" name="" id="" placeholder="Enter Email Address" />
          <button>Submit</button>
        </div>
      </div>

      <div className="follow-me">
        <h3>FOLLOW ME</h3>
        <div className="icon">
            <div>Linkedin</div>
            <div>CodeForces</div>
            <div>GitHub</div>
            <div>Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
