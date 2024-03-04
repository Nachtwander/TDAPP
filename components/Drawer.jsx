import { createDrawerNavigator } from '@react-navigation/drawer';

//componentes de pantalla
import { Pokemon } from '../screens/Pokemon';
import { Detalles } from '../screens/Detalles';


const Drawer = createDrawerNavigator();

export function NavGabetero() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pokemon" component={Pokemon} />
      <Drawer.Screen name="Detalles" component={Detalles} />
    </Drawer.Navigator>
  );
}