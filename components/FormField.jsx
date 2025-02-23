import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'

const FormField = ({
    title, value, placeholder, handleChange, otherStyles, ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={
            ` space-y-2 ${otherStyles}`
        }>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View
                className="border border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChange}
                    secureTextEntry={
                        title === "Password" && !showPassword
                    }
                    selectionColor={"#FFD700"}
                    placeholderTextColor={"#8C8C8C"}
                />
                {
                    title === 'Password' && (
                        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                            <Image source={showPassword ? icons.eye : icons.eyeHide}
                                className="w-6 h-6"
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default FormField