import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Buying = () => {
	const navigation = useNavigation();
	return (
		<View className='bg-white h-full'>
			<View className='w-full h-[44px] d-flex flex-row items-center'>
				<TouchableOpacity onPress={() => navigation.navigate('More')}>
					<Image source={require('../../assets/buying/left-arrow.png')} />
				</TouchableOpacity>
				<Text className='text-center ml-[33%] text-[#101010] text-[16px]'>My Balance</Text>
			</View>
			<View className='d-flex flex-col px-[15px] bg-white'>
				<View className='d-flex flex-row items-center justify-center mt-[20px]'>
					<Image source={require('../../assets/buying/big-coin.png')} />
					<Text className='text-[#242222] text-[24px] ml-[10px]'>10</Text>
					<Text className='text-[#242222] text-[18px] mt-[5px] ml-[5px]'>Coins</Text>
				</View>
				<View className='d-flex flex-col'>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 100</Text>
						</View>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 1.99</Text>
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 200</Text>
						</View>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 3.99</Text>
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 500</Text>
						</View>
						<Text className='text-[#EE5555] text-[14px]'>90% OFF</Text>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 8.99</Text>
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 1000</Text>
						</View>
						<Text className='text-[#EE5555] text-[14px]'>80% OFF</Text>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 15.99</Text>
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 2000</Text>
						</View>
						<Text className='text-[#EE5555] text-[14px]'>70% OFF</Text>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 27.99</Text>
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center justify-between mt-[30px]'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/buying/md-coin.png')} />
							<Text className='text-[#242222] text-[18px] ml-[10px]'>X 5000</Text>
						</View>
						<Text className='text-[#EE5555] text-[14px]'>50% OFF</Text>
						<TouchableOpacity className='w-[97px] h-[34px] d-flex flex-row items-center justify-center bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
							<Text className='text-white text-[16px] font-bold'>$ 49.99</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Buying