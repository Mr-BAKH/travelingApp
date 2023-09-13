import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { View, Text, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Categorise from '../components/categorise';
import SortCategory  from '../components/sortcategorise';
import Destination from '../components/destination'

const ios = Platform.OS =='ios';
const topMargin = ios? 'mt-3': 'mt-10';
export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`${topMargin} space-y-6`}
      >

        {/* Avata */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text style={{fontSize: wp(7)}} className='font-bold text-neutral-700'>Let's Discover</Text>
          <TouchableOpacity>
            <Image 
              source={require('../assets/images/avatar.png')}
              style={{ height: wp(12), width: wp(12)}}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className='mx-5 mb-4'>
          <View 
            className='flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6'
          >
            <MagnifyingGlassIcon size={20} color={'gray'} strokeWidth={3}/>
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={'gray'}
              className='flex-1 text-base mb-1 pl-1 tracking-wide'
            />
          </View>
        </View>

        {/* categorise */}
        <View className='mb-4' >
          <Categorise/>
        </View>

        {/* sort categories */}
        <View className='mb-4' >
          <SortCategory/>
        </View>

        {/* sort categories */}
        <View className='mb-4' >
          <Destination/>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}