import Box from './Box';
import Title from './Title';
import { parsePrice } from '../utils';
import store from '../store';

function PriceTiers() {
  const priceTiers = store((state) => state.priceTiers);

  return (
    <div>
      <Title content="Niveles de precios" />
      <div>
        {priceTiers.map((price, key) => (
          <Box
            key={`${price.name}-${key}`}
            value={price.name}
            label={parsePrice(price.price)}
          />
        ))}
      </div>
    </div>
  );
}

export default PriceTiers;
