import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ScanScreen from './src/features/scan/ScanScreen';

export default function App() {
  const [route, setRoute] = useState<'home'|'scan'>('home');

  if (route === 'scan') return <ScanScreen />;

  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', gap:12 }}>
      <Text style={{ fontSize:18 }}>Flexa Wallet Prototype (MOCK)</Text>
      <Pressable onPress={() => setRoute('scan')} style={{ padding:12, borderWidth:1, borderRadius:8 }}>
        <Text>Scan (MOCK)</Text>
      </Pressable>
    </View>
  );
}
