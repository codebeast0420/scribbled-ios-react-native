import React from 'react'
import { View, Image, Text } from 'react-native'

const TopPart = () => {
	return (
		<View>
			<View className='d-flex flex-col items-center mt-[20px]'>
				<Image source={require('../../../assets/more/avatar-lg.png')} />
				<Text className='text-[#101010] text-[16px]'>Username</Text>
			</View>
			<Text className='ml-[250px] mt-[-21px] text-[#4E94F5] text-[16px] underline decoration-1'>Sign up/Sign in</Text>
		</View>
	)
}

export default TopPart;