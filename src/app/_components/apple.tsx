export function Apple() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between my-64">
      <h4 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        apple
      </h4>
      {/* quiero agregar las imagenes public/assets/revolutionary.png y public/assets/thinkdifferent.png de forma col*/}
      <div className="flex-row md:flex-row flex items-center md:justify-between mt-16 mb-16 md:my-16">
        <img src="/assets/revolutionary.png" alt="Revolutionary" className="w-1/2" />
        <img src="/assets/thinkdifferent.png" alt="Think Different" className="w-1/2" />
      </div>
    </section>
  )
}