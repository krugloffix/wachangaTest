import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
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
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#5945C9',
            tabBarIconStyle: {display: 'none'},
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {backgroundColor: '#f0edf6'},
          }}>
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
