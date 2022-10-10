
export default function Partners() {
  return (
    <div className="bg-green-50">
      <div className="mx-auto max-w-2xl py-12 px-4 text-center sm:py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-primary sm:text-4xl">
          Our  Trusted Partners
        </h2>
        <p className="my-8 text-lg leading-6 text-green-primary">
          We’ve created bonds with companies that believe in Tarkin’s goals.
        </p>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-3 lg:grid-cols-3">
          <img src="/partners/afex.png" alt="Afex Logo" />
          <img src="/partners/rana.png" alt="Rana Logo" />
          <img src="/partners/sterling.png" alt="Sterling Logo" />
        </div>
      </div>
    </div>
  )
}
