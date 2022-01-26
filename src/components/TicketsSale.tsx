import Title from './Title';

const wheresToBuy = [
  {
    title: "Feel The Ticket's Site",
    logo: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/3788606/726967_626397.png',
    website: 'https://www.feelthetickets.com/'
  },
  {
    title: 'CMN Events',
    logo: 'https://cmnevents.com/wp-content/uploads/2019/04/CMN-Logo-CMN-Logo-CMN.png',
    website: 'https://cmnevents.com/on-tour/bad-bunny/'
  }
];

// TODO: Render the list's of stores
// TODO: A button that redirect to the website

function TicketsSale() {
  return (
    <div>
      <Title content="¿Dónde comprar?" />
      <div>{wheresToBuy.map(() => null)}</div>
    </div>
  );
}

export default TicketsSale;
