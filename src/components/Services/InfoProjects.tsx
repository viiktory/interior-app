import { useState, useEffect } from 'react'
import { getProjects, InfoProjectProps } from '@/api/getProjects'
import { Field, PostCard } from '@/components'

const InfoProjects = () => {
  const [projects, setProjects] = useState<InfoProjectProps[]>([])

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

  return (
    <section className="container my-16 flex-col gap-8 lg:my-24">
      <Field
        title="Recent Projects"
        description="With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier "
        className="text-center"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map(({ id, image, title, text }) => (
          <PostCard key={id} image={image} title={title} description={text} button="Read more" />
        ))}
      </div>
    </section>
  )
}

export default InfoProjects
