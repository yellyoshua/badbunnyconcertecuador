import store from '../store';

function TicketSellStatus() {
  const { isOnSaleNow, isPreSale, isOnSaleSoon } = store(
    (state) => state.ticketSellStatus
  );

  const renderSellStatus = () => {
    if (isOnSaleNow) {
      return (
        <a href="https://www.worldshottesttour.com/" target="_blank">
          <div className="bg-green-600 hover:bg-green-500 transition-colors px-5 py-1 m-auto shadow-lg rounded-md">
            <p className="text-white text-xl">A la venta!!</p>
          </div>
        </a>
      );
    }

    if (isPreSale) {
      return (
        <a href="https://www.worldshottesttour.com/" target="_blank">
          <div className="bg-green-600 hover:bg-green-500 transition-colors px-5 py-1 m-auto shadow-lg rounded-md">
            <p className="text-yellow-400 text-xl">Preventa!!</p>
          </div>
        </a>
      );
    }

    if (isOnSaleSoon) {
      return (
        <a href="https://www.worldshottesttour.com/" target="_blank">
          <div className="bg-red-700 hover:bg-red-600 transition-colors px-5 py-1 m-auto shadow-lg rounded-md">
            <p className="text-white text-xl">Pronto a la venta</p>
          </div>
        </a>
      );
    }

    return (
      <a href="https://www.worldshottesttour.com/" target="_blank">
        <div className="bg-red-700 hover:bg-red-900 transition-colors px-5 py-1 m-auto shadow-lg rounded-md">
          <p className="text-white text-xl">Agotado :(</p>
        </div>
      </a>
    );
  };

  return (
    <div className="flex items-center bg-white justify-center py-3">
      {renderSellStatus()}
    </div>
  );
}

export default TicketSellStatus;
