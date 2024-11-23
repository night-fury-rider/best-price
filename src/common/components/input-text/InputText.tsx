import {View} from 'react-native';
import {TextInput as LibraryInputText} from 'react-native-paper';
import {IInputProps} from './input-text.types';

const InputText = ({value, onChangeText, label, customStyle}: IInputProps) => {
  const inputfieldValue = value ? `${value}` : ``;
  const inputfieldLabel = label ? `${label}` : ``;
  return (
    <View>
      <LibraryInputText
        label={inputfieldLabel}
        value={inputfieldValue}
        inputMode="numeric"
        onChangeText={newValue => onChangeText?.(newValue)}
        style={customStyle}
      />
    </View>
  );
};

export default InputText;
