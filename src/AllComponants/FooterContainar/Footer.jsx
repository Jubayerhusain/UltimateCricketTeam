import footerLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
      <div className="bg-[#06091A] w-100% mt-10">
        {/* top footer  */}
        <div>
            
        </div>
        <div className='flex justify-center'>
        <img className=' my-10' src={footerLogo} alt="Footer logo image" />
        </div>
        <footer className="justify-around w-full footer bg-transparent p-10 mb-1 text-gray-400">
          <nav>
            <h6 className="footer-title  text-gray-100">About Us</h6>
            <p>We are a passionate team <br />
             dedicated to providing the <br />
             best services to our customers.</p>
          </nav>
          <nav>
            <h6 className="footer-title text-gray-100">Quick Links</h6>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Searvise</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
          <form>
            <h6 className="footer-title  text-gray-100">Subscribe</h6>
           <p>Subscribe to our newsletter for the latest updates.</p>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-yellow-200">Enter your email address</span>
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
  