import { useState } from "react";
import { CardCourse } from "../components";
import { courses } from "../constants";
import { motion } from 'framer-motion'

import { IconPhone, IconMail, IconBrandWhatsapp, IconBrandFacebook, IconMapPin } from '@tabler/icons-react'
import Lightbox, { SlideImage } from "yet-another-react-lightbox";



export const HomeView = () => {
    const [index, setIndex] = useState(-1)


    const [isLoadMapGoogle, setIsLoadMapGoogle] = useState(true)

    const handleMapLoad = () => {
        setIsLoadMapGoogle(false)
    };


    const photos: SlideImage[] = [
        { src: "/public/images/children_1.jpeg" },
        { src: "/public/images/children_2.jpg" },
        { src: "/public/images/children_3.jpg" },
        { src: "/public/images/children_4.jpg" },
        { src: "/public/images/children_5.jpeg" },
        { src: "/public/images/children_6.jpeg" },
    ];


    return (
        <>
            <main id="home" className={`section min-h-screen`}>


                <article className="text-center space-y-5">


                    <img
                        src="/public/images/logo_bartolome_de_medina-bg.webp"
                        alt="logo del Colegio Bartolomé de Medina"
                        className="block mx-auto animate-fade-right animate-duration-[2000ms]  w-20 md:w-[10rem]"
                    />

                    <h1 className="text-3xl md:text-4xl lg:text-6xl lg:py-2 text-gradient animate-fade-right animate-duration-[2000ms] ">
                        Colegio Bartolomé de Medina

                    </h1>


                    <p className={` text-sm md:text-base leading-relaxed animate-fade-right animate-duration-[2000ms] w-full mx-auto md:w-[48rem]`}>
                        Bienvenido al <span className="font-bold text-navy">Colegio Bartolomé de Medina</span>, donde cada niño encuentra un espacio para crecer, aprender y alcanzar su máximo potencial. Nuestra institución está dedicada a brindar una educación integral y de calidad que combine la excelencia académica con el desarrollo personal y emocional de nuestros estudiantes.
                    </p>



                </article>



            </ main>

            <section className="section" id="about-us">
                <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-navy  text-center mb-10">
                        Sobre Nosotros
                    </h2>

                </motion.div >




                <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center justify-center items-center">

                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                    >
                        <img
                            src="/public/images/escuela_1.jpg"
                            alt="escuela"
                            className="block rounded-3xl"
                        />
                    </motion.div>


                    <section>
                        <motion.div
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeIn' }}
                        >
                            <article className="join join-vertical w-full">

                                <article className="collapse collapse-arrow join-item bg-white">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium text-blueCustom">
                                        Misión
                                    </div>
                                    <div className="collapse-content">
                                        <p>
                                            Nuestra misión en el Colegio es proporcionar una educación de calidad que inspire a nuestros estudiantes a alcanzar su máximo potencial académico, personal y social. Nos comprometemos a crear un ambiente de aprendizaje seguro, inclusivo y estimulante donde cada niño se sienta valorado y apoyado en su viaje educativo. Buscamos fomentar el desarrollo integral de nuestros estudiantes, promoviendo la excelencia académica, el liderazgo, la creatividad y el respeto por los demás y por el mundo que nos rodea.
                                        </p>
                                    </div>
                                </article>

                                <article className="collapse collapse-arrow join-item bg-white">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium text-blueCustom">
                                        Visión
                                    </div>
                                    <div className="collapse-content">
                                        <p>

                                            Nuestra visión en el Colegio es ser reconocidos como una institución líder en la educación, donde los estudiantes se conviertan en ciudadanos globales comprometidos, capaces de enfrentar los desafíos del siglo XXI con confianza, empatía y resiliencia. Nos esforzamos por cultivar un entorno de aprendizaje innovador y colaborativo que fomente la curiosidad, el pensamiento crítico y el amor por el aprendizaje a lo largo de toda la vida.
                                        </p>
                                    </div>
                                </article>

                                <article className="collapse collapse-arrow join-item bg-white">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium text-blueCustom">
                                        Valores
                                    </div>
                                    <div className="collapse-content">
                                        <p>
                                            Excelencia, Integridad, Inclusión, Colaboración y Resiliencia
                                        </p>
                                    </div>
                                </article>

                            </article>
                        </motion.div>

                    </section>
                </article>

            </section>


            <section className="section" id="courses">
                <motion.div>

                    <h2 className="text-navy text-center mb-10">
                        Talleres
                    </h2>
                </motion.div>



                <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                        courses.map((course, index) => {
                            return (
                                <motion.div
                                    key={index}
                                >
                                    <CardCourse

                                        name={course.name}
                                        IconElement={course.IconElement}
                                    />
                                </motion.div>
                            );
                        })
                    }
                </article>

            </section>

            <section className="section" id="contact">
                <h2 className="text-navy text-center mb-10">
                    Contactanos
                </h2>


                <article className="grid lg:grid-cols-2 gap-4">

                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.361121548013!2d-98.65224279784425!3d20.65148803213503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d12531b05c7613%3A0x899ddebce2ce7de!2sC.%20Margarita%20Maza%20de%20Ju%C3%A1rez%2C%2043204%20Zacualtip%C3%A1n%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1707417625015!5m2!1ses!2smx"
                            className="block w-full h-[400px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            onLoad={handleMapLoad}
                        />

                        {
                            isLoadMapGoogle ?
                                <div>
                                    <span className="loading loading-ball loading-lg"></span>
                                </div>
                                : null
                        }


                    </div>


                    <motion.div>
                        <div className="bg-white rounded-3xl p-8 flex flex-col justify-center">

                            <ul>
                                <li className="py-2">

                                    <p className="">
                                        <IconMapPin className="text-blackCustom inline mr-2" />
                                        <span className="font-bold">Ubicacion:{" "}</span> C. Margarita Maza de Juárez, Poza de Chapultepec, 43200 Zacualtipán, Hgo.
                                    </p>



                                </li>
                                <li className="py-2">
                                    <a className="flex gap-2 items-center" href="tel:+1234567890" target="_blank">
                                        <IconPhone className="text-red-600" />
                                        771 271 0797

                                    </a>
                                </li>
                                <li className="py-2">
                                    <a className="flex gap-2 items-center" href="tel:+1234567890" target="_blank">
                                        <IconBrandWhatsapp className="text-green-500" />
                                        771 271 0797

                                    </a>
                                </li>
                                <li >
                                    <a className="flex gap-2 items-center" href="mailto:lariosacostaa@gmail.com" target="_blank">
                                        <IconMail className="text-yellow-400" />
                                        lariosacostaa@gmail.com

                                    </a>
                                </li>
                                <li className="py-2">
                                    <a className="flex gap-2 items-center" href="" target="_blank">
                                        <IconBrandFacebook className="text-blue-700" />
                                        Colegio Bartolome de Medina

                                    </a>
                                </li>
                            </ul>

                        </div>
                    </motion.div>
                </article>

            </section>

            <section className="section" id="gallery">
                <motion.div>

                    <h2 className="text-navy text-center mb-10">
                        Galería
                    </h2>
                </motion.div>




                <motion.div>
                    <div className="container mx-auto ">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[0].src}
                                        onClick={() => setIndex(0)}
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[1].src}
                                        onClick={() => setIndex(1)}
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[2].src}
                                        onClick={() => setIndex(2)}
                                    />
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[3].src}
                                        onClick={() => setIndex(3)}
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[4].src}
                                        onClick={() => setIndex(4)}
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={photos[5].src}
                                        onClick={() => setIndex(5)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>




                <Lightbox
                    index={index}
                    slides={photos}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />





            </section>
        </>
    );
};