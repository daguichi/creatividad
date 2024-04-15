import VideoPlayer from "./VideoPlayer";


export function Tachero() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* quiero agregar 3 subtitulos de ejemplos */}
      {/* primer ejemplo: foto de la camiseta de bélgica + adidas + Tintin*/}
      <div>

        <h4 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          el tachero campeón del mundo
        </h4>

        {/* agregar video public/assets/tachero.mp4 */}

        <div className="flex justify-center items-center my-16">
          <video width="320" height="240" controls>
            <source src="/assets/tachero.mp4" type="video/mp4" />
          </video>
          {/* <VideoPlayer  /> */}
        </div>
      </div>
    </section>

  )
}