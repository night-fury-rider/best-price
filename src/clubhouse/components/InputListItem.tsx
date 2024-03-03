import {
  Badge,
  Dialog,
  ListItem as LibraryTextListItem,
  useTheme,
} from '@rneui/themed';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

type InputListItemProps = {
  itemLabel: string;
  itemValue?: string | number;
  options?: any[];
  optionSelectionDialogTitle?: string;
  editable?: boolean;
  customContainerStyle?: object;
  customListItemStyle?: object;
  customTitleContainerStyle?: object;
  customTitleStyle?: object;
  customInputContainerStyle?: object;
  customInputStyle?: object;
  handleBlur?: (itemValue: string) => void;
  handleOptionSelection?: (itemValue: string) => void;
};

const InputListItem = ({
  itemLabel,
  itemValue = '',
  options,
  optionSelectionDialogTitle,
  editable = true,
  customContainerStyle = {},
  customListItemStyle = {},
  customTitleContainerStyle = {},
  customTitleStyle = {},
  customInputContainerStyle = {},
  customInputStyle = {},
  handleBlur,
  handleOptionSelection,
}: InputListItemProps) => {
  const {theme} = useTheme();
  const [isOptionSelectionVisible, setOptionSelectionVisible] = useState(false);
  const [selectedOption, changeOption] = useState(options?.[0] || '');

  const confirmOptionSelection = () => {
    setOptionSelectionVisible(true);
  };

  const hideOptionSelection = () => {
    setOptionSelectionVisible(false);
  };

  const handleOptionChange = (optionIndex: number) => {
    handleOptionSelection?.(options?.[optionIndex]);
    changeOption(options?.[optionIndex]);
    hideOptionSelection();
  };

  return (
    <LibraryTextListItem
      bottomDivider
      containerStyle={[
        {
          backgroundColor: theme.colors.background7,
        },
        customContainerStyle,
      ]}
      style={[styles.listItem, customListItemStyle]}>
      <LibraryTextListItem.Content
        style={[styles.titleContainer, customTitleContainerStyle]}>
        <LibraryTextListItem.Title style={[styles.title, customTitleStyle]}>
          {itemLabel}
        </LibraryTextListItem.Title>
      </LibraryTextListItem.Content>

      {options ? (
        <Badge
          badgeStyle={styles.optionSelectionBadge}
          textStyle={styles.optionSelectionDialogBadgeTitle}
          value={selectedOption}
          status="primary"
          onPress={confirmOptionSelection}
        />
      ) : (
        <LibraryTextListItem.Input
          inputMode="numeric"
          inputContainerStyle={[
            styles.inputContainer,
            customInputContainerStyle,
          ]}
          inputStyle={[
            styles.input,
            editable ? {} : styles.nonEditableInput,
            customInputStyle,
          ]}
          onEndEditing={(event: any) => {
            handleBlur?.(event.nativeEvent.text);
          }}
          editable={editable}>
          {itemValue}
        </LibraryTextListItem.Input>
      )}

      {options && options?.length > 0 ? (
        <Dialog
          isVisible={isOptionSelectionVisible}
          onBackdropPress={hideOptionSelection}
          overlayStyle={{
            backgroundColor: theme.colors.background2,
          }}>
          <Dialog.Title
            title={optionSelectionDialogTitle}
            titleStyle={styles.optionSelectionDialogTitle}
          />
          {options?.map((optionValue, optionIndex) => (
            <LibraryTextListItem
              key={optionIndex}
              containerStyle={styles.optionSelectionDialogContainer}
              onPress={() => handleOptionChange(optionIndex)}>
              <LibraryTextListItem.Content>
                <LibraryTextListItem.Title
                  style={styles.optionSelectionDialogBadgeTitle}>
                  {optionValue}
                </LibraryTextListItem.Title>
              </LibraryTextListItem.Content>
            </LibraryTextListItem>
          ))}
        </Dialog>
      ) : null}
    </LibraryTextListItem>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {},
  titleContainer: {
    flexGrow: 2,
  },
  title: {},
  inputContainer: {},
  input: {},
  nonEditableInput: {
    backgroundColor: 'lightgrey',
    width: 300,
  },
  optionSelectionBadge: {borderRadius: 50, height: 40, width: 80},
  optionSelectionDialogBadgeTitle: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  optionSelectionDialogTitle: {
    fontFamily: 'IBMPlexSerif-Bold',
    fontWeight: '600',
  },
  optionSelectionDialogContainer: {borderRadius: 8, marginTop: 5},
});

export default InputListItem;
