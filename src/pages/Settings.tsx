import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { auth } from '../firebase';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="medium" expand="block" onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
