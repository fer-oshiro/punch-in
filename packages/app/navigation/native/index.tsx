import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CalendarScreen } from '../../features/calendar/screen'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>()

const Tab = createBottomTabNavigator();

export function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
    
  );
}

export function NativeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="PunchIn" component={HomeScreen} />
      <Tab.Screen name="Stats" component={UserDetailScreen} />
      <Tab.Screen name="Setting" component={UserDetailScreen} />
    </Tab.Navigator>
  )
}
