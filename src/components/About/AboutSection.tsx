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
    <section className="py-12 px-safe">
      <div className="container max-w-container">
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[30%] min-w-[250px] bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-[24px] font-serif text-primary">{item.title || 'No Title'}</h3>
              <p className="text-secondary text-[18px] font-sans">
                {item.text || 'No description available'}
              </p>
              <button className="text-secondary text-[18px] font-sans">View More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
