import { styles } from "../style"


export const ToolsView = () => {
    return (
        <>
            <section id="home" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>


                <article className="w-full md:w-[44rem] md:mx-auto">

                    <h1 className="flex-1 font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl  text-white animate-fade-right animate-duration-[2000ms]">
                        Herramientas<br className="sm:block hidden" />{" "}
                        <span className="text-gradient">para el desarrollo</span>{" "}
                    </h1>


                    <p className={`${styles.paragraph} text-sm md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                        Bienvenido al fascinante mundo del desarrollo frontend, donde la creación de experiencias de usuario cautivadoras se convierte en arte. En este espacio dinámico, los frameworks modernos se han convertido en las herramientas esenciales que potencian la eficiencia y la innovación.
                    </p>


                    <section className="space-y-3 mt-4 font-poppins font-normal text-dimWhite animate-fade-right animate-duration-[2000ms]">
                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Editores de Código:
                            </h3>
                            <p className="">
                                Visual Studio Code, Sublime Text, Atom: Estos editores ofrecen características avanzadas, como resaltado de sintaxis, completado automático y extensiones personalizables, facilitando la escritura y edición de código.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Sistemas de Control de Versiones:
                            </h3>
                            <p className="">
                                Git: Fundamental para el desarrollo colaborativo, Git permite el seguimiento de cambios, la colaboración eficiente y la gestión del código fuente, con plataformas como GitHub y GitLab ampliamente utilizadas.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Task Runners y Bundlers:
                            </h3>
                            <p className="">
                                Webpack, Gulp, Grunt: Estas herramientas automatizan tareas como la minificación de archivos, la compilación de código y la gestión de dependencias, simplificando el flujo de trabajo del desarrollo.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Entornos de Desarrollo Local:
                            </h3>
                            <p className="">
                                Node.js, npm, Yarn: Node.js proporciona un entorno de ejecución para JavaScript fuera del navegador, mientras que npm y Yarn gestionan las dependencias, facilitando la construcción de aplicaciones y el manejo de paquetes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Herramientas de Pruebas:
                            </h3>
                            <p className="">
                                Jest, Testing Library: Estas herramientas simplifican las pruebas unitarias y de integración, asegurando que las aplicaciones frontend sean robustas y estables.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Sistemas de Diseño:
                            </h3>
                            <p className="">
                                Storybook, Figma, Sketch: Utilizados para crear y documentar componentes de diseño, estos sistemas ayudan a mantener la coherencia y eficiencia en proyectos frontend complejos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Analizadores de Código y Linters:
                            </h3>
                            <p className="">
                                ESLint, Stylelint: Estas herramientas analizan el código en busca de errores, asegurando la consistencia en estilo y buenas prácticas de codificación.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Herramientas de Depuración:
                            </h3>
                            <p className="">
                                Chrome DevTools, Firefox Developer Tools: Estas herramientas integradas en navegadores facilitan la depuración de aplicaciones frontend, permitiendo inspeccionar, perfilar y depurar el código JavaScript y CSS.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Plataformas de Colaboración:
                            </h3>
                            <p className="">
                                Slack, Microsoft Teams: Estas plataformas facilitan la comunicación y colaboración entre los miembros del equipo de desarrollo frontend, mejorando la eficiencia y la resolución de problemas.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Monitoreo y Optimización de Rendimiento:
                            </h3>
                            <p className="">
                                Lighthouse, Google PageSpeed Insights: Estas herramientas ayudan a evaluar y optimizar el rendimiento de las aplicaciones frontend, garantizando una experiencia de usuario rápida y eficiente.
                            </p>
                        </div>

                    </section>



                </article>



            </section >
        </>
    )
}
