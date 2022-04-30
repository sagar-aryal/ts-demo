import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <>
      <h1>GuestList</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter here..."
        onChange={handleInput}
      />
      <button onClick={handleClick}>Add Guest</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
