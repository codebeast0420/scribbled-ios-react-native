import React from "react";
import { View, Text, Image } from 'react-native'
import DiscoverBar from "./discoverBar";

const Discover = () => {
	return (
		<View className='mt-[30px]'>
			<View className='mt-[20px]'>
				<Image source={require('../../../assets/home/owl.png')}></Image>
				<View>
					<DiscoverBar follow={58}/>
				</View>
			</View>
			<View className='mt-[20px] mb-[110px]'>
				<Image source={require('../../../assets/home/starfish.png')}></Image>
				<View>
					<DiscoverBar follow={0} />
				</View>
			</View>
		</View>
	)
}

export default Discover;