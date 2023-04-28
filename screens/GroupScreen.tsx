import React from 'react';
import {View, StyleSheet} from 'react-native';
import Items from '../components/Items';

const GroupScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Items />
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

export default GroupScreen;
