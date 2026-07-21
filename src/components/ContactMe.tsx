import Image from "next/image";

export default function ContactMe() {
  return (
    <section
      id="information"
      className="bg-local-lightgrey text-local-navy w-full h-full flex flex-col md:flex-row justify-center items-center"
    >
      <div className="flex flex-col gap-8 w-4/5 rounded-2xl bg-local-brown text-local-lightgrey py-8 px-8 text-center">
        <h2 className="text-4xl font-patrick">Agendamos una cita?</h2>
        <div className="flex">
          <div className="text-center items-center flex flex-col gap-4 flex-1">
            <h3 className="text-2xl font-patrick">Contactos:</h3>
            <ul className="flex flex-col gap-8 h-full">
              <li className="flex gap-4 items-center">
                <Image
                  alt="Phone Number"
                  src="/assets/phone.svg"
                  width={24}
                  height={24}
                  className="text-local-lightgrey"
                />
                <p className="">+502 3611 6891</p>
              </li>
              <li className="flex gap-4 items-center">
                <Image
                  alt="Email"
                  src="/assets/email.svg"
                  width={24}
                  height={24}
                />
                <p>psicologalibnigonzalez@gmail.com</p>
              </li>
              <li className="flex gap-4 items-center">
                <Image
                  alt="Whatsapp"
                  src="/assets/whatsapp.svg"
                  width={24}
                  height={24}
                />
                <p className="">+502 3611 6981</p>
              </li>
              <li className="flex gap-4 items-center">
                <Image
                  alt="Instagram"
                  src="/assets/instagram.svg"
                  width={24}
                  height={24}
                />
                <p className="">@psicologa_libni</p>
              </li>
              <li className="flex gap-4 items-center">
                <Image
                  alt="Tik Tok"
                  src="/assets/tiktok.svg"
                  width={24}
                  height={24}
                />
                <p className="">@psicologa_libni</p>
              </li>
              <li className="flex gap-4 items-center">
                <Image
                  alt="Linkedin"
                  src="/assets/linkedin.svg"
                  width={24}
                  height={24}
                />
                <p className="">linkedin.com/in/psicologalibnig/</p>
              </li>
            </ul>
          </div>
          <div className="text-start flex flex-col gap-4 flex-1">
            <h3 className="text-2xl font-patrick text-center">Horários:</h3>
            <ul>
              <li>Lunes a Viernes: 16.00-20.00</li>
              <li>Sábado: 10.00-12.00</li>
            </ul>
            <p>Tiempo de terapia de 45 minutos a 1 hora.</p>
            <p>
              Desde cualquier parte y a la comodidad de tu casa, podemos iniciar
              una terapia a distancia.
            </p>
          </div>
          <div className="text-start flex flex-col gap-4 flex-1">
            <h3 className="text-2xl font-patrick text-center">Pagos:</h3>
            <ul>
              <li>Sesión Q150.00</li>
              <li>5 Sesiones Q650.00</li>
              <li>10 Sesiones Q1200.00</li>
            </ul>
            <p>Pago por transferencia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
