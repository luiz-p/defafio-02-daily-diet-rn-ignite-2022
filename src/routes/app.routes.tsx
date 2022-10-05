import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Edit } from '@screens/Edit'
import { Home } from '@screens/Home'
import { Meal } from '@screens/Meal'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit" component={Edit} />
    </Navigator>
  )
}
