import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

export default function Register() {
  return (
      <ScrollView>
           <View style={styles.container}>
      <Header title="Criar uma conta." />

      <View style={styles.formContainer}>

        <View style={styles.form}>
          <TextBox label="Nome Completo" placeholder="Nome Completo" />
        </View>

        <View style={styles.form}>
          <TextBox label="Email" placeholder="Digite seu email" />
        </View>
        <View style={styles.form}>
          <TextBox
            label="Escolha uma senha"
            placeholder="Escolha uma senha"
            isPassword
          />
        </View>

        <View style={styles.form}>
          <TextBox
            label="Confirme a Senha"
            placeholder="Confirme a Senha"
            isPassword
          />
        </View>

        <View>
          <Button title="Proximo passo" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity >
          <Text style={styles.footerText}>Crie minha conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
      </ScrollView>
    
  

   
  );
}