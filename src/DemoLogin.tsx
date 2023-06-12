import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1024873634627-59utv4o6miktuc5np5r6p3he8pqtgjv2.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true,
});

type Props = {};

const DemoLogin = (props: Props) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View>
      <Text>DemoLogin</Text>

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn()}
        disabled={this.state.isSigninInProgress}
      />
      {this.state.loaded ? (
        <View>
          <Text>{this.state.userGoogleInfo.user.name}</Text>
          <Text>{this.state.userGoogleInfo.user.email}</Text>
        </View>
      ) : (
        <Text>not sign</Text>
      )}
    </View>
  );
};

export default DemoLogin;

const styles = StyleSheet.create({});
