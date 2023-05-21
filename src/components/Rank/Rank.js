import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="white f1">
      {`Hey ${name}, your current rank is ${entries}`}{" "}
      {/* Later this will be dinamic*/}
    </div>
  );
};

export default Rank;
