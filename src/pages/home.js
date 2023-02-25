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
import LineMenu from "../components/home/lineMenu";
import { Image } from "react-native";

const Home = () => {

	const coin = require('./coin-small.png');
	return (
		<SafeAreaView>
			<View style={styles.navbar}>
				<Text>Scribble2img</Text>
				<LineMenu />
				<Image source={coin}/>
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