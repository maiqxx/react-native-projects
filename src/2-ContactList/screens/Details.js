import { View, Text, Image} from 'react-native'
import React, { Component } from 'react'


const Details = ({route}) => {
    const {img, name, phone, email} = route.params;

  return (
    <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
        {/* //<Image source={route.params.img} /> */}


        </View>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{route.params.name}</Text>
      <Text style={{fontSize: 30}}>{route.params.phone}</Text>
      <Text style={{fontSize: 25}}>{route.params.email}</Text>
    </View>
  )
}

export default Details