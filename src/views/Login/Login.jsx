import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {figure1, figure2, figure3, figure4, figure5 }  from '../../../assets';
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

          <View style={{ height: 50}}/>

          <View style={styles.ctn_frames}>
            <View>
              <Image source={figure2}/>
            </View>
            <View>
              <Image source={figure5} style={{right: -30}}/>
              <Image source={figure4} style={{ height: 100, width: 100 }}/>
              <Image source={figure3} style={{ height: 45, width: 45, bottom: 30 }}/>
            </View>
          </View>
        </View>
        <LinearGradient 
          colors={['#B379DF', '#CC5854', '#B379DF']}
          start={{x: 0, y: 0}}
          end={{x:1, y: 1}}
          locations={[0, .75, 1]}
          style={styles.ctn_login_info}
        >
          <Text>Hola</Text>
        </LinearGradient>
    </View>
  );
};

export default Login;