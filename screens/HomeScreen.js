import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed';

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
  return (
    <SafeAreaView className="mt-10"> 
      <Text className='text-red-500'> 
        <View className='flex-row items-center space-x-2 mx-1'> 
            <Image
                source={{
                    uri:'https://links.papareact.com/wru'
                }}
                className='h-8 w-8 bg-gray-300 rounded-full ml-4 '
            /> 
            <View>
                <Text className='text-xs font-bold text-gray-500'>Order Now</Text>
                <Text className='text-lg font-bold text-black'>
                    Check Location
                    <Icon 
                         name='heartbeat'
                         type='font-awesome'
                    />
                </Text>
            </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen