import {StyleProp, ViewStyle} from 'react-native';

interface IInputProps {
  value: string | number;
  onChangeText?: (updatedValue: string) => void;
  onEndEditing?: () => void;
  label?: string;
  customStyle?: StyleProp<ViewStyle>;
}

export type {IInputProps};
