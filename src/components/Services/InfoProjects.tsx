import { useState, useEffect } from 'react'
import { getProjects, InfoProjectProps } from '@/api/getProjects'
import { Field, PostCard, Button } from '@/components'

const InfoProjects = () => {
  const [projects, setProjects] = useState<InfoProjectProps[]>([])
  const [visible, setVisible] = useState(4)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProjects()
        setProjects(projectData)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }

    fetchData()
  }, [])

  const handleMore = () => {
    setVisible((prev) => prev + visible)
  }

  return (
    <section className=" bg-background mt-16 pt-4 lg:mt-24">
      <div className="container flex-col gap-8">
      <Field
        title="Recent Projects"
        description="With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier "
        className="text-center"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 py-8">
        {projects.slice(0, visible).map(({ id, image, title, text }) => (
          <PostCard key={id} image={image} title={title} description={text} button="Read more" />
        ))}
      </div>
      {visible < projects.length && (
        <div className="text-center pb-12">
          <Button text="Show more" className="button" onClick={handleMore} />
        </div>
      )}
      </div>
    </section>
  )
}

export default InfoProjects
