interface StarsProps {
  num: number;
}

export const Stars = (props: StarsProps) => {
  let stars = [];
  for (let i = 0; i < props.num; i++) {
    stars.push(<FilledStar />);
  }
  for (let i = 0; i < 5 - props.num; i++) {
    stars.push(<EmptyStar />);
  }
  return <div className="flex items-center mt-2 mb-4">{stars}</div>;
};

const FilledStar = (): JSX.Element => {
  return (
    <svg
      className="mx-1 w-4 h-4 fill-current text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
};

const EmptyStar = (): JSX.Element => {
  return (
    <svg
      className="mx-1 w-4 h-4 fill-current text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
};
