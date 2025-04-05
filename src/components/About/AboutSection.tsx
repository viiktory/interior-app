import { FC, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'

interface AboutItem {
  id: string
  title: string
  text: string
}

const AboutSection: FC = () => {
  const [items, setItems] = useState<AboutItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'about'))
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data()
          return {
            id: doc.id,
            title: docData.title?.trim() || 'No Title',
            text: docData.text || 'No description available',
          } as AboutItem
        })

        setItems(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="py-24">
      <div className="max-w-container text-center flex flex-wrap justify-center items-center gap-8 mx-auto px-safe">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[30%] min-w-[250px] bg-white rounded-lg shadow-md flex flex-col items-center gap-6 p-8"
          >
            <h3 className="text-cartTitle text-primary font-serif">{item.title || 'No Title'}</h3>
            <p className="text-base text-secondary font-sans">
              {item.text || 'No description available'}
            </p>
            <button className="text-link text-secondary font-sans hover:text-btn-hover">
              View More →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
