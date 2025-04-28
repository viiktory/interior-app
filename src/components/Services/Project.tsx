import { FC } from 'react'

interface Project {
  id: string
  image: string
  title: string
  text: string
}

const Project: FC = () => {
  return (
    <section>
      <div>
        <button>← Back</button>
        <img src="" alt="" />
        <h3>Title</h3>
        <p>Text</p>
      </div>
    </section>
  )
}

export default Project
