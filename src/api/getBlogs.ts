import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.ts'

export type BlogsCardsProps = {
  id: string
  image: string
  image2?: string
  image3?: string
  title: string
  text: string
  description: string
}

export const getBlogs = async (): Promise<BlogsCardsProps[]> => {
  const querySnapshot = await getDocs(collection(db, 'blog'))

  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<BlogsCardsProps, 'id'>

    return { id: doc.id, ...data }
  })
}
