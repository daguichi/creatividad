// tengo que hacer una componente de que es con titulo h2 para explicar que es la creatividad

export function QueEs() {
  return (
    <section className="flex-col md:flex-col flex md:justify-between my-64">
      <h3 className="text-lg md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        qué es?
      </h3>
      <h4 className=" px-24 text-xl font-bold tracking-tighter leading-tight md:pr-8">
        (para mi)
      </h4>
      {/* Crear algo nuevo a partir de lo que ya conocemos */}
      {/* Mezclar ideas */}
      {/* Ingrediente que nos lleva a la innovación */}
      {/* Libertad */}
      <div className="py-12">

        <p className="text-2xl md:text-3xl px-32 py-8 text-right hover:text-4xl transition-all duration-500 ease-in-out">
          <u>crear</u> algo nuevo a partir de lo que ya <u>conocemos</u>
        </p>
        <p className="text-2xl md:text-3xl px-32 py-8 hover:text-4xl transition-all duration-500 ease-in-out">
          <u>mezclar</u> ideas
        </p>
        <p className="text-2xl md:text-3xl px-32 py-8 text-right hover:text-4xl transition-all duration-500 ease-in-out">
          <u>ingrediente</u> que nos lleva a la <u>innovación</u>
        </p>
        <p className="text-2xl md:text-3xl px-32 py-8 hover:text-4xl transition-all duration-500 ease-in-out">
          <u>libertad</u>
        </p>
      </div>



      {/* Pensamiento lateral: poco común */}
      {/* Pensamiento divergente: multiples soluciones */}
      {/* Disrupción */}
    </section>
  );
}