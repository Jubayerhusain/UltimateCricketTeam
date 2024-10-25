/* eslint-disable react/prop-types */
import { useState } from "react";
import Available from "../AvailabePlayers/Available";
import Selected from "../selectedPlayers/Selected";
const AllPlayers = ({ handleCartStatus, isActive }) => {
//   console.log(handleCartStatus);
    const [allPlayers, setAllPlayers] = useState([]);
    
  return (
    <div>
      <div className="flex justify-end items-center  bg-white py-5 rounded-xl">
        <button
          onClick={() => handleCartStatus("available")}
          className={`${
            isActive.available
              ? "bg-[#E7FE29] text-gray-700 font-semibold"
              : "text-gray-500 bg-gray-100 font-semibold"
          } px-5 py-3 border-none text-xl rounded-l-lg`}
        >
          Available
        </button>
        <button
          onClick={() => handleCartStatus("selected")}
          className={`${
            isActive.available
              ? "text-gray-500 bg-gray-100 font-semibold"
              : "bg-[#E7FE29] text-gray-700 font-semibold"
          } px-5 py-3 border-none text-xl rounded-r-lg`}
        >
          Selected 0
        </button>
      </div>
      {isActive.available ? <Available></Available> : <Selected></Selected>}
    </div>
  );
};

export default AllPlayers;
