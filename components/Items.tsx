import React from 'react';
import {Pressable, View, StyleSheet, Text, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {setItem} from '../redux/SelectedSlice';

const Items = () => {
  const dispatch = useAppDispatch();

  interface IButton {
    id: string;
    title: string;
    price: number;
    trial: number;
  }

  const buttons: IButton[] = [
    {id: '0', title: 'Monthly', price: 99, trial: 3},
    {id: '1', title: '3 month', price: 199, trial: 7},
    {id: '2', title: '1 year', price: 399, trial: 7},
  ];

  const selectedItem = useAppSelector(state => state.selected.selectedItem);

  const onSelectItem = (id: string) => {
    dispatch(setItem(id));
  };

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={buttons}
        renderItem={({item}) => (
          <Pressable
            key={item.id}
            onPress={() => onSelectItem(item.id)}
            style={
              selectedItem === item.id
                ? [styles.buttonDefault, styles.buttonActive]
                : styles.buttonDefault
            }>
            <View style={[styles.viewInner]}>
              <Text
                style={
                  selectedItem === item.id
                    ? [styles.textDefault, styles.textTitle, styles.textActive]
                    : [styles.textDefault, styles.textTitle]
                }>
                {item.title}
              </Text>
              <Text
                style={
                  selectedItem === item.id
                    ? [styles.textDefault, styles.textPrice, styles.textActive]
                    : [styles.textDefault, styles.textPrice]
                }>
                {item.title === 'Monthly'
                  ? `$${item.price} / month`
                  : `$${item.price}`}
              </Text>
            </View>
            <View style={styles.viewInner}>
              <Text style={[styles.textDefault, styles.textTrial]}>
                {item.trial} days free trial
              </Text>
              <Text
                style={
                  selectedItem === item.id
                    ? [styles.textDefault, styles.textActive]
                    : [styles.textDefault]
                }>
                Billing starts after trial
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item: IButton) => item.id}
      />
      <Text style={[styles.textDefault, styles.textDescription]}>
        You can cancel your subscription anytime
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
  },
  buttonDefault: {
    marginBottom: 8,
    width: '100%',
    backgroundColor: '#7C68D3',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16.75,
    paddingRight: 17.7,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#7C68D3',
  },
  buttonActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#72DDFF',
    borderStyle: 'solid',
    color: '#000000',
  },
  viewInner: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDefault: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
  textActive: {
    color: '#000000',
  },
  textTitle: {
    marginBottom: 4,
    fontWeight: '600',
  },
  textTrial: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 8,
    backgroundColor: '#432AA9',
    borderRadius: 6,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  textPrice: {
    marginBottom: 2,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  textDescription: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
});

export default Items;
