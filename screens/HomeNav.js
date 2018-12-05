import React, { Component } from 'react'
import { Icon, View, Text } from 'native-base';



export default class HomeNav extends Component {

	static navigationOptions = {
		tabBarIcon: ({ tintColor}) => (
			<Icon name='md-home'/>
		)
	}	

  render() {
    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
			
    );
  }
}