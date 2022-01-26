import EventLocation from './EventLocation';
import PriceTiers from './PriceTiers';
import TicketsSale from './TicketsSale';

function Details() {
  return (
    <section className="py-5">
      <EventLocation />
      <TicketsSale />
      <PriceTiers />
    </section>
  );
}

export default Details;
