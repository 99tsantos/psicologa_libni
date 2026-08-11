export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="w-full lg:h-screen flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-8 px-8 lg:px-0 mt-16 lg:pt-0"
    >
      <div className="w-full h-full flex flex-col justify-evenly lg:items-center gap-8 lg:px-12">
        <h1 className="text-4xl lg:text-8xl text-local-navy font-patrick lg:mb-8">
          ¿Agendamos una cita?
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">Contáctame</h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer">
                <img
                  src="/assets/whatsapp.svg"
                  alt="WhatsApp"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://wa.me/50250995715"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +502 4434 8829
                </a>
              </li>
              <li className="text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer">
                <img
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.instagram.com/psicologa_libni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @psicologa_libni
                </a>
              </li>
              <li className="text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer">
                <img
                  src="/assets/tiktok.svg"
                  alt="TikTok"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.tiktok.com/@lib.psique"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @lib.psique
                </a>
              </li>
              <li className="text-local-navy border-b-2 border-b-transparent hover:border-b-local-navy border-solid py-1 cursor-pointer">
                <img
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                <a
                  href="https://www.linkedin.com/in/psicologalibnig/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @psicologalibnig
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">Horarios</h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-local-navy py-1">
                <img
                  src="/assets/calendar.svg"
                  alt="Calendar"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Lunes a Viernes 16:00 a 20:00 PM
              </li>
              <li className="text-local-navy py-1">
                <img
                  src="/assets/calendar.svg"
                  alt="Calendar"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Sábados 10:00 a 12:00 PM
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl font-patrick">Tarifas</h3>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li className="text-local-navy py-1">
                <img
                  src="/assets/credit-card.svg"
                  alt="Credit Card"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Sesión Individual: Q150.00 / USD 20.00
              </li>
              <li className="text-local-navy py-1">
                <img
                  src="/assets/credit-card.svg"
                  alt="Credit Card"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Paquete de 4 sesiones: Q550.00 / USD 75.00
              </li>
              <li className="text-local-navy py-1">
                <img
                  src="/assets/credit-card.svg"
                  alt="Credit Card"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Paquete de 6 sesiones: Q800.00 / USD 105.00
              </li>
              <li className="text-local-navy py-1">
                <img
                  src="/assets/credit-card.svg"
                  alt="Credit Card"
                  className="inline-block w-6 lg:w-8 h-6 lg:h-8 mr-1"
                />
                Paquete de 10 sesiones: Q1,200.00 / USD 155.00
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl lg:text-4xl text-local-navy font-patrick mb-8 text-center">
          Pago solamente por transferencia.
          <br />
          Tiempo de terapia de 45 min - 1 hr
          <br />
          Desde cualquier parte y a la comodidad de tu casa, podemos iniciar una
          terapia a distancia.
        </h2>
      </div>
    </section>
  );
}
