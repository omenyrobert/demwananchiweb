import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-accent-600">404 Error</p>
      <h1 className="mt-3 text-4xl font-extrabold text-primary-950 sm:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you are looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back To Home
      </Link>
    </div>
  )
}
