import {ViewStyle} from 'react-native';

interface ICardProps {
  firstInputTitle: string;
  firstInputValue: string | number;
  handleFirstInputChange: (updatedValue: string) => void;
  secondInputTitle: string;
  secondInputValue: string | number;
  handleSecondInputChange: (updatedValue: string) => void;

  customContainerStyle?: ViewStyle[];
  customInputStyle?: ViewStyle[];
  footerSubtitle?: string;
  footerTitle?: string;
}

export type {ICardProps};
