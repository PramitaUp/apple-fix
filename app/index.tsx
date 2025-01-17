import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import NavButton from './components/NavButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Dropdown label="Your name:" id="nameSelect" items={["Name 1", "Name 2", "Name 3", "Name 4"]}></Dropdown>
      <TextInput label="Team number:" editable={false}></TextInput>
      <NavButton text="Go" pageName="auto"></NavButton>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    rowGap: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
