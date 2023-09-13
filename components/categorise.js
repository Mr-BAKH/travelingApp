import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import {theme} from '../theme/index'
import { categoriesData } from '../constants/index'
import React from 'react'

export default function categorise() {
  return (
    <View className='space-y-5'>
      <View className='mx-5 flex-row justify-between items-center'>
        <Text style={{fontSize: wp(4)}} className='font-semibold text-neutral-700' >Categorise</Text>
        <TouchableOpacity>
          <Text style={{fontSize: wp(4), color:theme.text}}></Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
      >
        {
          categoriesData.map((item,index)=>{
            return(
              <TouchableOpacity
                key={index}
                className='items-center space-y-2'
              >
                <Image
                  source={item.image}
                  className='rounded-3xl'
                  style={{width:wp(20), height:wp(19)}}
                />
                <Text
                  className='text-neutral-700 font-medium'
                  style={{fontSize: wp(3)}}
                >{item.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}