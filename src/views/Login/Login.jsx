import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import {figure1, figure2, figure3, figure4, figure5, illustration }  from '../../../assets';
import { styles } from './style';

const Login = () => {
  return (
    <View style={styles.ctn_global}>
        <View>
          <View style={styles.ctn_frames}>
            <View>
              <Image source={figure1} style={{ height: 100, width: 100 }}/>
            </View>
            <View>
              <Image source={figure3} style={{ height: 45, width: 45 }}/>
            </View>
          </View>

          <View style={styles.ctn_illustration}>
            <Image source={illustration} style={styles.ctn_img}/>
          </View>

          <View style={styles.ctn_frames}>
            <View>
              <Image source={figure2}/>
            </View>
            <View>
              <Image source={figure5} style={{right: -50}}/>
              <Image source={figure4} style={{ height: 100, width: 100 }}/>
              <Image source={figure3} style={{ height: 45, width: 45, bottom: 30 }}/>
            </View>
          </View>
        </View>
        <LinearGradient 
          colors={['rgba(179, 121, 223, 0.5)', 'rgba(204, 88, 84, 0.08)', 'rgba(179, 121, 223, 0.5)']}
          start={{x: 0, y: 0}}
          end={{x:1, y: 1}}
          locations={[0, .75, 1]}
          style={styles.ctn_login_info}
        >
            <View style={styles.ctn_UI}>
              
            </View>
            <View style={styles.ctn_circles}>
              <LinearGradient
                colors={['rgba(196, 86, 71, 1)', 'rgba(210, 90, 99, 0.3)']}
                start={{ x: 0, y: .5 }}
                end={{ x: 1, y: .5 }}
                style={styles.ellipseContainerOrange}
              />
              <LinearGradient
                colors={['#B379DF', 'rgba(54, 0, 96, 0)']}
                start={{ x: 1, y: .5 }}
                end={{ x: .5, y: 1 }}
                style={styles.ellipseContainerPurpple}
                />
            </View>
            
        </LinearGradient>
    </View>
  );
};

export default Login;