export function Portfolios() {
  return (
    // voy a hacer una seccion con portfolios que me gustan (3)
    // https://bruno-simon.com/
    // https://juliangarnier.com/
    // https://henryheffernan.com/

    <section className="flex-col md:flex-col flex items-center md:justify-between my-64">
      <h4 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        portfolios que me parecen creativos
      </h4>
      <div className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:my-16">
        <a href="https://bruno-simon.com/" target="_blank" className="text-2xl md:text-3xl text-blue-500 underline mb-4 hover:text-blue-700 transition-all duration-500 ease-in-out">
          Bruno Simon
        </a>
        <a href="https://juliangarnier.com/" target="_blank" className="text-2xl md:text-3xl text-blue-500 underline mb-4 hover:text-blue-700 transition-all duration-500 ease-in-out">
          Julian Garnier
        </a>
        <a href="https://henryheffernan.com/" target="_blank" className="text-2xl md:text-3xl text-blue-500 underline mb-4 hover:text-blue-700 transition-all duration-500 ease-in-out">
          Henry Heffernan
        </a>
      </div>
    </section>
  )
}