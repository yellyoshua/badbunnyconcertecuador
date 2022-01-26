export const parsePrice = (price: string) => {
  const priceNumber = Math.round(Number(price));
  return priceNumber === 0 ? ' - ' : `$${priceNumber}`;
};
