import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "farmacia-42cf5", appId: "1:293431567931:web:873cfa43abcd81e3e89e1e", storageBucket: "farmacia-42cf5.firebasestorage.app", apiKey: "AIzaSyCErsJwwOwMFwWlUZRZITSiE36EIauDdWc", authDomain: "farmacia-42cf5.firebaseapp.com", messagingSenderId: "293431567931", measurementId: "G-29QL28HW6S" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging())]
};
