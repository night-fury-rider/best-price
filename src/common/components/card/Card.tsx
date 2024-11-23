import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card as LibraryCard, Text} from 'react-native-paper';

import {ICardProps} from './card.types';
import InputText from '../input-text/InputText';

const Card = ({
  firstInputTitle,
  firstInputValue,
  handleFirstInputChange,
  secondInputTitle,
  secondInputValue,
  handleSecondInputChange,
  customContainerStyle,
  customInputStyle,
  footerSubtitle,
  footerTitle,
}: ICardProps) => {
  return (
    <LibraryCard
      style={[styles.container, customContainerStyle]}
      mode="contained">
      <LibraryCard.Content>
        <InputText
          label={firstInputTitle}
          value={firstInputValue}
          onChangeText={text => handleFirstInputChange(text)}
          customStyle={customInputStyle}
        />
        <InputText
          label={secondInputTitle}
          value={secondInputValue}
          onChangeText={text => handleSecondInputChange(text)}
          customStyle={customInputStyle}
        />

        <View style={styles.footerContainer}>
          {footerTitle ? (
            <Text variant="titleLarge">
              {footerTitle}: {footerSubtitle}
            </Text>
          ) : null}
        </View>
      </LibraryCard.Content>
    </LibraryCard>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 3,
    margin: 10,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Card;
