import React, {useEffect} from 'react';
import {Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const styles = {
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
};

export function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  useEffect(() => {
    setInterval(() => {
      offset.value = withSpring(Math.random());
    }, 500);
  }, []);

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => (offset.value = withSpring(Math.random()))}
        title="Move"
      />
    </>
  );
}
