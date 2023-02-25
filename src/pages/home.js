import React, { useState } from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	TouchableHighlight,
	Text,
	Switch,
	View
} from 'react-native';
import { Image } from "react-native";
import Header from "../components/home/header";

const Home = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	return (
		<SafeAreaView className='bg-white'>
			<Header />
			<View className='mt-[30px] d-flex flex-column items-center px-[15px]'>
				<View className='d-flex flex-row rounded-sm'>
					<TouchableOpacity className='bg-[#242222] w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-bl-sm rounded-tl-sm'>
						<Text className='text-white text-[14px]'>My</Text>
					</TouchableOpacity>
					<TouchableHighlight className='border-[#BBBBBB] border-[1px] bg-white w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-br-sm rounded-tr-sm'>
						<Text className='text-black text-[14px]'>Discover</Text>
					</TouchableHighlight>
				</View>
				<View className='w-full mt-[20px] border-[1px] border-[#BBBBBB] d-flex flex-column items-center py-[50px]'>
					<Image source={require('../../assets/home/dog.png')} />
					<Text className='text-[#9A9A9A] text-[20px]'>Draw something by texts</Text>
				</View>
				<View className='w-full d-flex flex-row items-center mt-[15px] justify-between'>
					<View className='d-flex flex-row'>
						<View className='d-flex flex-row items-center'>
							<TouchableOpacity>
								<Image source={require('../../assets/home/back.png')} />
							</TouchableOpacity>
							<Text className='px-[5px]'>Undo</Text>
						</View>
						<View className='d-flex flex-row items-center ml-[50px]'>
							<Image source={require('../../assets/home/clear.png')} />
							<Text className='px-[5px]'>Clear</Text>
						</View>
					</View>
					<View>
						<Text>Depict</Text>
						<Switch
							trackColor={{ false: '#767577', true: '#81b0ff' }}
							thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}


export default Home;