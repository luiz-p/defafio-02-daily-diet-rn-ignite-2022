import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'

export default function App () {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <>
      {fontsLoaded
        ? <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
        : <ActivityIndicator />}
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
