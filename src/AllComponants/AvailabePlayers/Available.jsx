/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Available = ({ player, disPlaySelectPlayer }) => {
  const {
    name,
    age,
    role,
    battingStyle,
    bowlingStyle,
    team,
    price,
    img,
    flag,
  } = player;

  return (
    <div>
      <div>
        <div className="card bg-base-100 w-[370px] h-[560px] mx-auto mt-10 shadow-xl">
          <figure className=" w-100% ">
            <img
              className="w-full object-fill rounded-lg h-full"
              src={img}
              alt="picture"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center space-x-2">
              <img className="rounded-full w-12 h-12" src={img} alt="profile" />
              <h2 className="card-title">Name: {name}</h2>
            </div>
            <div className="justify-between items-center flex border-b-2 pb-2">
              <div className="flex items-center space-x-1 ">
                <img className="h-4 w-6" src={flag} alt="" />
                <h2 className="text-lg font-normal text-gray-500">{team}</h2>
              </div>
              <button className="border-2 p-2 rounded-lg text-lg">
                All-Rounder
              </button>
            </div>
            <div className="flex space-x-4 items-center">
              <div>
                <h1 className="text-lg font-semibold text-gray-700">Rating</h1>
              </div>
              <div>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-gray-700">
                {bowlingStyle}
              </h1>
              <h1 className="text-mg font-semibold text-gray-500">
                {battingStyle}
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-gray-700">
                Price: ${price}
              </h1>
              <button
                onClick={() => disPlaySelectPlayer(player)}
                className="btn hover:bg-[#E7FE29]"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
