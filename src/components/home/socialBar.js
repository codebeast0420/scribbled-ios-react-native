import React from "react";
import { View, Image } from "react-native";

const SocialBar = () => {
	return (
		<View className='d-flex flex-row justify-between my-[10px]'>
			<Image source={require('../../../assets/home/share.png')}></Image>
			<Image source={require('../../../assets/home/instagram.png')}></Image>
			<Image source={require('../../../assets/home/tiktok.png')}></Image>
		</View>
	)
}

export default SocialBar;