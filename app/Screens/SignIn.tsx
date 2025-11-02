import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
let BACKEND_URL: string | undefined;
let GOOGLE_OAUTH_CLIENT_ID: string | undefined;
try {

  const env = require('@env');
  BACKEND_URL = env.BACKEND_URL;
  GOOGLE_OAUTH_CLIENT_ID = env.GOOGLE_OAUTH_CLIENT_ID;
} catch (e) {

  BACKEND_URL = process.env.BACKEND_URL;
  GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
}

// --- Icon Placeholders ---
const MailIcon = () => <Text style={styles.icon}>📧</Text>;
const LockIcon = () => <Text style={styles.icon}>🔒</Text>;
const VisibilityOffIcon = () => <Text style={styles.icon}>👁️</Text>;
const WaterDropIcon = () => (
  <Text style={[styles.icon, styles.waterDropIcon]}>💧</Text>
);


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // useEffect(()=>{

  

  //   GoogleSignin.configure({
  //     webClientId:process.env.GOOGLE_OAUTH_CLIENT_ID
  //   })
  // },[])
  useEffect(()=>{
    test();
  },[])

  const test=async ()=>{
    try{
      const target = BACKEND_URL ?? 'http://localhost:3000';
      const response=await fetch(target);
      const data=await response.text();
      console.log("testing backend connecting success",data);

    }catch(err){
      console.log("testing backend connecting failed",err, BACKEND_URL ?? '(undefined)', GOOGLE_OAUTH_CLIENT_ID ?? '(undefined)');
    }
  }

  const handleGoogleSignIn=async ()=>{
    // await GoogleSig
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Set status bar to dark-content for light mode */}
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <WaterDropIcon />
          </View>

          <View style={styles.textCenter}>
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subheading}>
              A refreshing start to better hydration.
            </Text>
          </View>

          <View style={styles.formContainer}>
            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={[styles.inputWrapper, styles.inputWrapperRow]}>
                <View
                  style={[styles.iconContainer, styles.iconContainerLeft]}>
                  <MailIcon />
                </View>
                <TextInput
                  style={[styles.input, styles.inputLeftIcon]}
                  placeholder="Enter your email"
                  placeholderTextColor={styles.placeholder.color}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={[styles.inputWrapper, styles.inputWrapperRow]}>
                <View
                  style={[styles.iconContainer, styles.iconContainerLeft]}>
                  <LockIcon />
                </View>
                <TextInput
                  style={[styles.input, styles.inputMiddle]}
                  placeholder="Enter your password"
                  placeholderTextColor={styles.placeholder.color}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  style={[styles.iconContainer, styles.iconContainerRight]}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <VisibilityOffIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
            <Text style={[styles.buttonText, styles.buttonTextPrimary]}>
              Sign In
            </Text>
          </TouchableOpacity>

          {/* OR Separator */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Continue with Google Button */}
          <TouchableOpacity
            
            onPress={handleGoogleSignIn}
            style={[styles.button, styles.buttonSecondary]}
            >
            <Image
              style={styles.googleLogo}
              source={require("../../assets/images/GoogleIcon.png")}
            />
            <Text
              style={[styles.buttonText, styles.buttonTextSecondary]}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?{' '}
              <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const colors = {
  primary: "skyblue",
  backgroundLight: '#daf1fd',
  headingLight: '#37474F',
  bodyLight: '#78909C',
  grayLight: '#E5E7EB',
  white: '#FFFFFF',
  black: '#000000',
};

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    marginBottom: 10,
  },
  textCenter: {
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    marginVertical: 24,
  },


  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    fontWeight: '600',
    color: colors.headingLight,
  },
  subheading: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: colors.bodyLight,
    paddingTop: 4,
  },
  label: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    color: colors.bodyLight,
    paddingBottom: 8,
  },
  signupText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: colors.bodyLight,
  },
  signupLink: {
    fontWeight: '700',
    color: colors.primary,
    textDecorationLine: 'underline',
  },

 
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  inputWrapper: {
    backgroundColor: colors.white,
    borderColor: colors.grayLight,
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputWrapperRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: colors.bodyLight,
  },
  waterDropIcon: {
    fontSize: 64,
    color: colors.primary,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.grayLight,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 56,
  },
  iconContainerLeft: {
    borderRightWidth: 0,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  iconContainerRight: {
    borderLeftWidth: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: colors.headingLight,
    backgroundColor: colors.white,
    borderColor: colors.grayLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  inputLeftIcon: {
    borderLeftWidth: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputMiddle: {
    
  },
  placeholder: {
    color: '#A1A1AA',
  },

  button: {
    height: 56,
    borderRadius: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',

  
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonTextPrimary: {
    color: colors.headingLight,
  },
  buttonSecondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  buttonTextSecondary: {
    color: colors.headingLight,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

 
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayLight,
  },
  separatorText: {
    paddingHorizontal: 16,
    color: colors.bodyLight,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'NunitoSans-SemiBold',
  },

 
  signupContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
});

export default SignIn;
