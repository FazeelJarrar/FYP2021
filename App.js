/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Icon from 'react-native-vector-icons/AntDesign';
 import HomeScreen from './src/screens/HomeScreen/index';
 import DestinationSearch from './src/screens/DestinationSearch/index';
 import SearchResults from './src/screens/SearchResults/index';
// import SearchResults from './src/screens/SearchResults'; 
 import type {Node} from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 
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
         {title}
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
 
   return (
     <>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       {/*  <HomeScreen />   */}
       {/* <DestinationSearch /> */}
       <SearchResults />
     </>
 
   );
 };
 
 
 
 export default App;
 