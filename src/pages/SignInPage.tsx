import { Link } from 'react-router-dom'
import AuthCollage from '../components/AuthCollage'
import AuthDecor from '../components/decor/AuthDecor'
import { LogoMark } from '../components/icons/Icons'
import SigninForm from '../components/SigninForm'

export default function SignInPage() {
  return (
    <section className="bg-grid-lines relative min-h-screen overflow-hidden bg-brand-blue">
      <AuthDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Link to="/" className="inline-block">
          <LogoMark className="h-10 w-10" />
        </Link>

        <div className="mt-10 grid gap-16 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Sign in with ease
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Experience a seamless and efficient sign-in process that grants you instant
              access to a world of knowledge.
            </p>

            <AuthCollage />
          </div>

          <div className="mx-auto w-full max-w-lg">
            <SigninForm />
          </div>
        </div>
      </div>
    </section>
  )
}
