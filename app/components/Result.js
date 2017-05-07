import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, Linking, View } from 'react-native';

class Result extends Component {
  openLink = () => {
    const username = this.props.user;
    username ? Linking.openURL(`https://github.com/${username}`) : <View />;
  }

  render() {
    const { containerStyle, textStyle, imageStyle } = styles;
    return (
      <TouchableOpacity style={containerStyle} onPress={this.openLink}>
        <Text style={textStyle}>{this.props.username}</Text>
        <Image 
          source={{ uri: this.props.image }} 
          style={imageStyle}
        />
      </TouchableOpacity>
    );
  }
}
  

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e2e2e2',
    borderTopWidth: 1
  },
  textStyle: {
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 10
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    marginBottom: 10
  }
};

export default Result;
