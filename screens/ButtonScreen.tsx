import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttton from '../components/Button';

const ButtonScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Buttton persentage={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5945C9',
  },
});
export default ButtonScreen;
