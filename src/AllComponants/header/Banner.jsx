/* eslint-disable react/prop-types */
import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";
const Banner = ({addCoinToFreeCadit}) => {
  return (
    <div className="">
      <div className="mt-6 ">
        <div
          className="hero min-h-[720px] w-11/12 mx-auto rounded-3xl  bg-black"
          style={{
            backgroundImage: `url(${bgShadow})`,
          }}
        >
          <div className="hero-overlay rounded-3xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className=" flex flex-col items-center space-y-5">
              <img src={bannerMain} alt="" />
              <h1 className="mb-5 text-5xl font-bold inline-block">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="mb-5">Beyond Boundaries Beyond Limits</p>
              <div className="border-2 border-[#E7FE29] p-1 rounded-xl hover:border-red-200">
                <button onClick={()=>addCoinToFreeCadit(999900)} className=" rounded-lg border-none btn text-lg btn-primary bg-[#E7FE29] text-black font-semibold hover:bg-red-200">
                  Claim Free Credit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
