import {Text} from 'react-native';
import AutoScrollView from 'react-native-auto-scroll-view';

const TestComponent = () => {
  // in this case, scrolling will be enabled
  // if decrease size of the array from 20 to 5 for example, scrolling will be disabled
  const testArray = new Array(20).fill('lorem ipsum');
  const styles = {
    contentContainerStyle: {
      flexGrow: 1,
    },
    text: {
      backgroundColor: 'pink',
      padding: 20,
      marginVertical: 5,
    },
  };

  return (
    <AutoScrollView contentContainerStyle={styles.contentContainerStyle}>
      {testArray.map((element, index) => (
        <Text key={index} style={styles.text}>
          {element}
        </Text>
      ))}
    </AutoScrollView>
  );
};
export default TestComponent;
