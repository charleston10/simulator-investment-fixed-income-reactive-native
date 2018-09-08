import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import CalculateScreen from './screens/CalculateScreen'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <CalculateScreen  /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
});

export default App