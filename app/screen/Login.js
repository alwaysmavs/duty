import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'dva';

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
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

export default Login;
