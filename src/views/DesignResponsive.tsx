import { styles } from "../style"


export const DesignResponsive = () => {
    return (
        <>
            <section id="design-reponsive" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>


                <article className="w-full md:w-[44rem] md:mx-auto">

                    <h1 className="flex-1 font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl text-white animate-fade-right animate-duration-[2000ms]">
                        Diseño <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Responsivo</span>{" "}
                    </h1>


                    <p className={`${styles.paragraph} mt-5 animate-fade-right animate-duration-[2000ms]`}>
                        El diseño responsivo se ha convertido en un pilar fundamental en el desarrollo web, permitiendo que las interfaces de usuario se adapten fluidamente a una variedad de dispositivos, desde computadoras de escritorio hasta smartphones y tabletas. En esta sección, exploraremos los principios clave del diseño responsivo y cómo crear interfaces que ofrezcan una experiencia consistente y atractiva en cualquier pantalla.
                    </p>


                    <section className="space-y-3 mt-4 font-poppins font-normal text-dimWhite animate-fade-right animate-duration-[2000ms]">
                        <h2 className="text-2xl text-blue-500 font-extrabold">
                            Principios del Diseño Responsivo:

                        </h2>
                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Flexibilidad de Diseño:
                            </h3>
                            <p className="">
                                Un diseño responsivo se caracteriza por su flexibilidad. Los elementos de la interfaz deben ajustarse proporcionalmente a diferentes tamaños de pantalla, manteniendo la legibilidad y la estética.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Imágenes Flexibles:
                            </h3>
                            <p className="">
                                Utilizar imágenes que se ajusten dinámicamente al tamaño de la pantalla. Las imágenes deben ser optimizadas para cargar rápidamente en dispositivos móviles sin comprometer la calidad visual en pantallas más grandes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Media Queries:
                            </h3>
                            <p className="">
                                Herramientas como CSS Grid Layout y Flexbox facilitan la creación de diseños responsivos al proporcionar estructuras de diseño fluidas y alineación flexible de elementos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Grid Layout y Flexbox:
                            </h3>
                            <p className="">
                                Node.js, npm, Yarn: Node.js proporciona un entorno de ejecución para JavaScript fuera del navegador, mientras que npm y Yarn gestionan las dependencias, facilitando la construcción de aplicaciones y el manejo de paquetes.
                            </p>
                        </div>

                    </section>

                    <section className="space-y-3 mt-4 font-poppins font-normal text-dimWhite animate-fade-right animate-duration-[2000ms]">
                        <h2 className="text-2xl text-blue-500 font-extrabold">
                            ¿Cómo Crear Interfaces Adaptables:?

                        </h2>
                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Diseño Basado en Contenidos:
                            </h3>
                            <p className="">
                                Enfocarse en el contenido es clave. Priorizar la información esencial y organizarla de manera jerárquica garantiza una experiencia fluida, independientemente del dispositivo.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Uso de Unidades Relativas:
                            </h3>
                            <p className="">
                                Emplear unidades relativas, como porcentajes y ems, en lugar de unidades fijas (píxeles). Esto permite que los elementos se escalen proporcionalmente al tamaño de la pantalla.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Pruebas en Múltiples Dispositivos:
                            </h3>
                            <p className="">
                                Probar la interfaz en una variedad de dispositivos y navegadores asegura que el diseño responda adecuadamente a diferentes contextos, identificando posibles problemas y permitiendo ajustes precisos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Imágenes y Multimedia Responsivos:
                            </h3>
                            <p className="">
                                Utilizar etiquetas img con atributos srcset para proporcionar diferentes versiones de una imagen según la resolución de la pantalla. Además, incorporar multimedia de manera que sea accesible y funcional en todos los dispositivos.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Imágenes y Multimedia Responsivos:
                            </h3>
                            <p className="">
                                Utilizar etiquetas img con atributos srcset para proporcionar diferentes versiones de una imagen según la resolución de la pantalla. Además, incorporar multimedia de manera que sea accesible y funcional en todos los dispositivos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Performance Optimizada:
                            </h3>
                            <p className="">
                                Optimizar el rendimiento de la interfaz para dispositivos móviles, minimizando el uso de recursos y asegurando tiempos de carga rápidos.
                            </p>
                        </div>

                    </section>



                </article>



            </section >
        </>
    )
}
