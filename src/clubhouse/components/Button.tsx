import {Button as LibraryButton, useTheme} from '@rneui/themed';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  buttonStyle?: object;
  handlePress?: (event: GestureResponderEvent) => void;
};

const Button = ({title, buttonStyle = {}, handlePress}: ButtonProps) => {
  const {theme} = useTheme();
  return (
    <LibraryButton
      onPress={handlePress}
      title={title}
      buttonStyle={[
        styles.button,
        buttonStyle,
        {backgroundColor: theme.colors.background6},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default Button;
