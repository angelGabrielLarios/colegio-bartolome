import { createBrowserRouter, Link, Navigate, RouteObject } from "react-router-dom";
import { App } from "../App";
import { DesignResponsive, HeroView, ToolsView, WhatIsView, FrameworksView, ComponentsView, RenderView, HomeView } from "../views";
import { CardFramework } from "../components";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/*',
                element: <Navigate to={'/'} />,
            },
            {
                index: true,
                element: <HomeView />,
                handle: {
                    crumb: () => <Link to="/" className="text-blue-400">Home</Link>,
                },

            },
            {
                path: 'what-is',
                element: <WhatIsView />,
                handle: {
                    crumb: () => <Link to="what-is" className="text-blue-400">¿Qué es?</Link>,
                },

            },
            {

                path: 'modern-frameworks',
                element: <FrameworksView />,
                handle: {
                    crumb: () => <Link to="/modern-frameworks/" className="text-blue-400">Frameworks modernos</Link>,
                },
                children: [

                    {
                        path: 'react',
                        element: <CardFramework
                            framework="React"
                            linkDocs="https://react.dev/"
                            nameImg="react_logo_new"
                        />,

                        handle: {
                            crumb: () => <Link to="/modern-frameworks/react" className="text-blue-400">React</Link>,
                        },
                        children: [

                            {
                                index: true,
                                element: <>
                                    <dd className="text-xs md:text-base text-center text-blue-500 font-poppins font-normal">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>
                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Meta
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/creator" className="text-blue-400">Creador</Link>,
                                },

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Se centra en la creación de componentes declarativos que facilitan la gestión del estado y la construcción de interfaces eficientes.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/description" className="text-blue-400">Description</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>
                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Facebook (obviamente), Instagram, Airbnb, Netflix.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/react/companies" className="text-blue-400">Compañias</Link>,
                                },

                            }
                        ]
                    },
                    {
                        path: 'angular',
                        element: <CardFramework
                            framework="Angular"



                            linkDocs="https://angular.dev/"
                            nameImg="angular_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/angular" className="text-blue-400">Angular</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-xs md:text-base text-center text-blue-500 font-poppins font-normal">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Google
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/creator" className="text-blue-400">Creador</Link>,
                                },

                            },

                            {
                                path: 'description',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Angular es un framework completo de desarrollo frontend que utiliza TypeScript. Proporciona un conjunto de herramientas para construir aplicaciones web complejas y dinámicas. Angular sigue el patrón de arquitectura MVC (Model-View-Controller).
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/description" className="text-blue-400">Descripcion</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Google, Microsoft, IBM, Microsoft Office
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/angular/companies" className="text-blue-400">Compañias</Link>,
                                },

                            }
                        ]
                    },
                    {
                        path: 'vue',
                        element: <CardFramework
                            framework="Vue JS"
                            linkDocs="https://vuejs.org/"
                            nameImg="vue_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/vue" className="text-blue-400">Vue</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-xs md:text-base text-center text-blue-500 font-poppins font-normal">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Evan You
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/vue/creator" className="text-blue-400">Creador</Link>,
                                },

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces de usuario. Es fácil de integrar en proyectos existentes y ofrece un enfoque gradual para el desarrollo. Vue es conocido por su simplicidad y flexibilidad.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/vue/description" className="text-blue-400">Descripcion</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>
                                    <dt className="font-extrabold text-[#33bbcf]">Descripcion:</dt>
                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Alibaba, Xiaomi, Adobe, Xiaomi.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/vue/companies" className="text-blue-400">Compañias</Link>,
                                },
                            }
                        ]
                    },
                    {
                        path: 'svelte',

                        element: <CardFramework
                            framework="Svelte"
                            linkDocs="https://svelte.dev/"
                            nameImg="svelt_logo"
                        />,
                        handle: {
                            crumb: () => <Link to="/modern-frameworks/svelte" className="text-blue-400">Svelte</Link>,
                        },
                        children: [
                            {
                                index: true,
                                element: <>
                                    <dd className="text-xs md:text-base text-center text-blue-500 font-poppins font-normal ">
                                        Escoge una opcion de arriba para saber más información del framework
                                    </dd>
                                </>
                            },
                            {
                                path: 'creator',
                                element: <>
                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Rich Harris
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/creator" className="text-blue-400">Creador</Link>,
                                },

                            },
                            {
                                path: 'description',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        Svelte es un framework de construcción de interfaces que lleva a cabo la mayor parte del trabajo en tiempo de compilación en lugar de en tiempo de ejecución. Se diferencia de otros frameworks al generar código optimizado y liviano.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/description" className="text-blue-400">Descripcion</Link>,
                                },
                            },
                            {
                                path: 'companies',
                                element: <>

                                    <dd className="text-xs md:text-base font-poppins font-normal text-dimWhite">
                                        SvelteKit (el marco de aplicación basado en Svelte) es utilizado por empresas como Spotify, IBM, entre otras.
                                    </dd>
                                </>,
                                handle: {
                                    crumb: () => <Link to="/modern-frameworks/svelte/companies" className="text-blue-400">Compañias</Link>,
                                },
                            }
                        ]
                    }
                ]


            },
            {
                path: 'tools',
                element: <ToolsView />,
                handle: {
                    crumb: () => <Link to="/tools" className="text-blue-400">Herramientas</Link>,
                },

            },

            {
                path: 'design-responsive',
                element: <DesignResponsive />,
                handle: {
                    crumb: () => <Link to="/design-responsive" className="text-blue-400">Diseño Responsivo</Link>,
                },

            },

            {
                path: 'components-development',
                element: <ComponentsView />,
                handle: {
                    crumb: () => <Link to="/components-development" className="text-blue-400">Desarrollo de Componentes</Link>,
                },

            },
            {
                path: 'render',
                element: <RenderView />,
                handle: {
                    crumb: () => <Link to="/render" className="text-blue-400">Renderizado</Link>,
                },
                children: [
                    {
                        index: true,
                        element: <p className={`font-poppins text-dimWhite text-xs md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                            <h3 className="text-xl font-extrabold text-blue-600">
                                ¿Que es?
                            </h3>
                            En el mundo del desarrollo frontend, la creación de componentes reutilizables es una práctica esencial para construir aplicaciones eficientes y fáciles de mantener. Al descomponer la interfaz de usuario en componentes independientes, los desarrolladores pueden no solo promover la reutilización de código, sino también mejorar la coherencia y la escalabilidad del proyecto. En esta sección, exploraremos la importancia del desarrollo de componentes reutilizables y cómo implementar esta estrategia en el frontend.
                        </p>,

                    },
                    {
                        path: 'ssr',
                        element: <p className={`font-poppins text-dimWhite text-xs md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                            El HTML se genera en el servidor y se envía al navegador. <br />
                            Mejora el SEO, ya que los motores de búsqueda pueden indexar fácilmente el contenido.<br />
                            Puede tener un tiempo de carga inicial más lento, pero la interactividad puede mejorar después de la carga inicial.
                        </p>,
                        handle: {
                            crumb: () => <Link to="/render/ssr" className="text-blue-400">ssr</Link>,
                        },
                    },
                    {
                        path: 'csr',
                        element: <p className={`font-poppins text-dimWhite text-xs md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                            El navegador recibe un documento HTML básico y luego carga y ejecuta JavaScript para renderizar dinámicamente el contenido.<br />
                            Rápido después de la carga inicial, ya que solo se carga el esqueleto de la página en la primera solicitud.<br />
                            Puede afectar el SEO, ya que algunos motores de búsqueda pueden tener dificultades para indexar el contenido generado dinámicamente.
                        </p>,
                        handle: {
                            crumb: () => <Link to="/render/csr" className="text-blue-400">csr</Link>,
                        },
                    },
                    {
                        path: 'hybrid-render',
                        element: <p className={`font-poppins text-dimWhite text-xs md:text-base mt-5 animate-fade-right animate-duration-[2000ms]`}>
                            Combina SSR y CSR para aprovechar las ventajas de ambos enfoques. <br />
                            Se puede utilizar SSR para la carga inicial y CSR para las transiciones de página y las actualizaciones dinámicas. <br />
                            Mejora la velocidad de carga y mantiene beneficios de SEO.
                        </p>,
                        handle: {
                            crumb: () => <Link to="/render/hybrid-render" className="text-blue-400">Híbrido</Link>,
                        },
                    }
                ]

            },

        ]
    }
]

export const router = createBrowserRouter(routes)

