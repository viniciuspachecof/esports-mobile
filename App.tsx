import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface IButton {
  text: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Dale</Text>
      <Button text='hehehehe' />
      <StatusBar style="auto" />
    </View>
  );
}

function Button(props: IButton) {
  return (
    <Text>{props.text}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
