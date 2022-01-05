/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

 import React, { useEffect } from 'react';
 import Icon from 'react-native-vector-icons/AntDesign';
 import Geolocation from '@react-native-community/geolocation'; 
 navigator.geolocation = require('@react-native-community/geolocation');
 import { NavigationContainer } from '@react-navigation/native';
 
 import Router from './src/navigation/root';
 import HomeScreen from './src/screens/HomeScreen/index'
 import SearchResults from './src/screens/SearchResults'; 

 import type {Node} from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet, 
   Text,
   useColorScheme,
   View,
   PermissionsAndroid,
   Platform,
  
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import { create } from 'react-test-renderer';

 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}r
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   const AndroidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        { 
          title: "Car Pool App needs Location Permission (Recommended)",
          message:
            "Car Pool App needs access to your location " +
            "so you can share awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
   }

   useEffect( () => {
    if (Platform.OS === 'android') { 
      AndroidPermissions(); 
    }
    else {
      //FOR IOS ONLY
      Geolocation.requestAuthorization();
    }

   },  [] )
 
   return (
     <>
     
     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <HomeScreen />   */}
       {/* <Router />  */}
       {/* <DestinationSearch />   */}
       <SearchResults />  
      
     </>
 
   );
 };
 
 
 
 export default App;
 