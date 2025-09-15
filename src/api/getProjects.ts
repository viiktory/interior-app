import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase//config'

export type InfoProjectProps = {
  id: string
  image: string
  title: string
  text: string
}

export const getProjects = async (): Promise<InfoProjectProps[]> => {
  const querySnapshot = await getDocs(collection(db, 'projects'))

  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<InfoProjectProps, 'id'>

    return { id: doc.id, ...data }
  })
}
