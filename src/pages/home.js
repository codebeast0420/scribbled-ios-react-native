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
import Discover from "../components/home/discover";
import Header from "../components/home/header";
import Result from "../components/home/result";

const Home = () => {
	const [isMy, setIsMy] = useState(true);
	return (
		<SafeAreaView className='bg-white'>
			<Header />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
			>
				<View className='mt-[30px] d-flex flex-column items-center px-[15px]'>
					<View className='d-flex flex-row rounded-sm'>
						<TouchableOpacity className='bg-[#242222] w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-bl-sm rounded-tl-sm' onPress={() => setIsMy(true)}>
							<Text className='text-white text-[14px]'>My</Text>
						</TouchableOpacity>
						<TouchableOpacity className='border-[#BBBBBB] border-[1px] bg-white w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-br-sm rounded-tr-sm' onPress={() => setIsMy(false)}>
							<Text className='text-black text-[14px]'>Discover</Text>
						</TouchableOpacity>
					</View>
					{isMy ? <Result /> : <Discover />}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}


export default Home;