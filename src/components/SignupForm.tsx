import { Link } from 'react-router-dom'
import AuthFormField from './AuthFormField'

export default function SignupForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12">
      <span className="text-sm font-medium text-brand-blue">Create an Account</span>
      <h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
        Welcome to
        <br />
        ByteSpace
      </h1>

      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <AuthFormField label="Full Name" type="text" placeholder="Jamie Davis" />
        <AuthFormField label="Email" type="email" placeholder="designer@example.com" />
        <AuthFormField label="Password" type="password" placeholder="********" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-brand-lime px-8 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-brand-blue hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}
