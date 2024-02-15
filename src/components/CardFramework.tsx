import { NavLink, Outlet } from "react-router-dom"




interface Props {
    framework: string
    linkDocs: string
    nameImg: string
}
export const CardFramework = ({ framework, linkDocs, nameImg }: Props) => {
    return (
        <>


            <div className="p-6 bg-primary rounded-lg shadow text-white border animate-fade animate-duration-[2000ms]">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#33bbcf]">{framework}</h5>
                <a href={linkDocs} target="_">
                    <img src={`/images/frameworks/${nameImg}.png`} alt="" className="block w-32 mx-auto" />
                </a>


                <div className="border-b border-gray-200 dark:border-gray-700 ">
                    <ul className="flex flex-wrap -mb-px  font-medium text-center text-gray-400 items-center justify-center font-poppins text-xs md:text-base">
                        <li className="me-2">
                            <NavLink to="creator" className={({ isActive }) => {
                                return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                            }} >
                                Creador
                            </NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink to="description" className={({ isActive }) => {
                                return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                            }}>
                                Descripción
                            </NavLink>
                        </li>

                        <li className="me-2">
                            <NavLink to="companies" className={({ isActive }) => {
                                return `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 transition-colors ease-in duration-300 ${isActive ? 'active-tab' : ''}`
                            }}>
                                Empresas que lo utilizan
                            </NavLink>
                        </li>

                    </ul>
                </div>


                <dl className="mb-2 space-y-2 p-4">

                    <Outlet />




                </dl>





            </div>


        </>
    )
}
