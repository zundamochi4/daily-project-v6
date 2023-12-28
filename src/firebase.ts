import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
console.log(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();


export const firebaseErrorHandling = (code: string) => {
  switch (code) {
    // case 'auth/cancelled-popup-request':
    // case 'auth/popup-closed-by-user':
    //   return null;
    // case 'auth/email-already-in-use':
    //   if (method.indexOf('signup') !== -1) {
    //     return 'このメールアドレスは使用されています';
    //   } else {
    //     return 'メールアドレスまたはパスワードが違います';
    //   }
    case 'auth/invalid-email':
      return 'メールアドレスの形式が正しくありません';
    case 'auth/internal-error':
      return 'メールアドレスかパスワードが違います';
    case 'auth/too-many-requests':
      return 'ログイン失敗の上限に達しました。お時間をおいてお試しください';
    // case 'auth/user-disabled':
    //   return 'サービスの利用が停止されています';
    // case 'auth/user-not-found':
    //   return 'メールアドレスまたはパスワードが違います';
    // case 'auth/user-mismatch':
    //   if (method === 'signin/popup') {
    //     return '認証されているユーザーと異なるアカウントが選択されました';
    //   } else {
    //     return 'メールアドレスまたはパスワードが違います';
    //   }
    // case 'auth/weak-password':
    //   return 'パスワードは6文字以上にしてください';
    // case 'auth/wrong-password':
    //   return 'メールアドレスまたはパスワードが違います';
    // case 'auth/popup-blocked':
    //   return '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください';
    // case 'auth/operation-not-supported-in-this-environment':
    // case 'auth/auth-domain-config-required':
    // case 'auth/operation-not-allowed':
    // case 'auth/unauthorized-domain':
    //   return '現在この認証方法はご利用頂けません';
    // case 'auth/requires-recent-login':
    //   return '認証の有効期限が切れています';
    default:
      //   if (method.indexOf('signin') !== -1) {
      //     return '認証に失敗しました。しばらく時間をおいて再度お試しください';
      //   } else {
      return 'エラーが発生しました。しばらく時間をおいてお試しください';
    //   }
  }
};
