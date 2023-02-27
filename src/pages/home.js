import React, { useState } from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Text,
	View
} from 'react-native';
import { Image } from "react-native";
import ControlBar from "../components/home/controlBar";
import Header from "../components/home/header";
import SocialBar from "../components/home/socialBar";

const Home = () => {
	const [text, onChangeText] = useState('Useless Text');
	const [number, onChangeNumber] = useState('');
	return (
		<SafeAreaView className='bg-white'>
			<Header />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
			>
				<View className='mt-[30px] d-flex flex-column items-center px-[15px]'>
					<View className='d-flex flex-row rounded-sm'>
						<TouchableOpacity className='bg-[#242222] w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-bl-sm rounded-tl-sm'>
							<Text className='text-white text-[14px]'>My</Text>
						</TouchableOpacity>
						<TouchableOpacity className='border-[#BBBBBB] border-[1px] bg-white w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-br-sm rounded-tr-sm'>
							<Text className='text-black text-[14px]'>Discover</Text>
						</TouchableOpacity>
					</View>
					<View className='w-full mt-[20px] border-[1px] border-[#BBBBBB] d-flex flex-column items-center py-[50px]'>
						<Image source={require('../../assets/home/dog.png')} />
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
							<Image source={require('../../assets/home/owl.png')}></Image>
							<View>
								<Text className='my-[15px] text-black text-[20px]'>a goofy owl</Text>
								<SocialBar />
							</View>
						</View>
						<View className='mt-[20px] mb-[110px]'>
							<Image source={require('../../assets/home/starfish.png')}></Image>
							<View>
								<SocialBar />
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}


export default Home;