import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {};

const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Text>Navegar con argumentos</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 1,
              name: 'Acxel',
            })
          }>
          <Icon name="man-outline" size={30} color="#FFF" />
          <Text style={styles.botonGrandeTexto}>Acxel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={30} color="#FFF" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
