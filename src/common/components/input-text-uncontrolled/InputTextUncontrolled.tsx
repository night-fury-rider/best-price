import {View} from 'react-native';
import {TextInput as LibraryInputText} from 'react-native-paper';
import {IInputUncontrolledProps} from './input-text-uncontrolled.types';

const InputTextUncontrolled = ({
  inputRef,
  label,
  customStyle,
}: IInputUncontrolledProps) => {
  return (
    <View>
      <LibraryInputText
        ref={inputRef}
        label={label}
        inputMode="numeric"
        style={customStyle}
      />
    </View>
  );
};

export default InputTextUncontrolled;
