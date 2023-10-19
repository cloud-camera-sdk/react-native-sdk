import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  CloudCamera,
  pubsub,
  Connection,
  type Action,
} from 'react-native-cloud-camera';

export default function App() {
  React.useEffect(() => {
    const fnc = (action: Action) => {
      if (action.type === Connection) {
        console.log(15, action.payload.value);
      }
    };

    pubsub.subscribe(Connection, fnc);

    return () => {
      pubsub.unsubscribe(Connection, fnc);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => CloudCamera.initSDK('init sdk')}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
