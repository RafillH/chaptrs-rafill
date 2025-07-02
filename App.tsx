import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import './global.css';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import Body from './components/ui/body';

export default function App() {
  return (
    <SafeAreaView className='flex-1 h-screen bg-white'>
      <StatusBar style="auto" backgroundColor='#ffffff' />
      <Header />
      <Body />
      <Footer />
    </SafeAreaView>
  );
}
