import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScrollingBackground from 'react-native-scrolling-images';

type Props = {};
const data = [require('./imges/Image1.png')];

const Scrolling = (props: Props) => {
  return (
    <View style={{borderWidth: 1}}>
      <Text>scrolling</Text>
      <ScrollingBackground
        style={styles.scrollingBackground}
        speed={20}
        direction={'left'}
        images={data}
        useNativeDriver={true}
      />
    </View>
  );
};

export default Scrolling;

const styles = StyleSheet.create({
  scrollingBackground: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
});
