import Child from "./Child";

const Parent = () => {
  const handleClick = () => {
    console.log("Button is Clicked!");
  };

  return (
    <>
      <Child color="green" onClick={handleClick} />
    </>
  );
};

export default Parent;
