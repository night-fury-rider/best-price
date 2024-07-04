import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

import * as settingsData from './settings.json';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">{settingsData.messages.comingSoon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  quantityInput: {},
  priceInput: {},
  tableContainer: {},
});

export default SettingsScreen;
