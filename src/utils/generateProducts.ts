import getRandomInt from './getRandomInt'
import { Product } from '../store/reducers/types'

const generateProucts = (amount: number): Product[] => {
  let products: Product[] = [];

  let counter: number = 0;

  while (counter < amount) {
    products.push(
        {
            name: `Product${counter + 1}`,
            price: getRandomInt(5, 30)
        }
    );

    counter++;
  }

  return products;
};

export default generateProucts;
