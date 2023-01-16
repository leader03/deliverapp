import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed';
import Category from '../components/Category';

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
  return (
    <SafeAreaView className="pt-10 bg-white"> 
     
        <View className='flex-row items-center space-x-2 mx-1 pb-3 pr-2'> 
            <Image
                source={{
                    uri:'https://links.papareact.com/wru'
                }}
                className='h-8 w-8 bg-gray-300 rounded-full ml-4 '
            /> 
            <View className='flex-1'>
                <Text className='text-xs font-bold text-gray-400'>Order Now</Text>
                <Text className="text-xl font-bold flex space-x-1">
                    Check Location
                    <Icon 
                         name='down'
                         type='antdesign'
                         color='#00CCBB'
                         size={15} 
                    />
                </Text>
            </View>
               <Icon
                  name='user'
                  type='evilicon'
                  color='#00CCBB'
                  size={35}
               />
        </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
          <View className='flex-row space-x-2 items-center flex-1 bg-gray-200 p-1 px-3 rounded'>
          <Icon
                  name='search'
                  type='font-awesome'
                  color='gray'
                  size={20}
           />
           <TextInput 
                  placeholder='Search'  
                  keyboardType='default'
           />
          </View>
          <Icon
                  name='sliders'
                  type='feather'
                  color='#00CCBB'
                  size={20}
           />
        </View>

        <ScrollView className='bg-gray-100'>
          <Category />
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen