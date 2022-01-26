import Title from './Title';
import { parsePrice } from '../utils';
import store from '../store';

function PriceTiers() {
  const priceTiers = store((state) => state.priceTiers);

  return (
    <div>
      <Title content="Niveles de precios" />
      <div className="py-3">
        <table className="table-auto md:table-fixed border border-white text-white m-auto">
          <thead>
            <tr>
              <th className="border border-white p-1 font-sans">Ubicación</th>
              <th className="border border-white p-1 font-sans">Tickets</th>
              <th className="border border-white p-1 font-sans">Vendidos</th>
              <th className="border border-white p-1 font-sans">Agotado</th>
              <th className="border border-white p-1 font-sans">Precio</th>
            </tr>
          </thead>
          <tbody>
            {priceTiers.map((tier, key) => (
              <tr key={`${tier.name}-${key}`}>
                <td className="border border-white p-1 text-sm">{tier.name}</td>
                <td className="border border-white p-1 text-center font-sans text-sm">
                  {tier.quantity}
                </td>
                <td className="border border-white p-1 text-center font-sans text-sm">
                  {tier.quantity_sold}
                </td>
                <td className="border border-white p-1 text-center font-sans text-sm">
                  {tier.sold_out ? 'x' : '-'}
                </td>
                <td className="border border-white p-1 text-center font-sans text-sm">
                  {parsePrice(tier.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PriceTiers;
