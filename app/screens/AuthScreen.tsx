import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AuthFormData } from '@/types/auth.interface';

import CustomInput from '@/components/CustomInput';

import { COLORS } from '@/constants';
import ImagePickerExample from '@/components/ImagePickerExample';

const schema = yup.object().shape({
  login: yup
    .string()
    .min(3, 'Мінімальна довжина логіна 3 символи')
    .max(30, 'Максимальна довжина логіна 30 символів')
    .required('Необхідно вказати логін'),
  email: yup
    .string()
    .required('Необхідно вказати адресу електронної пошти')
    .email('Недійсна електронна адреса'),
  password: yup
    .string()
    .required('Необхідно ввести пароль')
    .min(8, 'Пароль має містити не менше 8 символів'),
});

const AuthScreen = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [files, setFiles] = useState([]);

  const { control, handleSubmit } = useForm<AuthFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<AuthFormData> = data => {
    console.log(data, 'data');
  };

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require('@/assets/img/photo_BG.png')}
          resizeMode="cover"
          style={styles.bgImg}
        >
          <View style={styles.wrapper}>
            <ImagePickerExample
              onPress={pickImage}
              selectedImage={selectedImage}
            />
            <Text style={styles.title}>Реєстрація</Text>
            <View style={{ width: '100%' }}>
              <CustomInput name="login" control={control} placeholder="Логін" />
              <CustomInput
                name="email"
                control={control}
                placeholder="Адреса електронної пошти"
              />
              <CustomInput
                name="password"
                control={control}
                placeholder="Пароль"
              />
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <View style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Зареєструватися</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.link}>
                <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingBottom: 45,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    marginVertical: 32,
    color: COLORS.primary,
    fontFamily: 'medium',
    fontSize: 28,
    letterSpacing: 0.3,
  },
  btnSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    height: 48,
    borderRadius: 24,
    marginTop: 28,
  },
  submitText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'regular',
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  linkText: {
    fontSize: 16,
    color: COLORS.tertiary,
    fontFamily: 'regular',
  },
});

export default AuthScreen;
