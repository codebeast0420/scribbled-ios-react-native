import React, { useState } from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Text,
	View
} from 'react-native';
import { Image } from "react-native";
import Discover from "../components/home/discover";
import Header from "../components/home/header";
import Result from "../components/home/result";

const Home = ({ balance, setBalance }) => {
	const [isMy, setIsMy] = useState(true);
	const [predictions, setPredictions] = useState({});
	const [promtImg, setPromtImg] = useState([]);
	const [submissionCount, setSubmissionCount] = useState(0);
	const [isScrollEnable, setIsScrollEnable] = useState(true);

	return (
		<SafeAreaView className='h-[100%]'>
			<Header balance={balance} />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				scrollEnabled={isScrollEnable}
			>
				<View className='mt-[30px] d-flex flex-col items-center px-[15px]'>
					<View className='d-flex flex-row rounded-sm'>
						<TouchableOpacity className={`${isMy ? 'bg-[#242222]' : 'bg-white'}  border-[#BBBBBB] border-[1px] w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-bl-sm rounded-tl-sm`} onPress={() => setIsMy(true)}>
							<Text className={`${isMy ? 'text-white' : 'text-black'} text-[14px]`}>My</Text>
						</TouchableOpacity>
						<TouchableOpacity className={`${!isMy ? 'bg-[#242222]' : 'bg-white'} border-[#BBBBBB] border-[1px] w-[80px] h-[30px] d-flex flex-row items-center justify-center rounded-br-sm rounded-tr-sm`} onPress={() => setIsMy(false)}>
							<Text className={`${!isMy ? 'text-white' : 'text-black'} text-[14px]`}>Discover</Text>
						</TouchableOpacity>
					</View>
					{isMy ?
						<Result
							predictions={predictions}
							setPredictions={setPredictions}
							promtImg={promtImg}
							setPromtImg={setPromtImg}
							submissionCount={submissionCount}
							setSubmissionCount={setSubmissionCount}
							setScroll={setIsScrollEnable}
							balance={balance}
							setBalance={setBalance}
						/> :
						<Discover
							predictions={predictions}
							setPredictions={setPredictions}
							promtImg={promtImg}
							setPromtImg={setPromtImg}
							submissionCount={submissionCount}
							setSubmissionCount={setSubmissionCount}
							setScroll={setIsScrollEnable}
						/>
					}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}


export default Home;