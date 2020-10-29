import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator,Screen} = createStackNavigator();

import EstruturaMap from './pages/EstruturaMap';
import EstruturaDetails from './pages/EstruturaDetails';
import SelectMapPosistion from './pages/CreateEstrutura/SelectMapPosition';
import EstruturaData from './pages/CreateEstrutura/EstruturaData';

import Header from './components/Header';

export default function Routes(){
    return(
      <NavigationContainer>
        <Navigator screenOptions={{headerShown:false,  cardStyle:{ backgroundColor:'#f2f3f5' } }}>

                <Screen 
                  name="EstruturaMap" 
                  component={EstruturaMap}
                />

                <Screen 
                  name="EstruturaDetails" 
                  component={EstruturaDetails}
                  options={{
                    headerShown:true,
                    header:() => <Header showCancel={false} title="Estrutura" />
                  }}
                />

                <Screen 
                  name="SelectMapPosistion"
                  component={SelectMapPosistion}
                  options={{
                    headerShown:true,
                    header:() => <Header title="Selecione no Mapa" />
                  }}
                />

                <Screen 
                  name="EstruturaData"
                  component={EstruturaData}
                  options={{
                    headerShown:true,
                    header:() => <Header title="Informe no Mapa" />
                  }}
                />
                
              
        </Navigator>   
      </NavigationContainer>
    );
}