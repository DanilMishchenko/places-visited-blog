import AddPublication from './app/screens/AddPublicationScreen';
import { useFonts } from 'expo-font';
import ImagePickerExample from '@/components/ImagePickerExample';

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require('./app/assets/fonts/Roboto-Bold.ttf'),
    medium: require('./app/assets/fonts/Roboto-Medium.ttf'),
    regular: require('./app/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ImagePickerExample />;
}
