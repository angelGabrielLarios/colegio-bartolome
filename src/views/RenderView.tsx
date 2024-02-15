import { NavLink, Outlet } from "react-router-dom"


export const RenderView = () => {
    return (
        <>
            <section id="render" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>


                <article className="w-full md:w-[44rem] md:mx-auto">

                    <h1 className="flex-1 font-poppins font-semibold text-3xl md:text-4xl lg:text-6xl text-white animate-fade-right animate-duration-[2000ms]">
                        Rende<span className="text-gradient">rizado</span>
                    </h1>







                    <div className="border-b border-gray-200 dark:border-gray-700 ">
                        <ul className="flex flex-wrap -mb-px  font-medium text-center text-gray-400 items-center justify-center font-poppins text-xs md:text-base">
                            <li className="me-2">
                                <NavLink to="ssr" className={({ isActive }) => {
                                    return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                                }} >
                                    SSR - Server-Side Rendering
                                </NavLink>
                            </li>
                            <li className="me-2">
                                <NavLink to="csr" className={({ isActive }) => {
                                    return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                                }}>
                                    CSR - Client-Side Rendering
                                </NavLink>
                            </li>

                            <li className="me-2">
                                <NavLink to="hybrid-render" className={({ isActive }) => {
                                    return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                                }}>
                                    Hybrid Rendering
                                </NavLink>
                            </li>

                        </ul>
                    </div>


                    <Outlet />






                </article>



            </section >
        </>
    )
}
