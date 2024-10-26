const Footer = () => {
  return (
    <div>
        
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Searvise</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
         <p>Subscribe to our newsletter for the latest updates.</p>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
