import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Alert, Pressable } from 'react-native'
import ControlBar from "./controlBar";
import SocialBar from "./socialBar";
import { Path, Svg } from 'react-native-svg';
import naughtyWords from "naughty-words";
import Predictions from "./predictions";
import ViewShot, { captureRef } from "react-native-view-shot";
// import uploadFile from "../../lib/upload";

const Result = ({
	predictions,
	setPredictions,
	promtImg,
	setPromtImg,
	submissionCount,
	setSubmissionCount,
	setScroll }) => {
	const [number, onChangeNumber] = useState('');
	const { height, width } = Dimensions.get('window');
	const [currentPath, setCurrentPath] = useState([]);
	const [paths, setPaths] = useState([]);
	const [error, setError] = useState(null);
	const [isProcessing, setIsProcessing] = useState(false);

	//ref for snapshot
	const ref = useRef(null);

	const onTouchMove = (event) => {
		setScroll(false)
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
		setScroll(true)
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

		await captureRef(ref, {
			format: 'png',
			quality: 0.8,
		}).then(
			uri => {
				const temp = [...promtImg];
				temp.push(uri);
				setPromtImg(temp)
			},
			error => console.error('Oops, snapshot failed', error),
		);

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

		setPredictions((predictions) => ({
			...predictions,
			[prediction.id]: prediction,
		}));

		setSubmissionCount(submissionCount + 1);

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
		// console.log(number);
	};

	return (
		<View className='w-full h-[100%]'>
			<View className='w-full mt-[20px] bg-white border-[1px] border-[#BBBBBB] d-flex flex-col items-center py-[50px]'>
				<View
					onStartShouldSetResponder={() => true}
					onMoveShouldSetResponder={() => true}
					onTouchStart={() => setScroll(false)}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					<ViewShot
						ref={ref}
						options={{
							format: 'png',
							quality: 1,
						}}>
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
					</ViewShot>
				</View>
			</View>
			<ControlBar setPath={setPaths} path={paths} />
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
			<Predictions
				predictions={predictions}
				isProcessing={isProcessing}
				submissionCount={submissionCount}
				imgUrl={promtImg}
				discover={false}
			/>
		</View>
	)
}


export default Result;