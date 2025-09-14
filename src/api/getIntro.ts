import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.ts'

export type IntroItem = {
  id: string
  title: string
  text: string
}

export const getIntro = async (): Promise<IntroItem[]> => {
  const querySnapshot = await getDocs(collection(db, 'about'))

  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<IntroItem, 'id'>

    return { id: doc.id, ...data }
  })
}
