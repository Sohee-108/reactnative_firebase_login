import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => <Button title="Skip" color="#000000" />;
const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);
const Dots = selectd => {
  let backgroundColor;
  backgroundColor = selectd ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fdeb95',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb50',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb10',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
