import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator,Screen} = createStackNavigator();
import EstruturaMap from './pages/EstruturaMap';
import EstruturaDetails from './pages/EstruturaDetails';



export default function Routes(){
    return(
      <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>

                <Screen 
                  name="EstruturaMap" 
                  component={EstruturaMap}
                />

                <Screen 
                  name="EstruturaDetails" 
                  component={EstruturaDetails}
                />
                
              
        </Navigator>   
      </NavigationContainer>
    );
}