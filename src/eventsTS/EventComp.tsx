import React from "react";

const EventComp = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
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
      <div draggable onDragStart={handleDragStart}>
        Drag me !
      </div>
    </>
  );
};

export default EventComp;
