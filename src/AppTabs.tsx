import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { Redirect, Route } from 'react-router-dom';
import { home, settings } from 'ionicons/icons';
import Entry from './pages/Entry';
import { useAuth } from './auth';

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login"/>;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/my/entries" component={Home} exact/>
        <Route path="/my/entries/:id" component={Entry} exact/>
        <Route path="/my/settings" component={Settings} exact/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/entries">
          <IonIcon icon={home}/>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settings}/>
          <IonLabel>settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
