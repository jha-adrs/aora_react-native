import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, Vibration, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { GoogleIcon } from '../assets/svgs/google';
import { MailIcon } from '../assets/svgs/mail';
import 'react-native-url-polyfill/auto'
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            resizeMode='contain'
            source={images.logo} className="w-[130px] h-[84px]" />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover endless possibilities with{' '}
              <Text className="text-secondary-200">
                Aora
              </Text>

            </Text>
            <Image source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>
          <Text className="text-gray-100 mt-7 text-center text-sm font-pregular">
            Where creativity meets technology to create a new world of possibilities.

          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => 
              router.push('/sign-in?provider=email')
            }
            containerStyles={"flex flex-row w-full mt-7"}
            textStyles={"text-gray-800"}
            Icon={MailIcon}
            iconStyles={"w-8 h-8 mr-2"}
          />

          <CustomButton
            
            title="Continue with Google"
            handlePress={() => router.push('/sign-in?provider=google')}
            containerStyles={"flex flex-row w-full mt-7 bg-white"}
            textStyles={"text-gray-800 font-pmedium"}
            iconStyles={"w-8 h-8 mr-2"}
            Icon={GoogleIcon}
          />
          

        </View>
      </ScrollView>
      <StatusBar
        backgroundColor='#161622'
        style="light" />
    </SafeAreaView>
  );
}
