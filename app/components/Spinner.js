import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  const { spinnerContainer, activityStyle } = styles;
  return (
    <View style={spinnerContainer}>
      <ActivityIndicator 
        size={props.size || 'large'}
        color="#aa00aa"
        style={activityStyle}
      />
    </View>
  );
};

const styles = {
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  activityStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 100,
    marginTop: 100
  }
};

export default Spinner;
