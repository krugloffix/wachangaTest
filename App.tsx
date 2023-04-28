import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Items from './components/Items';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonScreen from './screens/ButtonScreen';
import GroupScreen from './screens/GroupScreen';
import InputScreen from './screens/InputScreen';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Group"
            component={GroupScreen}
            options={{title: 'Selected group'}}
          />
          <Tab.Screen
            name="Button"
            component={ButtonScreen}
            options={{title: 'Button'}}
          />
          <Tab.Screen
            name="Input"
            component={InputScreen}
            options={{title: 'Input'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
