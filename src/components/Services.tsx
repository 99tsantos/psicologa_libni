export default function Services() {
  return (
    <section
      id="services"
      className="w-full lg:h-screen flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-8 px-8 lg:px-0 pt-16 lg:pt-0"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-local-navy font-patrick">
          Servicios
        </h1>
        <h3 className="text-xl lg:text-3xl font-bold text-local-navy">
          Asesoramiento y Terapia psicológica - Virtual
        </h3>
        <p className="text-lg lg:text-2xl text-local-navy">
          Con el objetivo de ayudarte a superar tus problemas y lograr una vida
          más plena y satisfactoria, realizaremos un tratamiento personalizado y
          adaptado a tus necesidades, partiendo siempre de una base de
          confianza, respeto y confidencialidad.
        </p>
        <p className="text-lg lg:text-2xl text-local-navy">
          En mi práctica profesional empleo una metodología integradora, lo cual
          permite maximizar la eficacia de la terapia y realizar una
          intervención adaptada a las necesidades y características particulares
          de cada caso.
        </p>
      </div>
      <div className="bg-slate-500 px-8 xl:px-12 services-shadow">
        <div
          title="Servicios"
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('https://psychdegreestarter.com/wp-content/uploads/sites/8/2025/08/archereduas_Modern_therapists_office_with_symbolic_objects_an_A_64d0ffb0-8d12-4e92-afd7-2c721071a3f3-1024x408.jpg')] bg-cover bg-center"
        />
      </div>
    </section>
  );
}
