export default function Hero() {
  return (
    <section
      className="w-full h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 pt-24 lg:pt-0 p-8 lg:p-0"
      id="hero"
    >
      <div className="bg-slate-500 px-8 xl:px-12 hero-shadow">
        <div
          title="Psicóloga Libní Gonzaléz"
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('/assets/libnigonzalez.png')] bg-cover bg-center"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-local-navy font-patrick">
          Hola! Soy Libní Gonzaléz
        </h1>
        <div className="text-local-navy flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">
            Bienvenidos!
            <br />
            Soy Psicóloga clínica, egresada de la Universidad Mariano Gálvez de
            Guatemala. Con garantía de calidad profesional autorizada por el
            Colegio de Psicólogos de Guatemala. Cuento con formación y
            acreditaciones académicas en Neuropsicología.
          </p>
          <p className="text-md lg:text-2xl">
            En mi consulta encontrarás asesoramiento y terapia psicológica para
            una variedad de dificultades y problemas psicológicos.
          </p>
          <p className="text-md lg:text-2xl">Mi colegiado activo : 14470.</p>
        </div>
      </div>
    </section>
  );
}
