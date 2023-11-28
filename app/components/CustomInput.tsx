import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { AuthFormData } from '@/types/auth.interface';

import { Control, Controller, FieldPath } from 'react-hook-form';
import { COLORS } from '@/constants';

type PlaceholderInput = {
  placeholder: string;
};

type UseControllerProps<
  TFieldValues extends AuthFormData = AuthFormData,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<AuthFormData>;
};

type Test = UseControllerProps & PlaceholderInput;

const CustomInput = ({ name, control, placeholder }: Test) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={{
              height: 48,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: COLORS.graydark,
              borderRadius: 12,
              backgroundColor: COLORS.gray,
              padding: 16,
            }}
          />
          {error && (
            <Text style={{ color: 'red', marginBottom: 12 }}>
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
