
import { IconEye, IconTargetArrow, IconHeartHandshake } from "@tabler/icons-react"
import { ShowAnimantion } from '../../components'
export const AboutUsSection = () => {
    return (
        <>
            <section className="section" id="about-us">

                <ShowAnimantion>
                    <h2 className="mb-10 text-center text-navy">
                        Sobre Nosotros
                    </h2>
                </ShowAnimantion>






                <article className="grid items-center content-center justify-center grid-cols-1 gap-4 lg:grid-cols-2">

                    <ShowAnimantion>
                        <img
                            src="/images/escuela_1.jpg"
                            alt="escuela"
                            className="block rounded-3xl"
                        />
                    </ShowAnimantion>


                    <section>
                        <ShowAnimantion>
                            <article className="w-full join join-vertical">

                                <article className="bg-white collapse collapse-arrow join-item">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="flex items-center gap-2 text-xl font-medium collapse-title text-blueCustom">
                                        Misión <IconTargetArrow />
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-sm md:text-base">
                                            Nuestra misión en el Colegio es proporcionar una educación de calidad que inspire a nuestros estudiantes a alcanzar su máximo potencial académico, personal y social. Nos comprometemos a crear un ambiente de aprendizaje seguro, inclusivo y estimulante donde cada niño se sienta valorado y apoyado en su viaje educativo. Buscamos fomentar el desarrollo integral de nuestros estudiantes, promoviendo la excelencia académica, el liderazgo, la creatividad y el respeto por los demás y por el mundo que nos rodea.
                                        </p>
                                    </div>
                                </article>

                                <article className="bg-white collapse collapse-arrow join-item">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="flex items-center gap-2 text-xl font-medium collapse-title text-blueCustom">
                                        Visión <IconEye />
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-sm md:text-base">

                                            Nuestra visión en el Colegio es ser reconocidos como una institución líder en la educación, donde los estudiantes se conviertan en ciudadanos globales comprometidos, capaces de enfrentar los desafíos del siglo XXI con confianza, empatía y resiliencia. Nos esforzamos por cultivar un entorno de aprendizaje innovador y colaborativo que fomente la curiosidad, el pensamiento crítico y el amor por el aprendizaje a lo largo de toda la vida.
                                        </p>
                                    </div>
                                </article>

                                <article className="bg-white collapse collapse-arrow join-item">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="flex items-center gap-2 text-xl font-medium collapse-title text-blueCustom">
                                        Valores <IconHeartHandshake />
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-sm md:text-base">
                                            Excelencia, Integridad, Inclusión, Colaboración y Resiliencia
                                        </p>
                                    </div>
                                </article>

                            </article>
                        </ShowAnimantion>

                    </section>
                </article>

            </section>
        </>
    )
}
