import {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';

import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams;
  const params = route.params;

  const {setName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });

    setName(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonaScreen</Text>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
