import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../components/Input';

const InputScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5945C9',
  },
});

export default InputScreen;
