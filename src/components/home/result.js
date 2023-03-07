import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Alert, Pressable } from 'react-native'
import ControlBar from "./controlBar";
import SocialBar from "./socialBar";
import { Path, Svg } from 'react-native-svg';
import naughtyWords from "naughty-words";
import Predictions from "./predictions";

const Result = () => {
	const [number, onChangeNumber] = useState('');
	const { height, width } = Dimensions.get('window');
	const [currentPath, setCurrentPath] = useState([]);
	const [paths, setPaths] = useState([]);
	const [result, setResult] = useState(false);
	const [error, setError] = useState(null);
	const [submissionCount, setSubmissionCount] = useState(0);
	const [predictions, setPredictions] = useState({});
	const [isProcessing, setIsProcessing] = useState(false);
	const [scribble, setScribble] = useState(null);

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

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();


		const prompt = number
			.split(/\s+/)
			.map((word) => (naughtyWords.en.includes(word) ? "something" : word))
			.join(" ");

		setError(null);
		setIsProcessing(true);

		const body = {
			prompt,
			image: 'https://upcdn.io/FW25b4F/raw/uploads/scribble-diffusion/1.0.0/2023-03-06/scribble_input_idcMdujY.png',
		};

		const response = await fetch("http://95.216.115.245:5000/prediction/getprediction", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		let prediction = await response.json();
		// console.log("prediction", prediction);

		setPredictions((predictions) => ({
			...predictions,
			[prediction.id]: prediction,
		}));

		if (response.status !== 201) {
			setError(prediction.detail);
			return;
		}

		while (
			prediction.status !== "succeeded" &&
			prediction.status !== "failed"
		) {
			await sleep(500);
			const response = await fetch("http://95.216.115.245:5000/prediction/getresult", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ predictionId: prediction.id }),
			});
			prediction = await response.json();
			console.log("result", prediction);
			setPredictions((predictions) => ({
				...predictions,
				[prediction.id]: prediction,
			}));
			if (response.status !== 200) {
				setError(prediction.detail);
				return;
			}
		}

		setIsProcessing(false);
		setResult(true);
		// console.log(number);
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
				<TouchableOpacity className='bg-[#242222] rounded-r-md w-1/6 h-[56px]  d-flex flex-row items-center justify-center' onPress={handleSubmit}>
					<Text className='text-white text-center text-[18px]'>Go</Text>
				</TouchableOpacity>
			</View>
			{result && (
				<Predictions
					predictions={predictions}
					isProcessing={isProcessing}
					submissionCount={submissionCount}
				/>
				// <View className='mt-[30px]'>
				// 	<Text className='text-black text-[28px] text-center'>Results</Text>
				// 	<View className='mt-[20px]'>
				// 		<Image source={require('../../../assets/home/owl.png')}></Image>
				// 		<View>
				// 			<Text className='my-[15px] text-black text-[20px]'>a goofy owl</Text>
				// 			<SocialBar />
				// 		</View>
				// 	</View>
				// 	<View className='mt-[20px] mb-[110px]'>
				// 		<Image source={require('../../../assets/home/starfish.png')}></Image>
				// 		<View>
				// 			<SocialBar />
				// 		</View>
				// 	</View>
				// </View>
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