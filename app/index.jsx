import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className=" text-2xl text-white font-pblack">
        AADARSH Rocks!
      </Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{color: 'red'}}>
        Go to profile pageds
      </Link>
    </View>
  );
}
