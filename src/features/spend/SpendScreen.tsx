import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function SpendScreen() {
  const [ok, setOk] = useState<boolean | null>(null);

  // In MOCK, pretend this is a Flexa payment request payload
  const mockPayload = JSON.stringify({
    type: 'flexa-spend',
    amount: 5.75,
    currency: 'USD',
    ts: Date.now()
  });

  if (ok !== null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <Text style={{ fontSize: 18 }}>
          {ok ? 'Payment approved ✅' : 'Payment failed ❌'}
        </Text>
        <Pressable
          onPress={() => setOk(null)}
          style={{ padding: 10, borderWidth: 1, borderRadius: 8 }}
        >
          <Text>Try again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text style={{ fontSize: 16 }}>Present this code (MOCK)</Text>
      <QRCode value={mockPayload} size={200} />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Pressable
          onPress={() => setOk(true)}
          style={{ padding: 10, borderWidth: 1, borderRadius: 8 }}
        >
          <Text>Mock Approve</Text>
        </Pressable>
        <Pressable
          onPress={() => setOk(false)}
          style={{ padding: 10, borderWidth: 1, borderRadius: 8 }}
        >
          <Text>Mock Fail</Text>
        </Pressable>
      </View>
    </View>
  );
}
