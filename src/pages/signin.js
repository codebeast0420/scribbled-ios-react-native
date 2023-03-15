import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = ({ balance, setBalance }) => {
	const navigation = useNavigation();
	return (
		<SafeAreaView className='d-flex flex-col items-center bg-white h-[100%]'>
			<View className='mt-[40px] w-[120px] h-[120px] border-[1px] border-[#BBBBBB] rounded-[24px]'></View>
			<Text className='mt-[15px] text-[#101010] text-[28px]'>Scribble2img</Text>
			<Text className='text-[#837E7E] text-[28px] mt-[25px]'>Turn your sketch</Text>
			<Text className='text-[#837E7E] text-[28px] mt-[10px]'>into a drawing by AI</Text>
			<View className='mt-[140px] border-[1px] border-[#BBBBBB] rounded-[12px] w-[305px] h-[44px] d-flex flex-row items-center justify-center'>
				<Image source={require('../../assets/login/apple.png')} />
				<Text className='ml-[10px] text-[#101010] text-[16px]'>Sign in with Apple</Text>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Image className='mt-[50px]' source={require('../../assets/login/close.png')} />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default SignIn;