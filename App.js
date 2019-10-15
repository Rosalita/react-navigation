import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <AppNavigation />
  );
}

class ScreenOne extends React.Component {
  render() {
    return (
      <View style={styles.screenOne}>
        <Button
          title="Go To Screen Two"
          onPress={() => this.props.navigation.navigate("RouteTwo")}
        />
      </View>
    )
  }
}

class ScreenTwo extends React.Component {
  render() {
    return (
      <View style={styles.screenTwo}>
        <Button
          title="Go To Screen One"
          onPress={() => this.props.navigation.navigate("RouteOne")}
        />
      </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  "RouteOne": ScreenOne,
  "RouteTwo": ScreenTwo
})

const AppNavigation = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "teal"
  },
  screenTwo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "pink"
  }
});