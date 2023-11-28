import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants/colors';

type Prop = {
  showText: boolean;
  onPress: () => void;
};

const SecureTextButton = ({ showText, onPress }: Prop) => {
  return (
    <TouchableOpacity
      style={{ position: 'absolute', right: 16 }}
      onPress={onPress}
    >
      {showText ? (
        <Text
          style={{
            fontSize: 16,
            color: COLORS.tertiary,
            fontFamily: 'regular',
          }}
        >
          Показати
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: COLORS.tertiary,
            fontFamily: 'regular',
          }}
        >
          Приховати
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default SecureTextButton;
