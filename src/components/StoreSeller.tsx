import Title from './Title';

interface PropTypes {
  title: string;
  logo: string;
  website: string;
}

function StoreSeller({ title, website, logo }: PropTypes) {
  return (
    <a href={website} target="_blank">
      <div className="relative border-fuchsia-700 border-2 cursor-pointer p-2 rounded-md">
        <img
          className="h-20 bg-fuchsia-700 p-2 m-auto rounded-lg object-scale-down"
          src={logo}
          alt=""
        />
        <Title content={title} />
        {/* <p className="text-black text-lg text-center">{title}</p> */}
      </div>
    </a>
  );
}

export default StoreSeller;
