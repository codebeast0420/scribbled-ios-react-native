import React, { useState } from "react";
import { View, Text, Image } from 'react-native'
import DiscoverBar from "./discoverBar";
import Predictions from "./predictions";

const Discover = ({
	predictions,
	setPredictions,
	promtImg,
	setPromtImg,
	submissionCount,
	setSubmissionCount }) => {
	const [isProcessing, setIsProcessing] = useState(false);

	return (
		<View className='mt-[30px]'>
			<Predictions
				predictions={predictions}
				isProcessing={isProcessing}
				submissionCount={submissionCount}
				imgUrl={promtImg}
				discover={true}
			/>
		</View>
	)
}

export default Discover;