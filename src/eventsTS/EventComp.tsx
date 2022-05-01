import React from "react";

const EventComp = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <input
        type="text"
        value=""
        placeholder="Please type here..."
        onChange={handleInput}
      />
    </>
  );
};

export default EventComp;
