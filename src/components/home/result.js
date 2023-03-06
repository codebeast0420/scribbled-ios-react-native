import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Alert, Pressable } from 'react-native'
import ControlBar from "./controlBar";
import SocialBar from "./socialBar";
import { Path, Svg } from 'react-native-svg';

const Result = () => {
	const [number, onChangeNumber] = useState('');
	const { height, width } = Dimensions.get('window');
	const [currentPath, setCurrentPath] = useState([]);
	const [paths, setPaths] = useState([]);
	const [result, setResult] = useState(false);

	//ref for snapshot
	const ref = useRef(null);

	const onTouchMove = (event) => {
		const newPath = [...currentPath];

		//get current user touches position
		const locationX = event.nativeEvent.locationX;
		const locationY = event.nativeEvent.locationY;

		// create new point
		const newPoint = `${newPath.length === 0 ? 'M' : ''}${locationX.toFixed(
			0,
		)},${locationY.toFixed(0)} `;

		// add the point to older points
		newPath.push(newPoint);
		setCurrentPath(newPath);
	};

	const onTouchEnd = () => {
		const currentPaths = [...paths];
		const newPath = [...currentPath];

		//push new path with old path and clean current path state
		currentPaths.push(newPath);
		setPaths(currentPaths);
		setCurrentPath([]);
	};
	return (
		<View className='w-full h-[100%]'>
			<View className='w-full mt-[20px] border-[1px] border-[#BBBBBB] d-flex flex-col items-center py-[50px]'>
				{/* <Image source={require('../../../assets/home/dog.png')} />
				<Text className='text-[#9A9A9A] text-[20px]'>Draw something by texts</Text> */}
				<View
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}>
					<Svg height={'100px'} width={width}>
						<Path
							d={currentPath.join('')}
							stroke={'red'}
							fill={'transparent'}
							strokeWidth={2}
						/>

						{paths.length > 0 &&
							paths.map((item, index) => (
								<Path
									key={`path-${index}`}
									d={item.join('')}
									stroke={'red'}
									strokeWidth={2}
									fill={'transparent'}
								/>
							))}
					</Svg>
				</View>
			</View>
			<ControlBar />
			<View className='d-flex flex-row items-center w-full mt-[30px]'>
				<TextInput
					onChangeText={onChangeNumber}
					value={number}
					placeholder="Describe about you want"
					keyboardType="default"
					className='border-[1px] border-[#BBBBBB] rounded-l-md text-[18px] text-[#101010] w-5/6 h-[56px]'
				/>
				<TouchableOpacity className='bg-[#242222] rounded-r-md w-1/6 h-[56px]  d-flex flex-row items-center justify-center'>
					<Text className='text-white text-center text-[18px]'>Go</Text>
				</TouchableOpacity>
			</View>
			{result && (
				<View className='mt-[30px]'>
					<Text className='text-black text-[28px] text-center'>Results</Text>
					<View className='mt-[20px]'>
						<Image source={require('../../../assets/home/owl.png')}></Image>
						<View>
							<Text className='my-[15px] text-black text-[20px]'>a goofy owl</Text>
							<SocialBar />
						</View>
					</View>
					<View className='mt-[20px] mb-[110px]'>
						<Image source={require('../../../assets/home/starfish.png')}></Image>
						<View>
							<SocialBar />
						</View>
					</View>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	svgContainer: {
		borderColor: 'black',
		backgroundColor: 'white',
		borderWidth: 1,
	},
	saveButton: {
		height: 40,
		width: 100,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
});

export default Result;