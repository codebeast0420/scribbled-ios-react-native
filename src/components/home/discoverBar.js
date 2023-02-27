import React from "react";
import { View, Image, Text } from "react-native";

const DiscoverBar = ({ follow }) => {
	return (
		<View>
			<View className='d-flex flex-row justify-between items-center'>
				<View className='d-flex flex-row items-center'>
					<Image source={require('../../../assets/home/avatar.png')} />
					<Text className='ml-[5px] text-[#101010] text-[14px]'>Username</Text>
				</View>
				<Text className='my-[15px] text-black text-[20px]'>a goofy owl</Text>
			</View>
			<View className='d-flex flex-row justify-between my-[10px]'>
				<Image source={require('../../../assets/home/share.png')} />
				{follow != 0 ? <View className='d-flex flex-row items-center'>
					<Image source={require('../../../assets/home/follow.png')} />
					<Text className='text-[14px] text-[#101010] ml-[7px]'>{follow}</Text>
				</View>
					: <Image source={require('../../../assets/home/no-follow.png')} />}
				<Image source={require('../../../assets/home/tiktok.png')} />
			</View>
		</View>
	)
}

export default DiscoverBar;