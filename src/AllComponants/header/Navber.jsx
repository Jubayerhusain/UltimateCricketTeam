import logoImage from '../../assets/logo.png'
import coin from '../../assets/coin.png'
const Navber = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto shadow-md'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className='font-semibold text-lg text-gray-700'>Home</a>
              </li>
              <li>
                <a className='font-semibold text-lg text-gray-700'>Fixture</a>
              </li>
              <li>
                <a className='font-semibold text-lg text-gray-700'>Teams</a>
              </li>
              <li>
                <a className='font-semibold text-lg text-gray-700'>Schedules </a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl"></a> */}
          <img src={logoImage} alt="" />
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className='font-semibold text-lg text-gray-700'>Home</a>
            </li>
            <li>
              <a className='font-semibold text-lg text-gray-700'>Fixture</a>
            </li>
            <li>
              <a className='font-semibold text-lg text-gray-700'>Teams</a>
            </li>
            <li>
              <a className='font-semibold text-lg text-gray-700'>Schedules </a>
            </li>
          </ul>
        </div>
          <a className="btn font-semibold text-lg text-gray-700">0 Coin <img className='w-8 h-8' src={coin} alt="" /></a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navber;
