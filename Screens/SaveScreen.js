import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useRoute } from '@react-navigation/native';

function SaveScreen() {
  const route = useRoute();
  const { qrCodeData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {qrCodeData && <QRCode value={qrCodeData} size={200} />}
    </View>
  );
}

export default SaveScreen;
