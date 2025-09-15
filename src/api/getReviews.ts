import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.ts'

export type ReviewsProps = {
  id: string
  image: string
  name: string
  city: string
  review: string
}

export const getReviews = async (): Promise<ReviewsProps[]> => {
  const querySnapshot = await getDocs(collection(db, 'reviews'))

  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<ReviewsProps, 'id'>

    return { id: doc.id, ...data }
  })
}
