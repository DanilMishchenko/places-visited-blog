import { View, Text, TextInput } from 'react-native';

import { AuthFormData } from '@/types/auth.interface';

import { Control, Controller, FieldPath } from 'react-hook-form';
import { COLORS } from '@/constants';

type OtherProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  children?: React.ReactElement;
};

type UseControllerProps<
  TFieldValues extends AuthFormData = AuthFormData,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<AuthFormData>;
};

type Test = UseControllerProps & OtherProps;

const CustomInput = ({
  children,
  name,
  control,
  placeholder,
  secureTextEntry,
}: Test) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View
          style={{
            marginBottom: 12,
          }}
        >
          <View
            style={{
              position: 'relative',
              justifyContent: 'center',
            }}
          >
            <TextInput
              value={value}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontFamily: 'regular',
                height: 48,
                borderWidth: 1,
                borderColor: COLORS.graydark,
                borderRadius: 12,
                backgroundColor: COLORS.gray,
                padding: 16,
              }}
            />
            {children}
          </View>
          {error && (
            <Text style={{ color: 'red', marginTop: 12 }}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;
