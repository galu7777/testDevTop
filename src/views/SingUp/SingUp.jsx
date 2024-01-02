import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
import {figure1, figure2, figure3, figure4, figure5, illustration, lg_apple, lg_facebook, lg_google }  from '../../../assets';
import { styles } from './style';

const SingUp = () => {
  const [password, setPassword] = useState('');

  const validatePassword = () => {
    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (passwordRegex.test(password)) {
      // Contraseña válida, mostrar Toast de éxito
      Toast.show('Contraseña válida', Toast.SHORT);
    } else {
      // Contraseña inválida, mostrar Toast de error
      Toast.showWithGravity('Contraseña inválida. Debe incluir al menos una mayúscula, un número, un símbolo y tener al menos 8 caracteres.', Toast.LONG, Toast.CENTER);
    }
  };
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
                      secureTextEntry={true}
                      onChangeText={(val) => setPassword(val)}
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
                      <TouchableOpacity style={styles.btn_touch} onPress={validatePassword}>
                        <Text style={{ color: '#fff', fontWeight: '400' }}>Sing Up</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>

                  <View style={styles.ctn_linear}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#B6B6B6' }} />
                    <Text style={{ color: '#B6B6B6', paddingHorizontal: 10 }}>Or sign up with</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#B6B6B6' }} />
                  </View>

                  <View style={styles.ctn_btn_rs}>
                      <View style={{ paddingRight: '5%', paddingLeft: '4.5%' }}>
                        <LinearGradient
                          colors={['#B6B6B6', '#000']}
                          start={{x: 0, y: 0}}
                          end={{x:1, y: 1}}
                          style={{ borderRadius: 15 }}
                        >
                        <View style={styles.btn_rs}>
                            <TouchableOpacity>
                              <Image source={lg_google} style={{height: 30, width: 30}}/>
                            </TouchableOpacity>
                        </View>
                        </LinearGradient>
                      </View>

                      <View style={{ paddingRight: '5%' }}>
                        <LinearGradient
                          colors={['#B6B6B6', '#000']}
                          start={{x: 0, y: 0}}
                          end={{x:1, y: 1}}
                          style={{ borderRadius: 15 }}
                        >
                          <View style={styles.btn_rs}>
                              <TouchableOpacity>
                                <Image source={lg_apple} style={{height: 30, width: 30}}/>
                              </TouchableOpacity>
                          </View>
                        </LinearGradient>
                      </View>

                      <View style={{ paddingRight: '5%' }}>
                        <LinearGradient
                          colors={['#B6B6B6', '#000']}
                          start={{x: 0, y: 0}}
                          end={{x:1, y: 1}}
                          style={{ borderRadius: 15 }}
                        >
                        <View style={styles.btn_rs}>
                            <TouchableOpacity>
                              <Image source={lg_facebook} style={{height: 30, width: 30}}/>
                            </TouchableOpacity>
                        </View>
                        </LinearGradient>
                      </View>
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

export default SingUp;