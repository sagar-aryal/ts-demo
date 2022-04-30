import React, { useState } from "react";

const guests = [
  {
    id: 1,
    name: "Sagar",
    age: 20,
  },
  {
    id: 2,
    name: "Sarah",
    age: 21,
  },
  {
    id: 3,
    name: "Jenna",
    age: 22,
  },
  {
    id: 4,
    name: "Saga",
    age: 23,
  },
];

const GuestSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [search, setSearch] = useState<
    | {
        id: number;
        name: string;
        age: number;
      }
    | undefined
  >();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const searchGuest = guests.find((guest) => guest.name === name);
    console.log(searchGuest);
    setSearch(searchGuest);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Search Guest..."
        onChange={handleInput}
      />
      <button onClick={handleClick}>Search Guests</button>
      <div>{search && search.name}</div>
    </>
  );
};

export default GuestSearch;
