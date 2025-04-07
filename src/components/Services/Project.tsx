import { FC, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'
import BtnItem from '@/assets/btn.svg'

interface ProjectItem {
  id: string
  image: string
  title: string
  text: string
}

const Project: FC = () => {
  const [items, setItems] = useState<ProjectItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'))
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data()
          return {
            id: doc.id,
            image: docData.image,
            title: docData.title,
            text: docData.text,
          } as ProjectItem
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
    <section className="pb-24 ">
      <div className="max-w-container mx-auto px-safe text-center">
        <h1 className="text-title text-primary font-serif mb-4">Recent Projects</h1>
        <p className="text-base text-secondary font-sans max-w-[800px] mx-auto mb-12">
          With tools to make every part of your process more human and a support team excited to
          help you, getting started with us never been easier.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {items.map((item) => (
            <div key={item.id} className="w-full max-w-[500px] bg-white rounded-xl p-6 text-left">
              <img
                className="w-full h-[500px] rounded-tr-[80px] mb-4"
                src={item.image}
                alt={item.title}
              />
              <div className="flex items-center gap-6">
                <div>
                  <h3 className="text-cartTitle text-primary font-serif">{item.title}</h3>
                  <p className="text-base text-secondary font-sans">{item.text}</p>
                </div>
                <img src={BtnItem} alt="btn" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Project
