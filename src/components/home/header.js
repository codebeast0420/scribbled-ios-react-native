import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ balance }) => {
	const navigation = useNavigation();
	return (
		<View className="bg-[#F8F8F8] d-flex flex-row h-[44px] items-center justify-between px-[15px]" >
			<TouchableOpacity onPress={() => navigation.navigate('More')}>
				<Image source={require('../../../assets/home/line-menu.png')} />
			</TouchableOpacity>
			<Text>Scribble2img</Text>
			<View className="d-flex flex-row items-center">
				<View className='d-flex flex-row items-center px-[10px]'>
					<Image className='px-[5px]' source={require('../../../assets/home/coin-small.png')} />
					<Text className='px-[5px]'>{balance}</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('More')}>
					<Image source={require('../../../assets/home/md-add.png')} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Header;