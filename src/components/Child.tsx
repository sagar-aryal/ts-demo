interface ChildProps {
  color: string;
}

const Child = ({ color }: ChildProps) => {
  return <>{color}</>;
};

export default Child;
