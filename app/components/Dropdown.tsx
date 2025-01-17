import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface DropdownProps {
  label?: string;
  id?: string;
  items: Array<string>;
}

function Dropdown({ label, id, items }: DropdownProps) {
  var hideLabel = false

  if (label == undefined) {
    hideLabel = true
  }

  return (
    <View>
      
      { !hideLabel &&
        <Text>{label}</Text>
      }

      <SelectDropdown
        data={items}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem)}
              </Text>
              <Icon name="chevron-down" style={styles.dropdownButtonArrowStyle} />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 30,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    verticalAlign: "middle",
    fontSize: 16,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default Dropdown;
