interface PropTypes {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
}

function Box({ label, value }: PropTypes) {
  return (
    <div className="grid grid-cols-2">
      <p className="py-2 px-1 text-2xl text-white text-center bg-black bg-opacity-60">
        {value}
      </p>
      <p className="py-2 px-1 text-xl text-white text-center bg-black bg-opacity-60">
        {label}
      </p>
    </div>
  );
}

export default Box;
