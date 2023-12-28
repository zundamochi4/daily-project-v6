import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { entries } from '../data';

type RouteParams = {
  id: string
}

const Entry: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const entry = entries.find(entry => entry.id === id);
  if (!entry) {
    throw new Error(`No such entry: ${id}`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry.description}
      </IonContent>
    </IonPage>
  );
};

export default Entry;
