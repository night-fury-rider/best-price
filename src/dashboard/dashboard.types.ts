type IUnit = 'gm' | 'kg' | 'ml' | 'lt' | '';

interface IValue {
  value: number;
}

interface ICard {
  price: IValue;
  quantity: IValue;
  rate: IValue;
}

export type {ICard, IUnit};
