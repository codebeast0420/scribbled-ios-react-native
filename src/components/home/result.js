import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import ControlBar from "./controlBar";
import SocialBar from "./socialBar";

const Result = () => {
	const [number, onChangeNumber] = useState('');
	return (
		<View className='w-full'>
			<View className='w-full mt-[20px] border-[1px] border-[#BBBBBB] d-flex flex-column items-center py-[50px]'>
				<Image source={require('../../../assets/home/dog.png')} />
				<Text className='text-[#9A9A9A] text-[20px]'>Draw something by texts</Text>
			</View>
			<ControlBar />
			<View className='d-flex flex-row items-center w-full mt-[30px]'>
				<TextInput
					onChangeText={onChangeNumber}
					value={number}
					placeholder="Describe about you want"
					keyboardType="numeric"
					className='border-[1px] border-[#BBBBBB] rounded-l-md text-[18px] text-[#101010] w-5/6 h-[56px]'
				/>
				<TouchableOpacity className='bg-[#242222] rounded-r-md w-1/6 h-[56px]  d-flex flex-row items-center justify-center'>
					<Text className='text-white text-center text-[18px]'>Go</Text>
				</TouchableOpacity>
			</View>
			<View className='mt-[30px]'>
				<Text className='text-black text-[28px] text-center'>Results</Text>
				<View className='mt-[20px]'>
					<Image source={require('../../../assets/home/owl.png')}></Image>
					<View>
						<Text className='my-[15px] text-black text-[20px]'>a goofy owl</Text>
						<SocialBar />
					</View>
				</View>
				<View className='mt-[20px] mb-[110px]'>
					<Image source={require('../../../assets/home/starfish.png')}></Image>
					<View>
						<SocialBar />
					</View>
				</View>
			</View>
		</View>
	)
}

export default Result;