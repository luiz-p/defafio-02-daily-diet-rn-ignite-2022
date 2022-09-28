import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'

export default function App () {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded
        ? <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
        : <ActivityIndicator />}
    </ThemeProvider>

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
