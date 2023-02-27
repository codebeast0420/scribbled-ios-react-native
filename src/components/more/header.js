import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
	const navigation = useNavigation();
	return (
		<View className="bg-[#F8F8F8] d-flex flex-row h-[44px] items-center justify-between px-[15px]" >
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Image source={require('../../../assets/more/home.png')} />
			</TouchableOpacity>
			<Text>More</Text>
			<View className="d-flex flex-row items-center">
				<View className='d-flex flex-row items-center px-[10px]'>
					<Image className='px-[5px]' source={require('../../../assets/home/coin-small.png')} />
					<Text className='px-[5px]'>10</Text>
				</View>
				<Image source={require('../../../assets/home/md-add.png')} />
			</View>
		</View>
	)
}

export default Header;