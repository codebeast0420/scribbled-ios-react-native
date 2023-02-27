import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import Header from '../components/more/header'
import TopPart from '../components/more/topPart'
import { useNavigation } from '@react-navigation/native'

const More = () => {
	const navigation = useNavigation();
	return (
		<View className='bg-white h-full'>
			<Header />
			<View className='px-[15px]'>
				<TopPart />
				<View className='mt-[15px] bg-[#242222] w-full d-flex flex-row p-[10px] justify-between rounded-t-[16px] rounded-b-[4px]'>
					<View className='d-flex flex-col items-center ml-[10px]'>
						<Image source={require('../../assets/more/crown.png')} />
						<Text className='text-[#F49207] text-[18px]'>VIP</Text>
					</View>
					<FlatList
						data={[
							{ key: '1000 coins/mon' },
							{ key: 'Priority access to create' },
							{ key: 'No Ads' },
						]}
						renderItem={({ item }) => {
							return (
								<View className='ml-[50px]'>
									<Text className='text-[14px] text-white font-semibold'>{`\u2022 ${item.key}`}</Text>
								</View>
							);
						}}
					/>
					<View className='d-flex flex-col items-center justify-around'>
						<Text className='text-white text-[14px] font-semibold'>$4.99/m</Text>
						<Image source={require('../../assets/more/next.png')} />
					</View>
				</View>
				<View className='d-flex flex-col mt-[20px]'>
					<View className='d-flex flex-row items-center mt-[10px] justify-between'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/more/funds.png')} />
							<Text className='px-[15px] text-[#101010] text-[14px]'>More coins</Text>
						</View>
						<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#F20303] rounded-[6px] px-[7px] py-[3px]' onPress={() => navigation.navigate('Buying')}>
							<Text className='text-white text-[12px]'>50% off</Text>
							<Image source={require('../../assets/home/coin-small.png')} />
						</TouchableOpacity>
					</View>
					<View className='d-flex flex-row items-center mt-[10px] justify-between'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/more/check.png')} />
							<Text className='px-[15px] text-[#101010] text-[14px]'>Check in</Text>
						</View>
						<View className='d-flex flex-row items-center'>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#9A9A9A] rounded-[6px] px-[7px] py-[3px] mr-[20px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>5</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>5</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
						</View>
					</View>
					<View className='d-flex flex-row items-center mt-[10px] justify-between'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/more/review.png')} />
							<Text className='px-[15px] text-[#101010] text-[14px]'>Review</Text>
						</View>
						<View className='d-flex flex-row items-center'>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#9A9A9A] rounded-[6px] px-[7px] py-[3px] mr-[20px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>Go</Text>
								<Text className='text-white text-[16px] font-bold mr-[8px]'>&gt;</Text>
							</TouchableOpacity>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>20</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View className='d-flex flex-col mt-[20px]'>
					<View className='d-flex flex-row items-center mt-[10px] justify-between'>
						<View className='d-flex flex-row items-center'>
							<Text className='text-white text-[16px] font-bold ml-[25px]'>Go</Text>
							<Text className='text-white text-[16px] font-bold mr-[8px]'>&gt;</Text>
						</View>
						<View className='d-flex flex-row items-center'>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#9A9A9A] rounded-[6px] px-[7px] py-[3px] mr-[20px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>10</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>5</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
						</View>
					</View>
					<View className='d-flex flex-row items-center mt-[10px] justify-between'>
						<View className='d-flex flex-row items-center'>
							<Image source={require('../../assets/more/watch.png')} />
							<Text className='px-[15px] text-[#101010] text-[14px]'>Watch Ads</Text>
						</View>
						<View className='d-flex flex-row items-center'>
							<TouchableOpacity className='w-[97px] d-flex flex-row items-center justify-between bg-[#242222] rounded-[6px] px-[7px] py-[3px]'>
								<Text className='text-white text-[16px] font-bold ml-[25px]'>5</Text>
								<Image source={require('../../assets/home/coin-small.png')} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View className='mt-[15px]'>
					<Text className='text-[#F20303] text-[14px] mt-[5px]'>备注：</Text>
					<Text className='text-[#F20303] text-[14px] mt-[5px]'>Check in(\,)每天点一次，点击后变灰</Text>
					<Text className='text-[#F20303] text-[14px] mt-[5px]'>Review(\,)每个版本用户可点一次，点击后按钮变 Go &gt;</Text>
					<Text className='text-[#F20303] text-[14px] mt-[5px]'>Share(\,)每个用户每天可获得一次奖励,点击后变为 Go &gt;</Text>
				</View>
				<View className='d-flex flex-col items-center mt-[40px]'>
					<TouchableOpacity onPress={() => navigation.navigate('Sign')} className='bg-[#242222] border-[1px] border-[#BBBBBB] w-[134px] py-[5px] rounded-[4px]'>
						<Text className='text-center text-white'>Sign Out</Text>
					</TouchableOpacity>
					<TouchableOpacity className='bg-[#9A9A9A] border-[1px] border-[#BBBBBB] w-[134px] py-[5px] rounded-[4px] mt-[15px]'>
						<Text className='text-center text-white'>Delete Account</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default More;