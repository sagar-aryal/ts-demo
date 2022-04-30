import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <h1>GuestList</h1>
      <input type="text" value={name} onChange={handleInput} />
      <button>Add Guest</button>
    </>
  );
};

export default GuestList;
