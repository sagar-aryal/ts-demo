interface ChildProps {
  color: string;
  onClick: () => void; // function if it doesn't return anything.
}

/* const Child = ({ color }: ChildProps) => {
  return <>{color}</>;
}; */

/* All react components can optionally provide additional properties like (propsType, displayName, defaultProps and contextTypes). If we use the above convention to define props, TS won't be able to understand that its react component. so the best practice is the below one to define props using ts. */

const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <>
      <h1>{color}</h1>
      <button onClick={onClick}>Click Me</button>
    </>
  );
};

export default Child;
