import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { View, Text, TouchableOpacity } from 'react-native'
import { sortCategoryData } from '../constants/index'
import React,{useState} from 'react'
import { theme } from '../theme';

export default function SliceApp() {
    const [activeSort, setActiveSort] = useState('Popular')
  return (
    <View className='flex-row items-center justify-around mx-4 px-4 space-x-2 bg-neutral-100 rounded-full'>
      {
         sortCategoryData.map((item,index)=>{
            let isActive = item == activeSort;
            let activeButtonClass = isActive? 'bg-white shadow': ''
            return(
              <TouchableOpacity
                onPress={()=> setActiveSort(item)}
                className={`p-3 my-1 px-4 rounded-full ${activeButtonClass}`}
                key={index}
              >
                <Text
                  className='font-semibold'
                  style={{fontSize: wp(4), color: isActive? theme.text : 'rgba(0,0,0,0.6)'}}
                >{item}</Text>
              </TouchableOpacity>
            )
         })
      }
    </View>
  )
}