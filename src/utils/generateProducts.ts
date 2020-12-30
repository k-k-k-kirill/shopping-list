//Types
import { Product } from '../store/reducers/types'

//Utils
import getRandomInt from './getRandomInt'
import generateId from './generateId'

const generateProucts = (amount: number): Product[] => {
  let products: Product[] = [];

  let counter: number = 0;

  while (counter < amount) {
    products.push(
        {
            name: `Product${counter + 1}`,
            amount: getRandomInt(5, 30),
            id: generateId()
        }
    );

    counter++;
  }

  return products;
};

export default generateProucts;
