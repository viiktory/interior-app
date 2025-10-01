import ErrorImage from '../../assets/images/404.jpg'
import { PATHS } from '@/paths.ts'
import { ItemLink } from '@/components'

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-cardBg px-4 text-center">
      <img
        src={ErrorImage}
        alt="Error"
        className="mb-8 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
      />
      <h2 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl lg:text-3xl">
        Oops, looks like you&apos;re stranded in the middle of nowhere
      </h2>
      <ItemLink to={PATHS.HOME} label="Go back to home" className="button" />
    </section>
  )
}

export default ErrorPage
