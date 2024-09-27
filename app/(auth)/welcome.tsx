import CustomButton from '@/components/CustomButton'
import { onboarding } from '@/constants'
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null)
  const headerHeight = StatusBar.currentHeight!
  const [activeIndex, setActiveIndex] = useState(0)
  const isLastSlide = activeIndex === onboarding.length - 1

  return (
    <SafeAreaView
      className="flex h-full items-center justify-between bg-white"
      style={{ paddingVertical: headerHeight + 10 }}
    >
      <TouchableOpacity
        className="w-full px-5 items-end"
        onPress={() => {
          router.replace('/(auth)/sign-up')
        }}
      >
        <Text className="font-black text-md font-JakartaBold">
          Skip
        </Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-8 h-1 mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-8 h-1 mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(i) => setActiveIndex(i)}
      >
        {onboarding.map((data, index) => (
          <View
            className="flex items-center justify-center p-5"
            key={`onboarding-${index}-${data.id}`}
          >
            <Image
              source={data.image}
              className="w-full h-80"
              resizeMode="contain"
            />

            <View className="flex flex-row items-center justify-center w-11/12 mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {data.title}
              </Text>
            </View>

            <Text className="text-lg font-JakartaSemiBold mx-10 mt-3 text-center text-[#858585]">
              {data.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() =>
          isLastSlide
            ? router.replace('/(auth)/sign-up')
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  )
}

export default Onboarding
