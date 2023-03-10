import React, { useState } from "react";
import {
	View,
	TouchableOpacity,
	Switch,
	Text,
	Image
} from "react-native";

const ControlBar = ({ setPath, path }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const undo = () => {
		// if(path.length) {
		// 	console.log('s')
		// 	setPath(path.pop());
		// }
	}

	return (
		<View className='w-full d-flex flex-row items-center mt-[15px] justify-between'>
			<View className='d-flex flex-row'>
				<TouchableOpacity className='d-flex flex-row items-center' onPress={() => undo()}>
					<Image source={require('../../../assets/home/back.png')} />
					<Text className='px-[5px] text-[#101010]'>Undo</Text>
				</TouchableOpacity>
				<TouchableOpacity className='d-flex flex-row items-center ml-[50px]' onPress={() => setPath([])}>
					<Image source={require('../../../assets/home/clear.png')} />
					<Text className='px-[5px] text-[#101010]'>Clear</Text>
				</TouchableOpacity>
			</View>
			<View className='d-flex flex-row items-center'>
				<Text className='text-[16px] text-[#101010]'>Depict</Text>
				<Switch
					trackColor={{ false: '#BBBBBB', true: '#242222' }}
					thumbColor={'#FFFFFF'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isEnabled}
					className='ml-[5px]'
				/>
			</View>
		</View>
	)
}

export default ControlBar;