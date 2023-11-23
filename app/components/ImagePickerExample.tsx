import React, { useState, useEffect } from 'react';
import { Pressable, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerExample = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [files, setFiles] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={pickImage}>
        <View>
          <Text>Pick an image from camera roll</Text>
        </View>
      </Pressable>

      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

export default ImagePickerExample;
