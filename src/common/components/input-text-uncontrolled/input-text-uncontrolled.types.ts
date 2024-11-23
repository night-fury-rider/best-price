import {StyleProp, ViewStyle} from 'react-native';

interface IInputUncontrolledProps {
  inputRef: any;
  onChangeText?: (updatedValue: string) => void;
  label?: string;
  customStyle?: StyleProp<ViewStyle>;
}

export type {IInputUncontrolledProps};
