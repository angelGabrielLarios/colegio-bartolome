import { ShowAnimantion } from "../../components"



export const RegistrationsSections = () => {
    return (
        <>
            <section className="section" id="registrations">
                <ShowAnimantion>
                    <h2 className="mb-10 text-center text-navy">
                        Inscripciones
                    </h2>
                </ShowAnimantion>


                <ShowAnimantion>
                    <h3 className="mb-10 text-lg text-center md:text-2xl text-redCustom">
                        ¿Qué papeles necesito para inscribirme?
                    </h3>
                </ShowAnimantion>



                <ShowAnimantion>
                    <article className="w-full mx-auto md:w-[40rem] bg-white rounded-xl p-6">
                        <ul className="text-sm md:text-base">
                            <li className="py-2">Solicitud de ingreso</li>
                            <li className="py-2">Copia de Acta de nacimiento</li>
                            <li className="py-2">Copia de comprobante de domicilio</li>
                            <li className="py-2">Copia de CURP</li>
                            <li className="py-2">2 fotografías tamaño infantil a color</li>
                            <li className="py-2">Calificación del grado anterior (primaria-secundaria)</li>
                            <li className="py-2">Carta de buena conducta (primaria-secundaria)</li>
                            <li className="py-2">Copia de la última calificación</li>
                        </ul>
                    </article>
                </ShowAnimantion>



            </section>
        </>
    )
}
