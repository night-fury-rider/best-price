import uvNumber from '@uv-tech/util/lib/uv-number';

import {ICard, IUnit} from '$dashboard/dashboard.types';

const getInitialCards = () => [
  {
    price: {
      value: 0,
    },
    quantity: {
      value: 0,
    },
    rate: {
      value: 0,
    },
  },
  {
    price: {
      value: 0,
    },
    quantity: {
      value: 0,
    },
    rate: {
      value: 0,
    },
  },
];

const getMarkers = (
  benchmarkPrice: number,
  benchmarkQuantity: number,
  unit: IUnit,
  offset: number,
  depth: number,
) => {
  let markers = [];
  let unitPrice = benchmarkPrice / benchmarkQuantity;

  let value;
  for (let i = -depth + 1; i < 0; i++) {
    value = unitPrice * offset * i;
    if (value > 0) {
      markers.push({
        key: `${offset * i} ${unit}`,
        name: `${offset * i} ${unit}`,
        value: uvNumber.changeCurrencyFormat(Number(value.toFixed(2))),
      });
    }
  }

  for (let i = 1; i <= depth; i++) {
    markers.push({
      key: `${offset * i} ${unit}`,
      name: `${offset * i} ${unit}`,
      value: uvNumber.changeCurrencyFormat(
        Number((unitPrice * offset * i).toFixed(2)),
      ),
    });
  }

  return markers;
};

const getLowestPriceCardIndices = (cards: ICard[]) => {
  let resultMap = {
    value: 0,
    indices: [] as number[],
  };

  let lowestPrice = cards[0].rate.value;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].rate.value < lowestPrice) {
      resultMap = {
        value: cards[i].rate.value,
        indices: [i],
      };
    }
    // When multiple cards have same rate.
    else if (cards[i].rate.value === lowestPrice) {
      resultMap.indices.push(i);
    }
  }
  return resultMap.indices;
};

const rateChanged = (initialCards: ICard[], newCards: ICard[]) => {
  if (
    initialCards?.[0]?.rate?.value !== newCards?.[0]?.rate?.value &&
    initialCards?.[1]?.rate?.value !== newCards?.[1]?.rate?.value
  ) {
    return true;
  }
  return false;
};

export {getInitialCards, getLowestPriceCardIndices, getMarkers, rateChanged};
