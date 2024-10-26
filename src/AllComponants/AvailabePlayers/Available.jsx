/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Available = ({ player,disPlaySelectPlayer }) => {
  // console.log(disPlaySelectPlayer);
  // console.log(player);
  const { name, age, role, battingStyle, bowlingStyle, team, price, img, flag } =
    player;

  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 h-[560px] mx-auto mt-10 shadow-xl">
          <figure className=" w-[380px] ">
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
            <div className="justify-between items-center flex">
              <div className="flex items-center space-x-1">
                <img className="h-4 w-6" src={flag} alt="" />
                <h2 className="text-lg font-normal text-gray-500">{team}</h2>
              </div>
              <button>All-Rounder</button>
            </div>
            <h1 className="text-xl font-semibold text-gray-700">Rating</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-700">
                {bowlingStyle}
              </h1>
              <h1 className="text-xl font-semibold text-gray-500">
                {battingStyle}
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-700">
                Price: ${price}
              </h1>
              <button onClick={()=>disPlaySelectPlayer(player)} className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
