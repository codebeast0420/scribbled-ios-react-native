import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const SignIn = () => {
	return (
		<View className='d-flex flex-col items-center bg-white'>
			<View className='mt-[40px] w-[120px] h-[120px] border-[1px] border-[#BBBBBB] rounded-[24px]'></View>
			<Text className='mt-[15px] text-[#101010] text-[28px]'>Scribble2img</Text>
			<Text className='text-[#837E7E] text-[28px] mt-[25px]'>Turn your sketch</Text>
			<Text className='text-[#837E7E] text-[28px] mt-[10px]'>into a drawing by AI</Text>
			<View className='mt-[140px] border-[1px] border-[#BBBBBB] rounded-[12px] w-[305px] h-[44px] d-flex flex-row items-center justify-center'>
				<Image source={require('../../assets/login/apple.png')}/>
				<Text className='ml-[10px] text-[#101010] text-[16px]'>Sign in with Apple</Text>
			</View>
			<Image className='mt-[50px]' source={require('../../assets/login/close.png')}/>
		</View>
	)
}

export default SignIn;