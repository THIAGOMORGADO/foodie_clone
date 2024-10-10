import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import icons from '../../constants/icons'

export default function Header({title}) {
 return (
   <View style={styles.headerContainer}>
    <Image source={icons.logo} style={styles.logo}/>
    <Text style={styles.title}>{title}</Text>
   </View>
);

}
