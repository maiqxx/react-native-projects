import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingPages = () => {
  return (
    <Onboarding
    pages={[
        {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-screens/onboardingimg1.png')} />,
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-screens/onboardingimg2.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-screens/onboardingimg3.png')} />,
            title: 'Onboarding 3',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        
        
    ]}
    />
  )
}

export default OnboardingPages

const styles = StyleSheet.create({})