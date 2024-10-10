import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

export default function SIgnIn() {
  return (
    <View style={styles.container}>
      <Header title="Acesse sua conta" />

      <View style={styles.formContainer}>
        <View style={styles.form}>
          <TextBox label="Email" placeholder="Digite seu email" />
        </View>
        <View style={styles.form}>
          <TextBox
            label="password"
            placeholder="Digite sua senha"
            isPassword
          />
        </View>

        <View>
          <Button title="Acessar" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity >
          <Text style={styles.footerText}>Crie minha conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}