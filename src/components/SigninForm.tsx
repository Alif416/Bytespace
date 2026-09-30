import { Link } from 'react-router-dom'
import AuthFormField from './AuthFormField'
import { FacebookIcon, GoogleIcon } from './icons/SocialIcons'

export default function SigninForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12">
      <span className="text-sm font-medium text-brand-blue">Sign In</span>
      <h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
        Welcome Back
      </h1>

      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <AuthFormField label="Email" type="email" placeholder="designer@example.com" />
        <AuthFormField label="Password" type="password" placeholder="********" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-brand-lime px-8 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-400">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:border-slate-300"
        >
          <FacebookIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:border-slate-300"
        >
          <GoogleIcon className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        New user?{' '}
        <Link to="/signup" className="font-medium text-brand-blue hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  )
}
