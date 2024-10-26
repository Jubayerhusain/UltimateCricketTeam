/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Available from "../AvailabePlayers/Available";
import Selected from "../selectedPlayers/Selected";
const AllPlayers = ({ handleCartStatus, isActive }) => {
  //   console.log(handleCartStatus);
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    fetch(`playerData.json`)
      .then((response) => response.json())
      .then((data) => setAllPlayers(data.players));
  }, []);

  const [selectedplayers, setSelectedPlayers] = useState([]);
  const disPlaySelectPlayer = (player) => {
    const existingPlayer = selectedplayers.find(selected => selected.id === player.id);
    if(existingPlayer){
      alert('Player All ready selected')
    }
    else{
      const addnewPlayer = [...selectedplayers, player]
    setSelectedPlayers(addnewPlayer);
    }
  }
  // console.log(selectedplayers);

  return (
    <div>
      <div className=" sticky top-0 z-10 backdrop-blur-sm">
        <div className="flex justify-end items-center  bg-transparent py-5 rounded-xl ">
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
      </div>
      <div>
        {isActive.status === "available" ? (
          <div>
            <h1 className="text-3xl text-gray-900 font-bold">
              Available Players
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {allPlayers.map((player) => (
                <Available key={player.id} player={player} disPlaySelectPlayer={disPlaySelectPlayer} />
              ))}
            </div>
          </div>
        ) : (
          <Selected selectedplayers={selectedplayers}/>
        )}
      </div>
      {/* {isActive.available ? <Available ></Available> : <Selected></Selected>} */}
    </div>
  );
};

export default AllPlayers;
