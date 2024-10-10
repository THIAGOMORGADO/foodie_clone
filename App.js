import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import { styles } from './src/global/GlobalStyle.js'

import icons from './src/constants/icons'
import Button from './src/components/Button/Button.jsx';

export default function App() {

  let name = 'Thiago Morgado'
  const estudosGuide = 'React Native Basico de '
  return (
    <View >
      <Text style={styles.TextContaier}>Bem vindo, {name}!</Text>
      <Button title="Acessar" />
      <StatusBar style="auto" />
    </View>
  );
}

