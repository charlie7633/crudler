// src/components/layout/Screen.js
import { StyleSheet, View, StatusBar } from 'react-native';

const Screen = ({ children }) => {
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Screen;