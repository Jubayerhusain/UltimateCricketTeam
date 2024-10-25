/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Available = ({ player }) => {
  console.log(player);
  const { name, age, role, battingStyle, bowlingStyle, team, price } = player;

  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 h-[500px] mx-auto mt-10 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="picture"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <img src="" alt="profile" />
              <h2 className="card-title">Name: {name}</h2>
            </div>
            <div className="justify-between items-center flex"> 
              <div className="flex items-center">
                <img src="" alt="" />
                <h2 className="text-lg font-normal text-gray-500">{team}</h2>
              </div>
              <button>All-Rounder</button>
            </div>
            <h1 className="text-xl font-semibold text-gray-700">Rating</h1>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-700">{bowlingStyle}</h1>
                <h1 className="text-xl font-semibold text-gray-500">{battingStyle}</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-700">Price: ${price}</h1>
                <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
