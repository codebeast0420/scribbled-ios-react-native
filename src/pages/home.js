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

	const lineMenu = require('../../assets/home/line-menu.png');
	return (
		<SafeAreaView>
			<View style={styles.navbar}>
				<Text>Scribble2img</Text>
				<Image source={require('../../assets/home/line-menu.png')} />
				<Image source={require('../../assets/home/coin-small.png')} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: '#F8F8F8',
		height: 44,
		width: '100%',
		display: 'flex',
		alignItems: "center"
	}
})

export default Home;