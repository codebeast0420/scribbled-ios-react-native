import React, { Fragment, useEffect, useRef, useState } from "react";
import { View, Image, Text } from "react-native";
import SocialBar from "./socialBar";

export default function Predictions({ predictions, submissionCount, imgUrl }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (submissionCount > 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [predictions, submissionCount]);

  // if (submissionCount === 0) return;

  return (
    <View className="mt-[30px]">
      <Text className='text-black text-[28px] text-center'>Results</Text>
      {submissionCount > Object.keys(predictions).length && (
        <View className="pb-10 mx-auto w-full text-center">
          <View className="pt-10" ref={scrollRef} />
        </View>
      )}
      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <View ref={scrollRef} />
              )}
            <Prediction prediction={prediction} imgUrl={imgUrl} />
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
          <View className='d-flex flex-row'>
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
            <Text className='my-[15px] text-black text-[20px]'>&ldquo;{prediction.input.prompt}&rdquo;</Text>
            <SocialBar />
          </View>
        </View>
      </View>
    </View>
  );
}
