const ecuador = '/assets/ecuador.png';

function EcuadorIcon() {
  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-60 my-5 p-2 rounded-full">
        <img className="w-14 md:w-20" src={ecuador} alt="Ecuador" />
      </div>
    </div>
  );
}

export default EcuadorIcon;
