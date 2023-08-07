import Link from "next/link"
const NotFound = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-serif font-semibold text-6xl uppercase text-green-500">
        404 - Not Found
      </h2>
      <p>Oh no! Page you requested could not be found.</p>
      <Link href="/" className="text-green-500 font-bold">
        ↩ return
      </Link>
    </div>
  )
}

export default NotFound
