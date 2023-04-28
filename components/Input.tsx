import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={
          isFocus
            ? [styles.inputDefault, styles.inputFocused]
            : styles.inputDefault
        }
        editable
        multiline
        placeholder="Write your dare..."
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        cursorColor={'#FFFFFF'}
        numberOfLines={1}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputDefault: {
    padding: 16,
    height: 120,
    backgroundColor: '#785CEB',
    borderRadius: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: '#FFFFFF',
    textAlignVertical: 'top',
  },
  inputFocused: {
    backgroundColor: '#9379FF',
  },
});
