import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ScanScreen from './src/features/scan/ScanScreen';
import SpendScreen from './src/features/spend/SpendScreen';

type Route = 'home' | 'scan' | 'spend';

export default function App() {
  const [route, setRoute] = useState<Route>('home');

  const Back = () => (
    <Pressable
      onPress={() => setRoute('home')}
      style={{ position: 'absolute', top: 60, left: 20, padding: 10, borderWidth: 1, borderRadius: 8 }}
    >
      <Text>← Back</Text>
    </Pressable>
  );

  if (route === 'scan') {
    return (
      <View style={{ flex: 1 }}>
        <Back />
        <ScanScreen />
      </View>
    );
  }

  if (route === 'spend') {
    return (
      <View style={{ flex: 1 }}>
        <Back />
        <SpendScreen />
      </View>
    );
  }

  // Home
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, paddingBottom: 60 }}>
      <Text style={{ fontSize: 18 }}>Flexa Wallet Prototype (MOCK)</Text>
      <Pressable onPress={() => setRoute('scan')} style={{ padding: 12, borderWidth: 1, borderRadius: 8, minWidth: 180, alignItems: 'center' }}>
        <Text>Scan (MOCK)</Text>
      </Pressable>
      <Pressable onPress={() => setRoute('spend')} style={{ padding: 12, borderWidth: 1, borderRadius: 8, minWidth: 180, alignItems: 'center' }}>
        <Text>Spend (MOCK)</Text>
      </Pressable>
    </View>
  );
}
