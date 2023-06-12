import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Scrol, {Comp} from './src/scrollingImg';
import App1 from './src/scrollingImg';
import ScrollingImg from './src/scrollingImg';
import TestComponent from './src/scrollingImg';
import ImageCar from './src/ImageCar';
import AutoScrollImg from './src/ImageCar';
import Scrolling from './src/scrolling';
import DemoLogin from './src/DemoLogin';
import NewDemo from './src/NewDemo';

type Props = {};

const App = (props: Props) => {
  return (
    <View>
      {/* <DemoLogin /> */}
      <NewDemo />
      {/* <Scrolling /> */}
      {/* <AutoScrollImg /> */}
      {/* <AutomaticScrollView /> */}
      {/* <Scrol /> */}
      {/* <App1 /> */}
      {/* <Comp /> */}
      {/* <ScrollingImg /> */}
      {/* <TestComponent /> */}
      {/* <Scrolling /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
