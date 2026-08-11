export default function AboutMe() {
  return (
    <section
      className="w-full h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-20 px-8 lg:px-0 pt-8 lg:pt-0"
      id="about-me"
    >
      <div className="flex justify-center items-center about-shadow ">
        <div
          title="Psicóloga Libní Gonzaléz"
          className="w-[16rem] h-[20rem] md:w-[20rem] md:h-[28rem] xl:w-[28rem] xl:h-[36rem] bg-[url('/assets/about-me.png')] bg-cover bg-center"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-8xl text-local-navy font-patrick">
          Sobre mí
        </h1>
        <div className="text-local-navy flex flex-col justify-normal gap-2 lg:gap-4">
          <p className="text-md lg:text-2xl">
            Me considero una persona en constante búsqueda de conocimiento,
            apasionada por el proceso de comprender el funcionamiento de
            diversas disciplinas. Tengo un profundo interés en la ciencia y el
            arte, lo que me lleva a involucrarme regularmente en actividades que
            integran ambos campos.
          </p>
          <p className="text-md lg:text-2xl">
            Mi principal interés en el ámbito de la psicología ha sido siempre
            la comprensión profunda y el tratamiento eficaz de los diversos
            problemas y trastornos psicológicos.
          </p>
        </div>
      </div>
    </section>
  );
}
