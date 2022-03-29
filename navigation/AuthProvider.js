import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        //폼 회원가입
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        //폼 로그인
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        //구글 회원가입, 로그인
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log({error});
          }
        },
        //페이스북 회원가입, 로그인
        fbLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'Use cancelled the login process';
            }
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            return auth().signInWithCredential(facebookCredential);
          } catch (error) {
            console.log({error});
          }
        },
        //로그아웃
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
