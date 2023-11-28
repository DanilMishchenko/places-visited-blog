import { useFonts } from 'expo-font';
import { View } from 'react-native';
import AuthScreen from '@/screens/AuthScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require('./app/assets/fonts/Roboto-Bold.ttf'),
    medium: require('./app/assets/fonts/Roboto-Medium.ttf'),
    regular: require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <AuthScreen />
    </View>
  );
}
