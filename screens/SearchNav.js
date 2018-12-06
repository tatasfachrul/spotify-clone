import React, {Component} from 'react';
import {Icon, View, Text} from 'native-base';

export default class SearchNav extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name="md-search" />,
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Search</Text>
        <Text>Numpang nambah search gan!</Text>
        <Text>Test branch</Text>
      </View>
    );
  }
}
