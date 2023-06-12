import React, { useState, useRef } from 'react';
import { ImageBackground, View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import ViewShot from 'react-native-view-shot';
import { storage } from '../firebase';

function QRScreen() {
  const navigation = useNavigation();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const viewShotRef = useRef(null);

  const handleGenerate = async () => {
    const data = `${input1}-${input2}-${input3}`;
    setQRCodeData(data);
    navigation.navigate('SaveScreen', { qrCodeData: data });
  };

  const handleSaveImage = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        const response = await fetch(uri);
        const blob = await response.blob();
        const imageRef = ref(storage, 'qrCodes/qrCodeImage.jpg');
        await uploadBytes(imageRef, blob);
        const downloadURL = await getDownloadURL(imageRef);
        console.log('Image uploaded to Firebase Storage:', downloadURL);
      } catch (error) {
        console.error('Error uploading QR code image:', error);
      }
    }
  };

  return (
    <ImageBackground
      blurRadius={10}
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/370/805/small/geometric-shape-background-free-vector.jpg' }}
      style={{ height: '100%', width: '100%' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: '900' }}>Fullname</Text>
        <TextInput
          value={input1}
          onChangeText={setInput1}
          placeholder="Enter input 1"
          style={{
            borderWidth: 1,
            borderColor: '#777',
            padding: 8,
            margin: 10,
            width: 200,
            borderRadius: 10,
          }}
        />

        <Text style={{ fontWeight: '900' }}>Email</Text>
        <TextInput
          value={input2}
          onChangeText={setInput2}
          placeholder="Enter input 2"
          style={{
            borderWidth: 1,
            borderColor: '#777',
            padding: 8,
            margin: 10,
            width: 200,
            borderRadius: 10,
          }}
        />

        <Text style={{ fontWeight: '900' }}>Phone No.</Text>
        <TextInput
          value={input3}
          onChangeText={setInput3}
          placeholder="Enter input 3"
          style={{
            borderWidth: 1,
            borderColor: '#777',
            padding: 8,
            margin: 10,
            width: 200,
            borderRadius: 10,
          }}
        />

        <Button title="Generate QR Code" onPress={handleGenerate} />

        {qrCodeData ? (
          <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 1 }}>
            <QRCode value={qrCodeData} size={200} />
          </ViewShot>
        ) : null}

        <Button title="Save QR Code Image" onPress={handleSaveImage} />
      </View>
    </ImageBackground>
  );
}

export default QRScreen;
