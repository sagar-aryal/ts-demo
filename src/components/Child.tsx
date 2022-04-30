interface ChildProps {
  color: string;
}

const Child = (props: ChildProps) => {
  return <>{props.color}</>;
};

export default Child;
