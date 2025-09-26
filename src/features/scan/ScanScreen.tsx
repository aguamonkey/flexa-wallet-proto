import { useEffect, useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (!permission || permission.status !== 'granted') {
      requestPermission();
    }
  }, [permission?.status]);

  if (!permission) return <Text>Requesting camera permission…</Text>;
  if (!permission.granted) return <Text>Camera permission denied</Text>;

  // Simulator note
  if (Platform.OS === 'ios' && !navigator?.mediaDevices) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text>Camera not available in iOS Simulator.</Text>
        <Text style={{ marginTop: 8 }}>Open in Expo Go on a real device to scan.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {!data ? (
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
          onBarcodeScanned={({ data }) => setData(data)}
        />
      ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>MOCK Scan Result</Text>
          <Text style={{ textAlign: 'center' }}>{data}</Text>
          <Pressable onPress={() => setData(null)} style={{ marginTop: 16, padding: 10, borderWidth: 1, borderRadius: 8 }}>
            <Text>Scan again</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
