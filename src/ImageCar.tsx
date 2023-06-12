import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AutoScroll from '@homielab/react-native-auto-scroll';

type Props = {
  uri: any;
};

const AutoScrollImg = (props: Props) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

      uri: require('./assets/Rectangle1.png'),
    },
  ];
  const [data, setdata] = useState([...DATA]);
  // useEffect(() => {
  //   fetchMore();
  // }, []);

  // const fetchMore = () => {
  //   setdata((prevState: string | any[]) => [
  //     ...prevState,
  //     ...Array.from({length: 20000}).map((_, i) => i + 1 + prevState.length),
  //   ]);
  // };

  const Item = ({uri}: Props) => (
    <AutoScroll isLTR={false}>
      <View style={{marginHorizontal: -40}}>
        {/* <Image source={uri} /> */}

        <Image source={require('./assets/Left.png')} />
        {/* <Image source={require('./assets/Carousel.png')} /> */}
        {/* <Image source={require('./assets/Carousel3.png')} /> */}
        {/* <Image source={require('./assets/Carousel1.png')} /> */}
        {/* <Image source={require('./assets/Rectangle2.png')} />
        <Image source={require('./assets/Rectangle3.png')} /> */}
      </View>
    </AutoScroll>
  );

  const Item1 = ({uri}: Props) => (
    <AutoScroll isLTR={true}>
      <View style={{marginHorizontal: -40}}>
        {/* <Image source={uri} /> */}

        <Image source={require('./assets/Right.png')} />
        {/* <Image source={require('./assets/Rectangle2.png')} />
        <Image source={require('./assets/Rectangle3.png')} /> */}
      </View>
    </AutoScroll>
  );

  return (
    <View>
      {/* <Text>hhhhhh</Text> */}

      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => <Item uri={item.uri} />}
        keyExtractor={item => item.id}
        // onEndReached={() => fetchMore()}
        style={{width: '100%', padding: 20, marginTop: 40}}
      />
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => <Item1 uri={item.uri} />}
        keyExtractor={item => item.id}
        // onEndReached={() => fetchMore()}
        style={{width: '100%', padding: 20, marginTop: 40}}
      />
    </View>
  );
};

export default AutoScrollImg;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    //flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
  },
  scrolling1: {
    width: 400,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
  },
  scrolling2: {
    backgroundColor: 'blue',
    width: 400,
    padding: 10,
    marginBottom: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
