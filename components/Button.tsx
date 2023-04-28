/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import bg from '../assets/gradient_img.png';
import arrow from '../assets/arrow.png';

type Props = {
  persentage: number;
};

const Buttton = (props: Props) => {
  return (
    <View style={styles.sectionContainer}>
      <Pressable style={styles.button}>
        <View style={[styles.progress, {width: `${props.persentage}%`}]}>
          <ImageBackground
            source={bg}
            resizeMode="cover"
            style={[styles.bg]}
            imageStyle={
              props.persentage === 100
                ? {borderRadius: 24}
                : {borderBottomLeftRadius: 24, borderTopLeftRadius: 24}
            }
          />
        </View>
        <View style={styles.inner}>
          <View>
            <Text style={styles.mainText}>Free user</Text>
            <Text style={styles.descrText}>
              Unlocked only {props.persentage}% of content
            </Text>
          </View>
          <View style={styles.arrow}>
            <Image source={arrow} style={styles.arrow} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Buttton;

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
  },
  button: {
    position: 'relative',
    borderWidth: 8,
    borderColor: '#7762e6',
    borderRadius: 32,
    backgroundColor: '#432AA9',
  },
  bg: {
    height: '100%',
    width: '100%',
    zIndex: 9,
  },
  progress: {
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
  },
  inner: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    zIndex: 15,
  },
  mainText: {
    marginBottom: 4,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.75,
    color: '#FFFFFF',
  },
  descrText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    opacity: 0.64,
    color: '#FFFFFF',
  },
  arrow: {
    width: 10,
    height: 16,
    zIndex: 20,
  },
});
