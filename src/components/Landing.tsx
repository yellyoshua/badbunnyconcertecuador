import ArrowDown from './ArrowDown';
import Backdrop from './Backdrop';
import CountDown from './CountDown';
import EcuadorIcon from './EcuadorIcon';
import EventDate from './EventDate';
import EventTitle from './EventTitle';
import store from '../store';

function Landing() {
  const startAt = store((state) => state.startAt!);

  return (
    <div className="relative z-10 w-full h-screen flex items-center justify-center bg-black">
      <Backdrop className="hidden md:block absolute w-full h-full top-0 left-0 object-cover md:object-scale-down" />
      <ArrowDown className="hidden md:block absolute bottom-0  mb-32 p-2 md:mb-0" />
      <div className="z-20 md:mb-0">
        <Backdrop className="block md:hidden w-52 m-auto my-5 object-scale-down rounded-xl" />
        <EventTitle />
        <EcuadorIcon />
        <CountDown end={new Date(startAt)} />
        <EventDate date={new Date(startAt)} />
        <ArrowDown className="block md:hidden mt-5 p-2" />
      </div>
    </div>
  );
}

export default Landing;
