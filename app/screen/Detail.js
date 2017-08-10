import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'dva';

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>123</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
