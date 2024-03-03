import {ListItem as LibraryTextListItem, useTheme} from '@rneui/themed';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type DropdownListItemProps = {
  itemLabel: string;
  itemValue?: string;
  editable?: boolean;
  TextListItemStyle?: object;
  handlePress?: (event: GestureResponderEvent) => void;
};

const DropdownListItem = ({
  itemLabel,
  itemValue = '',
  editable = true,
  TextListItemStyle = {},
  handlePress,
}: DropdownListItemProps) => {
  const {theme} = useTheme();
  return (
    <LibraryTextListItem
      bottomDivider
      containerStyle={{
        backgroundColor: theme.colors.background7,
      }}
      style={styles.listItem}>
      <LibraryTextListItem.Content style={styles.titleContainer}>
        <LibraryTextListItem.Title style={styles.title}>
          {itemLabel}
        </LibraryTextListItem.Title>
      </LibraryTextListItem.Content>
      <LibraryTextListItem.Input
        inputMode="numeric"
        inputContainerStyle={styles.inputContainer}
        inputStyle={[styles.input, editable ? {} : styles.nonEditableInput]}
        editable={editable}>
        {itemValue}
      </LibraryTextListItem.Input>
    </LibraryTextListItem>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {
    flex: 1,
  },
  titleContainer: {
    flexGrow: 2,
  },
  title: {},
  inputContainer: {},
  input: {},
  nonEditableInput: {
    backgroundColor: 'lightgrey',
  },
});

export default DropdownListItem;
