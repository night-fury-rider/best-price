import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  getInitialCards,
  getLowestPriceCardIndices,
  rateChanged,
} from './DashboardService';
import Card from '$common/components/card/Card';
import {DASHBOARD} from '$common/constants/strings.constants';
import {ICard} from './dashboard.types';
import {LIGHT_COLORS, DARK_COLORS} from '$common/constants/colors.constants';

const DashboardScreen = () => {
  const theme = useTheme();

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
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: theme.colors.surface}]}>
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
            customContainerStyle={[
              {
                backgroundColor: theme.dark
                  ? theme.colors.surface
                  : LIGHT_COLORS.background4,
                elevation: 1,
              },
              isBestPriceCard(index)
                ? {
                    backgroundColor: theme.dark
                      ? DARK_COLORS.background10
                      : LIGHT_COLORS.background10,
                  }
                : {},
            ]}
            customInputStyle={[
              {
                backgroundColor: theme.dark
                  ? theme.colors.surfaceVariant
                  : LIGHT_COLORS.background1,
              },
            ]}
            key={`card_${cardObj.price}_${cardObj.quantity}_${cardObj.rate}_${index}`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DashboardScreen;
