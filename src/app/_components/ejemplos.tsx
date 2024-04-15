export function Belgica() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* quiero agregar 3 subtitulos de ejemplos */}
      {/* primer ejemplo: foto de la camiseta de bélgica + adidas + Tintin*/}
      <div>

        <h4 className="text-4xl md:text-6xl text-center font-bold tracking-tighter leading-tight md:pr-8">
          bélgica + adidas + tintin</h4>
        {/* quiero agregar dos imagenes en dos columnas en una fila  */}
        {/* public/assets/tintin.png y public/assets/belgium.png */}
        <div className="flex-row md:flex-row flex items-center md:justify-between mt-16 mb-16 md:my-16">
          <img src="/assets/belgium.png" alt="Belgium" className="w-1/2" />
          <img src="/assets/tintin.png" alt="Tintin" className="w-1/2" />
        </div>
      </div>
    </section>
  )
}