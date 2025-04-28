import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const LoginForm = () => {
  return (
    <form className="mx-auto mt-8 max-w-sm rounded border p-6 shadow-md">
      <h1 className="mb-6 text-center text-2xl font-bold">Hey, hello! Welcome back!</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="at least 8 characters"
            className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-right">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forget password?
          </Link>
        </div>
        <div className="flex items-center justify-center gap-1 text-sm">
          <p>Don&apos;t have an account?</p>
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
        <Button text="Sign In" type="submit" />
      </div>
    </form>
  )
}

export default LoginForm
