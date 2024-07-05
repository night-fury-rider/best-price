import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  getInitialCards,
  getLowestPriceCardIndices,
  rateChanged,
} from './DashboardService';
import Card from '$clubhouse/components/card/Card';
import {DASHBOARD} from '$clubhouse/constants/strings.constants';
import {ICard} from './dashboard.types';
import {LIGHT_COLORS} from 'clubhouse/constants/colors.constants';

const DashboardScreen = () => {
  const [cards, setCards] = useState(getInitialCards() as ICard[]);
  const [bestPriceIndices, setBestPriceIndices] = useState([] as number[]);

  const handlePriceChange = (index: number, newPrice: number) => {
    const tmpCards = [...cards];
    tmpCards[index].price.value = newPrice;

    let tmpRate = newPrice / tmpCards[index].quantity.value;
    tmpRate = isFinite(tmpRate) && !isNaN(tmpRate) ? Number(tmpRate) : 0;
    tmpCards[index].rate.value = Number(tmpRate.toFixed(2));

    setCards(tmpCards);
    if (rateChanged(getInitialCards(), tmpCards)) {
      setBestPriceIndices(getLowestPriceCardIndices(tmpCards));
    }
  };

  const handleQuantityChange = (index: number, newQty: number) => {
    const tmpCards = [...cards];
    tmpCards[index].quantity.value = newQty;

    let tmpRate = tmpCards[index].price.value / newQty;
    tmpRate = isFinite(tmpRate) && !isNaN(tmpRate) ? Number(tmpRate) : 0;
    tmpCards[index].rate.value = Number(tmpRate.toFixed(2));

    setCards(tmpCards);
    if (rateChanged(getInitialCards(), tmpCards)) {
      setBestPriceIndices(getLowestPriceCardIndices(tmpCards));
    }
  };

  const isBestPriceCard = (cardIndex: number) =>
    bestPriceIndices.includes(cardIndex);

  return (
    <View style={styles.container}>
      {cards.map((cardObj, index) => (
        <Card
          firstInputTitle={DASHBOARD.price}
          firstInputValue={cardObj.price.value}
          handleFirstInputChange={val => {
            handlePriceChange(index, Number(val));
          }}
          secondInputTitle={DASHBOARD.quantity}
          secondInputValue={cardObj.quantity.value}
          handleSecondInputChange={val => {
            handleQuantityChange(index, Number(val));
          }}
          footerSubtitle={`${cardObj.rate.value}`}
          footerTitle={DASHBOARD.rate}
          customContainerStyle={
            isBestPriceCard(index) ? styles.bestPriceCard : {}
          }
          key={`card_${cardObj.price}_${cardObj.quantity}_${cardObj.rate}_${index}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  quantityInput: {},
  priceInput: {},
  tableContainer: {
    marginHorizontal: 50,
  },
  bestPriceCard: {
    backgroundColor: LIGHT_COLORS.success1,
  },
});

export default DashboardScreen;
