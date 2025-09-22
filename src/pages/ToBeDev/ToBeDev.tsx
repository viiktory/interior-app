import backgroundImage from '../../assets/images/background-1.jpg'
import { PATHS } from '@/paths.ts'
import { Field, ItemLink } from '@/components'

const ToBeDev = () => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-center"
    >
      <Field
        title="Our website is under development!"
        description="We will be celebrating the launch of our new site very soon!"
      />
      <ItemLink to={PATHS.HOME} label="Go to Home" className="button mt-8" />
    </section>
  )
}

export default ToBeDev
