import uvNumber from '@uv-tech/util/lib/uv-number';

import {IUnit} from '$dashboard/dashboard.types';

const getMarkers = (
  benchmarkPrice: number,
  benchmarkQuantity: number,
  unit: IUnit,
  offset: number,
  depth: number,
) => {
  console.log(`getMarkers() benchmarkPrice: ${benchmarkPrice} 
  benchmarkQuantity: ${benchmarkQuantity}
  unit: ${unit}`);
  let markers = [];
  let unitPrice = benchmarkPrice / benchmarkQuantity;

  let value;
  for (let i = -depth + 1; i < 0; i++) {
    value = unitPrice * offset * i;
    if (value > 0) {
      markers.push({
        name: `${offset * i} ${unit}`,
        value: uvNumber.changeCurrencyFormat(Number(value.toFixed(2))),
      });
    }
  }

  for (let i = 1; i <= depth; i++) {
    markers.push({
      name: `${offset * i} ${unit}`,
      value: uvNumber.changeCurrencyFormat(
        Number((unitPrice * offset * i).toFixed(2)),
      ),
    });
  }

  return markers;
};

export {getMarkers};
