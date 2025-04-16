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
        <img src="" alt="" />
        <h3>Title</h3>
        <p>Text</p>
        <button>Btn</button>
      </div>
    </section>
  )
}

export default Project
