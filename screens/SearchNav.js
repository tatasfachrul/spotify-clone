import React, {Component} from 'react';
import {Icon, Text, Container, Header, Item, Input, Content, Card, CardItem, CardSwiper} from 'native-base';

export default class SearchNav extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name="md-search" />,
  };

  render() {
    return (
      <Container>
        <Header searchBar>
          
          <Item>
            <Icon name="md-search" />
            <Input placholder="Search your favorite song!" />
          </Item>
        </Header>
        <Content style={styles.sectionTitle}>
          <Text>
            here is the content
          </Text>
          <Card>
            <CardItem>
              <CardSwiper>
                
              </CardSwiper>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    paddingTop: 20
  }
})