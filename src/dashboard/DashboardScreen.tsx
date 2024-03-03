import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  FAB,
  Icon,
  Input,
  ListItem,
  Switch,
  Text,
  useTheme,
} from '@rneui/themed';
import {DASHBOARD, SETTINGS} from 'clubhouse/constants/strings.constants';
import InputListItem from 'clubhouse/components/InputListItem';
import Header from 'clubhouse/components/Header';

import APP_CONFIG from '$clubhouse/constants/app.config.constants';
import {IMarker, IUnit} from '$dashboard/dashboard.types';
import {getMarkers} from './DashboardService';

// TODO: Use specific type instead of any
const DashboardScreen = ({navigation}: any) => {
  const {theme} = useTheme();

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState(APP_CONFIG.units[0] as IUnit);
  const [markers, setMarkers] = useState([] as IMarker[]);

  useEffect(() => {
    console.log(`useEffect ----------------------------------> price: ${price}
    quantity: ${quantity}
    unit: ${unit}`);
    if (price && quantity && unit) {
      updateMarkers();
    }
  }, [price, quantity, unit]);

  const renderItem = (
    itemLabel: string,
    itemValue?: string,
    editable?: boolean,
  ) => {
    return (
      <InputListItem
        itemLabel={itemLabel}
        itemValue={itemValue}
        editable={editable}
        customContainerStyle={{
          borderColor: theme.colors.background5,
          borderWidth: 1,
        }}
      />
    );
  };

  const handleMainPriceChange = (amount: number) => {
    setPrice(amount);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity(amount);
  };

  const handleUnitChange = (newUnit: IUnit) => {
    setUnit(newUnit);
  };

  const updateMarkers = () => {
    const result = getMarkers(
      price,
      quantity,
      unit,
      APP_CONFIG.offset,
      APP_CONFIG.depth,
    );
    console.log(`New Report: ${JSON.stringify(result)}`);
    setMarkers(result);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background1,
        },
      ]}>
      <View>
        <InputListItem
          itemLabel={DASHBOARD.quantity}
          editable={true}
          customContainerStyle={[
            styles.headerListItem,
            {
              backgroundColor: theme.colors.background2,
            },
          ]}
          customInputStyle={styles.numberInput}
          handleBlur={itemValue => {
            handleQuantityChange(Number(itemValue) || 0);
          }}
        />

        <InputListItem
          itemLabel={DASHBOARD.unit}
          editable={true}
          customContainerStyle={[
            styles.headerListItem,
            {backgroundColor: theme.colors.background2},
          ]}
          options={APP_CONFIG.units}
          optionSelectionDialogTitle={DASHBOARD.unitSelectionDialogTitle}
          handleOptionSelection={itemValue => {
            handleUnitChange(itemValue as IUnit);
          }}
        />

        <InputListItem
          itemLabel={DASHBOARD.price}
          editable={true}
          customContainerStyle={[
            styles.headerListItem,
            {backgroundColor: theme.colors.background2},
          ]}
          customInputStyle={styles.numberInput}
          handleBlur={itemValue => {
            handleMainPriceChange(Number(itemValue) || 0);
          }}
        />
      </View>
      {markers?.length > 0 ? (
        <FlatList
          data={markers}
          renderItem={({item}) => renderItem(item.name, `${item.value}`, false)}
          keyExtractor={item => item?.name + item.value}
          style={{
            backgroundColor: theme.colors.background1,
          }}
          contentContainerStyle={styles.markersContainer}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, flex: 1},
  headerListItem: {
    paddingVertical: 20,
  },

  numberInput: {borderColor: 'black', borderWidth: 1},
  markersContainer: {
    marginTop: 20,
  },
});

export default DashboardScreen;
