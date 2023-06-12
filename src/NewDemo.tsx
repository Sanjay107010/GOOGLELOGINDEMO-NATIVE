import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// GoogleSignin.configure({
//   androidClientId:
//     '1024873634627-c558qpgpt5f1hbrmq8oc9gh0k51i3j3r.apps.googleusercontent.com',
//   // '1024873634627-59utv4o6miktuc5np5r6p3he8pqtgjv2.apps.googleusercontent.com',
//   offlineAccess: true,
// });

type Props = {};

const NewDemo = (props: Props) => {
  const [userInfo22, setUserInfo22] = useState([]);
  // const [sate , setState] = useEffect([]);
  //   const signIn = async () => {
  //     try {
  //       console.log('first::::::::::::kkkk');

  //       GoogleSignin.hasPlayServices().then(hasPlayService => {
  //         if (hasPlayService) {
  //           GoogleSignin.signIn()
  //             .then(userInfo => {
  //               // console.log(JSON.stringify(userInfo.user.email));
  //               // console.log('uInfo : ', uInfo);
  //               console.log('UserDataaaaa', userInfo);
  //               console.log('UserDataaaaa Idd', userInfo?.user?.id);
  //             })
  //             .catch(e => {
  //               console.log('ERROR IS 1: ', e);
  //             });
  //         }
  //       });
  //       // TODO: Handle signed in user
  //     } .catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //         console.log('first cancel', error.code);
  //         // user cancelled the login flow
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //         // operation (e.g. sign in) is in progress already
  //         console.log('first in progress', error.code);
  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //         console.log(' not Available'.error.code);
  //         // play services not available or outdated
  //       } else {
  //         // some other error happened
  //         console.log(
  //           '::::::::::::::::::::::::: some other error:::',
  //           error.code,
  //         );
  //       }
  //     }

  const onSignIn = async () => {
    GoogleSignin.configure({
      androidClientId:
        '1024873634627-c558qpgpt5f1hbrmq8oc9gh0k51i3j3r.apps.googleusercontent.com',
    });

    GoogleSignin.hasPlayServices()
      .then(hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(
              userInfo =>
                // console.log(JSON.stringify(userInfo.user.email));
                // console.log('uInfo : ', uInfo);

                setUserInfo22(userInfo),

              //console.log('UserDataaaaa', userInfo);
              //  console.log('UserDataaaaa', userInfo22);

              //  console.log('UserDataaaaa Idd', userInfo?.user?.id);
              //  console.log('first:::::::', userInfo22?.user?.email);
            )
            .catch(e => {
              console.log('ERROR IS 1: ', e);
            });
        }
      })
      .catch(e => {
        console.log('ERROR IS: ' + JSON.stringify(e));
      });
  };
  console.log('user date sate', userInfo22);
  return (
    <View>
      {/* <Text>NewDemo</Text> */}
      <GoogleSigninButton onPress={onSignIn} />
    </View>
  );
};
export default NewDemo;

const styles = StyleSheet.create({});
