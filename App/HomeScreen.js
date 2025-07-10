import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const Button = ({buttonText, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonTextStyle}>{buttonText}</Text>
  </TouchableOpacity>
);

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>SmartFrame NZH Demo</Text>
        <Button
          buttonText={'NZH Website in webview showing SmartFrame'}
          onPress={() =>
            navigation.navigate('WebView', {
              url: 'https://www.nzherald.co.nz/sport/rugby/all-blacks/all-blacks-v-france-scott-barrett-ruled-out-for-remainder-of-series-with-calf-injury/VGEAH7VP7RFSTKBVFCGERYCH4U/',
            })
          }
        />

        <Button
          buttonText={'SmartFrame embed within the app'}
          onPress={() =>
            navigation.navigate('WebView', {
              url: 'embed',
            })
          }
        />

        <Button
          buttonText={'Embed that works within the app (X embed)'}
          onPress={() =>
            navigation.navigate('WebView', {
              url: 'x',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
