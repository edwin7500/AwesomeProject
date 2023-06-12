import React, { useState } from 'react';
import { ImageBackground, View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { getDatabase, ref, push, set } from 'firebase/database';
import { storage } from '../firebase';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';

console.log(storage);

function QRScreen() {
  const navigation = useNavigation();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const database = getDatabase();

  const handleGenerate = async () => {
    // Combine the three inputs into a single string
    const data = `${input1}-${input2}-${input3}`;
    setQRCodeData(data);
    navigation.navigate('SaveScreen', { qrCodeData: data });

      // Generate the QR code SVG data
  const svgCode = QRCode.generateSVG(data, {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    width: 200,
    height: 200,
  });

    // Upload the QR code image to Firebase Storage
    const qrCodeRef = storageRef(storage, 'qrcodes/' + data + '.svg');
    const metaData = { contentType: 'image/svg+xml' };
    await uploadBytes(qrCodeRef, svgCode, metaData);

      
  // const svgCodeBuffer = Buffer.from(svgCode.split(',')[1], 'base64');
  // await uploadBytes(qrCodeRef, svgCodeBuffer, metaData);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(qrCodeRef);

      // Save the QR code data and download URL to the database
  const newQRCodeRef = push(ref(database, 'qrcodes'));
  const qrCodeEntry = {
    data: data,
    downloadURL: downloadURL,
  };
  await set(newQRCodeRef, qrCodeEntry);


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

        {qrCodeData ? <QRCode value={qrCodeData} size={200} /> : null}
      </View>
    </ImageBackground>
  );
}

export default QRScreen;
