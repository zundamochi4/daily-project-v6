import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth, firebaseErrorHandling } from '../firebase';


const Login: React.FC = () => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false, errorText: '' });

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false, errorText: '' });
      await auth.signInWithEmailAndPassword(email, password);
      setStatus({ loading: false, error: false, errorText: '' });
    } catch (error: any) {
      const code = error.code!;
      setStatus({ loading: false, error: true, errorText: firebaseErrorHandling(code) });
      console.log(error);
    }
  };
  if (loggedIn) {
    return <Redirect to="/my/entries"/>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput
              onIonInput={(event) => setEmail(event.detail.value!)}
              type="email"
              label="email" labelPlacement="stacked"
              value={email}
            />
          </IonItem>

          <IonItem>
            <IonInput
              type="password"
              label="password" labelPlacement="stacked"
              value={password}
              onIonInput={(event) => setPassword(event.detail.value!)}
            />
          </IonItem>
        </IonList>
        {status.error && <IonText color="danger">{status.errorText}</IonText>}
        <IonButton expand="block" onClick={handleLogin}
                   disabled={status.loading || email === '' || password === '' || !validateEmail(email) || password.length < 6}>Login</IonButton>
        <IonLoading isOpen={status.loading}/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
