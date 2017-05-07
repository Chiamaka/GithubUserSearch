import React from 'react';
import { Image, View, Text } from 'react-native';

const image = require('../img/logo2.png');

const Title = () => {
  const { containerStyle, imageStyle, titleStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>GithubUserSearch App</Text>
      <Image 
        source={image}
        style={imageStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: '600'
  },
  imageStyle: { 
    height: 200, 
    width: 200
  }
};

export default Title;


