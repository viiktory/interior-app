import { useState, useEffect } from 'react'
import { getProjects, InfoProjectProps } from '@/api/getProjects'
import { Field, PostCard, Button, FadeIn, ItemLink } from '@/components'
import { PATHS } from '@/paths.ts'

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
    <section className="mt-16 bg-background pt-4 lg:mt-24">
      <FadeIn viewport={{ once: true, amount: 0.3 }}>
        <div className="container flex-col gap-2 lg:gap-6">
          <Field
            title="Recent Projects"
            description="With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier "
            className="text-center"
          />

          <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 lg:gap-6">
              {projects.slice(0, visible).map(({ id, image, title, text }) => (
                <ItemLink  key={id} to={PATHS.SOON}>
                <PostCard
                  image={image}
                  title={title}
                  description={text}
                  button="Read more"
                />
                </ItemLink>
              ))}
          </div>
          {visible < projects.length && (
            <div className="pb-12 text-center">
              <Button text="Show more" className="button" onClick={handleMore} />
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  )
}

export default InfoProjects
