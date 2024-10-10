import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function TextBox(props) {
 return (
   <>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput 
      placeholder={props.placeholder} 
      style={styles.input}
      secureTextEntry={props.isPassword  }
    />
   </>
  );
}