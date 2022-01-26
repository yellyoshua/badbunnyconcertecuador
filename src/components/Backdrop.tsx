const backdrop = '/assets/Bad-Bunny-2022-tour-dates-featured.jpg';

interface PropTypes extends React.ComponentProps<'img'> {}

function Backdrop({ ...props }: PropTypes) {
  return <img src={backdrop} alt="badbunny-concert-backdrop" {...props} />;
}

export default Backdrop;
