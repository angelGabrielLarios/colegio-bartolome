
import { IconPhone, IconMail, IconBrandWhatsapp, IconBrandFacebook, IconMapPin } from '@tabler/icons-react'

import { useState } from 'react';
import { ShowAnimantion } from '../../components';
export const ContactSection = () => {

    const [isLoadMapGoogle, setIsLoadMapGoogle] = useState(true)

    const handleMapLoad = () => {
        setIsLoadMapGoogle(false)
    };
    return (
        <>
            <section className="section" id="contact">
                <ShowAnimantion>
                    <h2 className="mb-10 text-center text-navy">
                        Contactanos
                    </h2>
                </ShowAnimantion>




                <article className="grid gap-4 lg:grid-cols-2">

                    <div>


                        <ShowAnimantion>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.361121548013!2d-98.65224279784425!3d20.65148803213503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d12531b05c7613%3A0x899ddebce2ce7de!2sC.%20Margarita%20Maza%20de%20Ju%C3%A1rez%2C%2043204%20Zacualtip%C3%A1n%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1707417625015!5m2!1ses!2smx"
                                className="block w-full h-[400px]"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onLoad={handleMapLoad}
                            />
                        </ShowAnimantion>


                        {
                            isLoadMapGoogle ?
                                <div>
                                    <span className="loading loading-ball loading-lg"></span>
                                </div>
                                : null
                        }


                    </div>


                    <ShowAnimantion>
                        <div className="flex flex-col justify-center p-8 bg-white rounded-3xl">

                            <ul className='text-sm md:text-base'>
                                <li className="py-2">

                                    <p className="">
                                        <IconMapPin className="inline mr-2 text-blackCustom" />
                                        <span className="font-bold">Ubicacion:{" "}</span> C. Margarita Maza de Juárez, Poza de Chapultepec, 43200 Zacualtipán, Hgo.
                                    </p>



                                </li>
                                <li className="py-2">
                                    <a className="flex items-center gap-2" href="tel:+527712710797" target="_blank">
                                        <IconPhone className="text-red-600" />
                                        771 271 0797

                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        className="flex items-center gap-2"
                                        href="https://wa.me/7712710797"
                                        target="_blank"
                                    >
                                        <IconBrandWhatsapp className="text-green-500" />
                                        771 271 0797

                                    </a>
                                </li>
                                <li >
                                    <a className="flex items-center gap-2" href="mailto:lariosacostaa@gmail.com" target="_blank">
                                        <IconMail className="text-yellow-400" />
                                        lariosacostaa@gmail.com

                                    </a>
                                </li>
                                <li className="py-2">
                                    <a className="flex items-center gap-2" href="" target="_blank">
                                        <IconBrandFacebook className="text-blue-700" />
                                        Colegio Bartolome de Medina

                                    </a>
                                </li>
                            </ul>

                        </div>
                    </ShowAnimantion>
                </article>

            </section>
        </>
    )
}
