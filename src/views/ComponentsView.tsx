import { styles } from "../style";


export const ComponentsView = () => {
    return (
        <>
            <section id="components-development" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>


                <article className="w-full md:w-[44rem] md:mx-auto">

                    <h1 className="flex-1 font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl text-white animate-fade-right animate-duration-[2000ms]">
                        Desarrollo de <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Componentes</span>{" "}
                    </h1>


                    <p className={`${styles.paragraph} text-sm md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                        En el mundo del desarrollo frontend, la creación de componentes reutilizables es una práctica esencial para construir aplicaciones eficientes y fáciles de mantener. Al descomponer la interfaz de usuario en componentes independientes, los desarrolladores pueden no solo promover la reutilización de código, sino también mejorar la coherencia y la escalabilidad del proyecto. En esta sección, exploraremos la importancia del desarrollo de componentes reutilizables y cómo implementar esta estrategia en el frontend.
                    </p>


                    <section className="space-y-3 mt-4 font-poppins font-normal text-dimWhite animate-fade-right animate-duration-[2000ms]">
                        <h2 className="text-2xl text-blue-500 font-extrabold">
                            Beneficios de los Componentes Reutilizables:

                        </h2>
                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Consistencia Visual y Funcional:
                            </h3>
                            <p className="">
                                Al utilizar componentes consistentes en toda la aplicación, se logra una interfaz visualmente armoniosa y una experiencia del usuario coherente.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Eficiencia en el Desarrollo:
                            </h3>
                            <p className="">
                                Desarrollar componentes reutilizables permite a los equipos de desarrollo ahorrar tiempo al no tener que recrear funcionalidades similares en diferentes partes de la aplicación.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Mantenibilidad Mejorada:
                            </h3>
                            <p className="">
                                Los componentes autocontenidos son más fáciles de mantener y actualizar. Un cambio en un componente se reflejará automáticamente en todas las instancias en las que se utiliza.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#33bbcf] text-xl">
                                Facilita la Colaboración:
                            </h3>
                            <p className="">
                                La reutilización de componentes facilita la colaboración entre equipos de desarrollo, ya que cada equipo puede centrarse en construir y mejorar componentes específicos sin interferir con otros aspectos de la aplicación.
                            </p>
                        </div>

                    </section>





                </article>



            </section >
        </>
    );
}
