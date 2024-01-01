import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import {figure1, figure2, figure3, figure4, figure5, illustration }  from '../../../assets';
import { styles } from './style';

const Login = () => {
  return (
    <SafeAreaView style={styles.ctn_global}>
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
            <View style={styles.ctn_global_UI}>
              <View style={styles.ctn_UI}>
                <View style={styles.ctn_title}>
                  <Text style={styles.title}>Get Started Free</Text>
                  <Text style={styles.sub_title}>Free Forever. No Credit Card Needed</Text>
                </View>
                <View style={styles.ctn_inputs}>

                  <View style={styles.ctn_input}>
                    <Text style={styles.label}>Email Adress</Text>
                    <TextInput
                      style={styles.input}
                      label="Email Adress"
                      placeholder="yourname@gmail.com"
                      placeholderTextColor="rgba(0,0,0,0.7)"
                      // onChangeText={(val) => changeEmail(val)}
                      // value={email}
                    />
                  </View>

                  <View style={styles.ctn_input}>
                    <Text style={styles.label}>Your Name</Text>
                    <TextInput
                      style={styles.input}
                      label="Your Name"
                      placeholder="@yourname"
                      // placeholderTextColor="rgba(0,0,0,0.7)"
                      // onChangeText={(val) => changeEmail(val)}
                      // value={email}
                    />
                  </View>

                  <View style={styles.ctn_input}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      style={styles.input}
                      label="Password"
                      placeholder="*******"
                      // placeholderTextColor="rgba(0,0,0,0.7)"
                      // onChangeText={(val) => changePassword(val)}
                      // value={password}
                      // secureTextEntry={true}
                    />
                  </View>

                  <View style={styles.ctn_singup}>
                    <LinearGradient
                      colors={['#9C3FE4', '#C65647']}
                      start={{x: 0, y: 0}}
                      end={{x:1, y: 1}}
                      // locations={[0, .75, 1]}
                      style={styles.btn_singup}
                    >
                      <Text style={{ color: '#fff' }}>Sing Up</Text>
                    </LinearGradient>
                  </View>

                  <View style={{ paddingTop: '5%' }}>
                    <Text style={{ color: '#B6B6B6' }}>Or sign up with</Text>
                  </View>       
                  
                </View>
              </View>
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
    </SafeAreaView>
  );
};

export default Login;