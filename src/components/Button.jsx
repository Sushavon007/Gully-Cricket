import React from "react";

function Button({
  label,
  score,
  run = 0,
  isOut = 0,
  isBall = 1,
  setScore,
  over,
  setOver,
  wicket,
  setWicket,
  balls,
  setBalls,
  setPopupVisible,
}) {
  const handleScore = () => {
    if (wicket != 0) {
      setScore(score + run);
      setWicket(wicket - isOut);
      const newBalls = balls + isBall;
      const newOvers = over + (newBalls === 6 ? 1 : 0);
      setBalls(newBalls === 6 ? 0 : newBalls);
      setOver(newOvers);
    }
    if(label==="No-Ball"){
      setPopupVisible(true);
    }else{
      setPopupVisible(false);
    }
  };
  return (
    <div
      className="flex justify-center items-center aspect-1/1 p-1 rounded-2xl bg-[#321d7f] hover:bg-[#483492] lg:w-[120px] w-[90px] cursor-pointer active:scale-90 transition-transform duration-150 ease-in-out inset-shadow-sm inset-shadow-[#7a64c7] shadow-lg shadow-[#111]"
      onClick={handleScore}
    >
      <h1 className="lg:text-2xl text-xl text-[#fff]">{label}</h1>
    </div>
  );
}

export default Button;
