import React from 'react';

import { StyleSheet, Text, View,Dimensions, TouchableOpacity,Platform,StatusBar } from 'react-native';
import MapView,{Marker,Callout,PROVIDER_GOOGLE} from 'react-native-maps';
import { Feather} from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';
export default function EstruturaMap(){

    const navegation = useNavigation();

    function handleNavigationEstruturaDetails(){
      navegation.navigate('EstruturaDetails');
    }


    return(
        <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
            latitude:-21.4224861,
            longitude:-45.9581008,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
        }} 
        >
           
           <Marker
              icon={mapMarker}
              calloutAnchor={{
                x:3.0,
                y:1.0,
              }}
              coordinate ={{
               latitude:-21.4224861,
               longitude:-45.9581008,
              }}
           >
              <Callout tooltip onPress={handleNavigationEstruturaDetails}>
                <View style={styles.calloutContainer}>
                   <Text style={styles.calloutText}>Obras 1 de cada</Text>
                  
                </View>
              </Callout>
           </Marker>
      
        </MapView>
   
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 Obras encontradas</Text>
          <TouchableOpacity style={styles.createEstruturaButton} onPress={()=>{}}>
        <Feather name="plus" size={20} color="#fff"/>
          </TouchableOpacity>
        </View>
   
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      
    },
    map:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height, 
    },
    calloutContainer:{
      width:160,
      height:46,
      paddingHorizontal:16,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:16,
      justifyContent:'center',
    
    },
    calloutText:{
      fontFamily:'Nunito_700Bold',
        color:'#0089a5',
        fontSize:14,
    },
  
    footer:{
      position:'absolute',
      left:24,
      right:24,
      bottom:32,
  
      backgroundColor:'#fff',
      borderRadius:20,
      height:56,
      paddingLeft:24,
  
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
  
      elevation:3,
    },
    footerText:{
      fontFamily:'Nunito_700Bold',
      color:'#8fa7b3',
    },
    createEstruturaButton:{
      width:56,
      height:56,
      backgroundColor:'#15c3d6',
      borderRadius:20,
  
      justifyContent:'center',
      alignItems:'center',
  
    },
  });
  