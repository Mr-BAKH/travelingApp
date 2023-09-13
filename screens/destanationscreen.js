import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon,ClockIcon, MapIcon, SunIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../theme';

export default function Destaination(props) {
   const item = props.route.params;
   const navigation = useNavigation()
   const [isFavourite,toggleFavourite] = useState(false)

  return (
    <View className="bg-white  flex-1 space-y-[40px]">
      {/* destination Image */}
      <Image
        source={item.image}
        style={{width: wp(100), height:hp(55)}}
      />
      {/* back button */}
      <SafeAreaView className='flex-row justify-between items-center w-full absolute'>
        <TouchableOpacity
          className=" p-2 rounded-full ml-4"
          style={{backgroundColor:'rgba(255,255,255,0.5)'}}
          onPress={()=> navigation.goBack()}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity
          className=" p-2 rounded-full mr-4"
          style={{backgroundColor:'rgba(255,255,255,0.5)'}}
          onPress={()=> toggleFavourite(!isFavourite)}
        >
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? 'red':'white'}/>
        </TouchableOpacity>
      </SafeAreaView>
      {/* title & description & booking button */}
      <View 
        style={{borderTopRightRadius:40, borderTopLeftRadius:40, marginTop:-20}}
        className="px-5 w-full flex-1 justify-between "
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          className='space-y-5'
        >
          <View className='flex-row justify-between items-start'>
            <Text 
              style={{fontSize:wp(7)}}
              className='font-bold flex-1 text-neutral-700'
             >
              {item?.title}
            </Text>
            <Text
             style={{fontSize:wp(7), color:theme.text}}
             className='font-semibold text-neutral-700'
            >
             $ {item?.price}
            </Text>
          </View>
          <Text
            style={{fontSize:wp(3.7)}}
            className="text-neutral-700 tracking-wide mb-2"
          >
            {item?.longDescription}
          </Text>
          <View className='flex-row justify-between mx-1'>
            <View className='flex-row space-x-2 items-start'>
              <ClockIcon size={wp(7)} color={'skyblue'}/>
              <View className="space-x-2">
                <Text
                  style={{fontSize:wp(4.5)}}
                  className='font-blor text-neutral-700'
                >{item.duration}</Text>
                <Text className='text-neutral-600 tracking-wide'>Duration</Text>
              </View>
            </View>
            <View className='flex-row space-x-2 items-start'>
              <MapIcon size={wp(7)} color={'#f87171'}/>
              <View className="space-x-2">
                <Text
                  style={{fontSize:wp(4.5)}}
                  className='font-blor text-neutral-700'
                >{item.distance}</Text>
                <Text className='text-neutral-600 tracking-wide'>Duration</Text>
              </View>
            </View>
            <View className='flex-row space-x-2 items-start'>
              <SunIcon size={wp(7)} color={'orange'}/>
              <View className="space-x-2">
                <Text
                  style={{fontSize:wp(4.5)}}
                  className='font-blor text-neutral-700'
                >{item.weather}</Text>
                <Text className='text-neutral-600 tracking-wide'>Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{backgroundColor: theme.bg(0.7), height:wp(15), width:wp(50)}}
          className='mb-6 mx-auto justify-center items-center rounded-full'
        >
          <Text
            className='text-white font-bold'
            style={{fontSize:wp(5.5)}}
          >Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}