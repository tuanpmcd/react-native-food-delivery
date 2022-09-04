import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = '',
  appendComponent,
  prependComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength
}) => {
  return (
    <View
      style={{
        ...containerStyle
      }}
    >
      {/* Label and ErrorMsg */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body4
          }}
        >
          {errorMsg}
        </Text>
      </View>

      {/* Text input */}
      <View
        style={{
          flexDirection: 'row',
          height: SIZES.height > 800 ? 55 : 45,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.height > 800 ? SIZES.base : 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle
        }}
      >
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(text) => onChange(text)}
          maxLength={maxLength}
        />

        {appendComponent}

      </View>
    </View>
  )
}

export default FormInput