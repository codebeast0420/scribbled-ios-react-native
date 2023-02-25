import React from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';
import { Image } from "react-native";

const Home = () => {
	return (
		<SafeAreaView>
			<View className="d-flex flex-row h-[44px] items-center justify-between px-[15px]" >
				<Image source={require('../../assets/home/line-menu.png')} />
				<Text>Scribble2img</Text>
				<View className="d-flex flex-row items-center">
					<Image source={require('../../assets/home/coin-small.png')} />
					<Image source={require('../../assets/home/md-add.png')} />
				</View>
			</View>
		</SafeAreaView>
	)
}


export default Home;