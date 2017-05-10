
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Title from './components/Title';
import InputBox from './components/InputBox';

class GithubUserSearch extends Component {
  render() {
    return (
      <View>
        <Title />
        <InputBox />
      </View>
    );
  }
}


export default GithubUserSearch;