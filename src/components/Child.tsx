interface ChildProps {
  color: string;
}

/* const Child = ({ color }: ChildProps) => {
  return <>{color}</>;
}; */

/* All react components can optionally provide additional properties like (propsType, displayName, defaultProps and contextTypes). If we use the above convention to define props, TS won't be able to understand that its react component. so the best practice is the below one to define props using ts. */

const Child: React.FC<ChildProps> = ({ color }) => {
  return <>{color}</>;
};

export default Child;
