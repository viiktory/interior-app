import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyChIgDivYEchPGNkkf_7H8cTZH7UXdZsx0',
  authDomain: 'frontend-27510.firebaseapp.com',
  projectId: 'frontend-27510',
  storageBucket: 'frontend-27510.firebasestorage.app',
  messagingSenderId: '54128981792',
  appId: '1:54128981792:web:34849ce3f5722a41be8945',
  measurementId: 'G-KR38FCHWJM',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
