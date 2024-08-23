import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const local = useLocalSearchParams()
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async (e) => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill all fields")
      return;
    }
    setIsSubmitting(true)

    try {
      const res = await createUser(form.email, form.password, form.username)

      router.replace("/home")
    } catch (error) {
      console.log(error)
      Alert.alert("Error", error.message || "Failed to create user")
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView >
        <View
          className="w-full flex-1  flex-col justify-center h-[95vh] px-4 my-6 ">
          <View>
            <Image source={images.logo} resizeMode='contain'
              className="w-[115px] h-[35px]"
            />

            <Text className="text-xl text-white font-bold mt-5">
              Sign Up to Aora
            </Text>

            <FormField
              title="Username"
              value={form.username}
              handleChange={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-7"
              placeholder={"Enter your username"}
            />

            <FormField
              title="Email"
              value={form.email}
              handleChange={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              placeholder={"Enter your email"}
            />

            <FormField
              title="Password"
              value={form.password}
              handleChange={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              placeholder={"Choose your password"}

            />

            <CustomButton
              title={"Sign Up"}
              handlePress={submit}
              containerStyles={"mt-7"}
              isLoading={isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-md font-pregular text-gray-100">
                Already have an account?
              </Text>
              <Link href="/sign-in" className="text-secondary-200 font-psemibold">
                Sign In
              </Link>
            </View>
          </View>

          <View className="space-y-4 flex-1 flex-col justify-end">
            <Text className="text-center text-gray-100 font-pregular">
              By continuing, you agree to our{' '}
              <Link href="/terms" className="text-secondary-200 font-psemibold">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-secondary-200 font-psemibold">
                Privacy Policy
              </Link>
            </Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})