/* eslint-disable react/prop-types */
const Selected = ({ selectedplayers, handleCartStatus, isActive, deleteHundleBtn }) => {
  return (
    <div>
      <h1 className="text-3xl text-gray-900 font-bold">
        Selected Player ({selectedplayers.length}/6)
      </h1>
      {selectedplayers.map((player, index) => (
        <div key={index}>
          <div className="flex justify-between items-center border-2 p-5 my-3 rounded-lg">
            <div className="flex space-x-4">
              <img className="w-24 h-20 rounded-lg" src={player.img} alt="" />
              <div>
                <h2 className="text-xl font-semibold text-gray-600">
                  Name: {player.name}
                </h2>
                <p>{player.bowlingStyle}</p>
                <p>{player.battingStyle}</p>
              </div>
            </div>
            <div>
              <button onClick={()=>deleteHundleBtn(player.id)} className="btn btn-error text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => handleCartStatus("available")}
        className={`${
          isActive.available
            ? "text-gray-500 bg-gray-100 font-semibold"
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
        } px-5 py-3 border-none text-xl rounded-xl`}
      >
        Available
      </button>
    </div>
  );
};

export default Selected;
