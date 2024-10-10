import {styles} from './styles'
import { Text, TouchableOpacity } from 'react-native';

export default function Button({title}) {
 return (
  <TouchableOpacity style={styles.btn}>
    <Text style={styles.buttonText}>{title}</Text>
   </TouchableOpacity>
 );
}