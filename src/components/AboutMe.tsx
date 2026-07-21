export default function AboutMe() {
  return (
    <section
      className="bg-local-lightgrey text-local-navy w-full h-2/3 flex flex-col md:flex-row justify-center items-center gap-4"
      id="aboutme"
    >
      <div className="w-96 h-96 bg-[url('/assets/about-me.png')]"></div>
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl text-local-navy font-patrick">Sobre mí...</h1>
        <p className="text-local-navy">
          Siempre me encuentro en constante aprendizaje, disfruto del proceso de
          entender la funcionalidad de las cosas. Me gusta la ciencia y el arte,
          así que continuamente estoy envuelta en actividades donde se
          involucren.
        </p>
      </div>
    </section>
  );
}
