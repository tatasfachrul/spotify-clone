import React, { Component } from 'react'
import { Icon, View, Text } from 'native-base';

export default class LibraryNav extends Component {
	
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='md-bookmarks'/>
		)
	}

	render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Library</Text>
      </View>
    );
  }
}