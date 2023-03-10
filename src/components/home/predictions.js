import React, { Fragment, useEffect, useRef, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SocialBar from "./socialBar";

export default function Predictions({ predictions, submissionCount, imgUrl }) {


  return (
    <View className="mt-[30px]">
      <Text className='text-black text-[28px] text-center'>Results</Text>
      {submissionCount > Object.keys(predictions).length && (
        <View className="pb-10 mx-auto w-full text-center">
          <View className="pt-10" />
        </View>
      )}
      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <View />
              )}
            <Prediction prediction={prediction} imgUrl={imgUrl[submissionCount - index - 1]} />
          </Fragment>
        ))}
    </View>
  );
}

export function Prediction({ prediction, imgUrl }) {

  if (!prediction) return null;

  return (
    <View className='mt-[-10px] mb-[30px]'>
      <View className='mt-[30px]'>
        <View className='mt-[20px]'>
          <View className='d-flex flex-row bg-white p-[15px]'
            style={styles.box}>
            <View className="w-1/2 aspect-square relative border">
              <Image
                source={{ uri: imgUrl }}
                className="w-full aspect-square"
              />
            </View>
            <View className="w-1/2 aspect-square relative">
              {prediction.output?.length ? (
                <Image
                  source={{ uri: prediction.output[prediction.output.length - 1] }}
                  className="w-full aspect-square"
                />
              ) : (
                // <View className="grid h-full place-items-center">
                //   <Loader />
                // </View>
                <View />
              )}
            </View>
          </View>
          <View>
            <Text className='my-[15px] text-black text-[20px]'>{prediction.input.prompt}</Text>
            <SocialBar />
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    // Android
    elevation: 5,
    // iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
