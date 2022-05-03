import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const ProductsList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const { searchReducerA } = useActions();
  const state = useSelector((state: any) => state);
  console.log(state);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchReducerA(name);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          placeholder="Enter text here..."
          onChange={handleInput}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default ProductsList;
