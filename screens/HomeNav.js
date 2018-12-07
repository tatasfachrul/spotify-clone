import React, {Component} from 'react';
import {
  Icon,
  View,
  Text,
  Thumbnail,
  Container,
  Content,
  Card,
  CardItem,
} from 'native-base';
import {ScrollView, SectionList, StyleSheet} from 'react-native';

export default class HomeNav extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name="md-home" />,
  };

  render() {
    return (
      <Container styxle={styles.Container}>
        <Content>
          {/* Section 1 */}
          <View style={styles.playlistTitle}>
            <Text>Made for You!</Text>
            <Text note>Get better recommendations the more you listen.</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card transparent>
              <ScrollView horizontal="true" showsHorizontalScrollIndicator={false}>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
              </ScrollView>
            </Card>
          </View>

          {/* Section 2 */}
          <View style={styles.playlistTitle}>
            <Text>Your heavy rotation</Text>
            <Text note>The music you've had on repeat this month</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card transparent>
              <ScrollView horizontal="true" showsHorizontalScrollIndicator={false}>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
                <CardItem>
                  <Thumbnail large source={require(`../assets/img/moon.jpg`)} />
                </CardItem>
                <CardItem>
                  <Thumbnail
                    square
                    large
                    source={require(`../assets/img/sempiternal.jpg`)}
                  />
                </CardItem>
              </ScrollView>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  sv: {
    paddingTop: 20,
  },
  playlistTitle: {
    justifyContent: `center`,
    alignItems: `center`,
    paddingTop: 40,
  },
});
