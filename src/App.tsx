import React, { useEffect, useState } from 'react';
import { IonApp, IonLoading, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import NotFound from './pages/NotFound';
import { auth } from './firebase';

const App: React.FC = () => {
  const [authState, setAuthState] = useState({ loading: true, loggedIn: false });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('onAuthStateChanged: ', user);
      setAuthState({ loading: false, loggedIn: Boolean(user) });
    });
  }, []);

  console.log(`rendering App with loggedIn:`, authState);
  if (authState.loading) {
    return <IonLoading isOpen/>;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/my">
              <AppTabs/>
            </Route>
            <Redirect exact path="/" to="/my/entries"/>
            <Route>
              <NotFound/>
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
