import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { destinationData } from '../constants'

export default function Slice() {

  const navigation = useNavigation();

  return (
    <View className=' mx-4 flex-row justify-between flex-wrap'>
     {
       destinationData.map((item,index)=>{
        return(
          <Destination navigation={navigation} key={index} item={item}/>
        )
       })
     }
    </View>
  )
}


const Destination = ({item,navigation})=>{

  const [isFavourite, toggleFavourite] = useState(false)

  return(
    <TouchableOpacity
      style={{width: wp(44), height: wp(65)}}
      className='justify-end relative p-4 py-6 space-y-2 mb-5'
      onPress={()=> navigation.navigate("DestainationScreen", {...item})}
    >
      <Image
        source={item.image}
        style={{width: wp(44), height: wp(65)}}
        className='absolute rounded-[35px]'
      />
      <LinearGradient
        colors={['transparent','rgba(0,0,0,0.8)']}
        style={{width:wp(44), height:hp(15)}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        className='absolute bottom-0 rounded-[35px]'
      />
      <TouchableOpacity
        style={{backgroundColor:'rgba(255,255,255,0.4)'}}
        className='absolute top-1 right-3 rounded-full p-3'
        onPress={()=>toggleFavourite(!isFavourite)}
      >
        <HeartIcon size={wp(5)} color={isFavourite?"red":'white'}/>
      </TouchableOpacity>

      <Text style={{fontSize: wp(4)}} className='text-white font-semibold'>{item.title}</Text>
      <Text style={{fontSize: wp(2.2 )}} className='text-white'>{item.shortDescription}</Text>
    </TouchableOpacity>
  )
}