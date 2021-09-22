import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View, StatusBar, Platform, TouchableOpacity, TouchableNativeFeedback, SafeAreaView, Image, Alert, Button} from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="pink"
      title="Click Here" onPress={() => Alert.alert("Recipe", "My food", [
        { text: "Yes"},
        { text: "No"}
      ])}></Button>
      <Text numberOfLines={1} onPress={handlePress}>Open up App.js to start creating! Very interesting concepts.</Text>
      {/* <TouchableOpacity onPress={() => console.log("Pressed!")}>
      <Image source={{
        width: 200,
        height: 300,
        uri : "https://picsum.photos/200/300"}}/>
      </TouchableOpacity> */}
      <TouchableNativeFeedback onPress={() => console.log("What does this do?")}>
        <View style={{ width: 200, height: 70, backgroundColor: "pink"}}></View>
      </TouchableNativeFeedback>
      
    </SafeAreaView>
  );
}

// This method validates the styling properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
