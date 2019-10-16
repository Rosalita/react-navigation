import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default function App() {
  return (
    <AppNavigation />
  );
}


class ScreenX extends React.Component {
  render() {
    return (
      <View style={styles.screenX}>
        <Text>This is Tab X</Text>
      </View>
    )
  }
}

class ScreenA extends React.Component {
  render() {
    return (
      <View style={styles.screenA}>
        <Text>This is Tab Y</Text>
        <Text>This is Screen A</Text>
        <Button
          title="Screen B"
          onPress={() => this.props.navigation.navigate("RouteB")}
        />
      </View>
    )
  }
}

class ScreenB extends React.Component {
  render() {
    return (
      <View style={styles.screenB}>
        <Text>This is Screen B</Text>
        <Button
          title="Screen A"
          onPress={() => this.props.navigation.navigate("RouteA")}
        />
        <Button
          title="Screen One"
          onPress={() => this.props.navigation.navigate("RouteOne")}
        />
      </View>
    )
  }
}

class ScreenOne extends React.Component {
  render() {
    return (
      <View style={styles.screenOne}>
        <Text>This is Screen One</Text>
        <Button
          title="Screen Two"
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
        <Text>This is Screen Two</Text>
        <Button
          title="Screen Three"
          onPress={() => this.props.navigation.navigate("RouteThree")}
        />
      </View>
    )
  }
}

class ScreenThree extends React.Component {
  render() {
    return (
      <View style={styles.screenThree}>
        <Text>This is Screen Three</Text>
        <Button
          title="Screen One"
          onPress={() => this.props.navigation.navigate("RouteOne")}
        />
      </View>
    )
  }
}
const StackNavigator = createStackNavigator({
  "RouteB": ScreenB,
  "RouteOne": ScreenOne,
  "RouteTwo": ScreenTwo,
  "RouteThree": ScreenThree
}, {
  headerMode: "none",
})

const SwitchNavigator = createSwitchNavigator({
  "RouteA": ScreenA,
  "RouteB": StackNavigator
})

const TabNavigator = createBottomTabNavigator({
  "TabX": ScreenX,
  "TabY": SwitchNavigator,
})

const AppNavigation = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  screenA: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "black"
  },
  screenB: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "red"
  },
  screenX: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "blue"
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
  },
  screenThree: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 25,
    borderColor: "purple"
  }
});