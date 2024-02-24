import { navLinks } from "../constants";

export const Navbar = () => {

  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>


            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                {navLinks.map(navlink => {
                  return (
                    <li>
                      <a
                        href={navlink.id}
                        className=""
                      >
                        {navlink.title}
                      </a>
                    </li>

                  )
                })}
              </li>

            </ul>
          </div>

          <a className="text-xl btn btn-ghost" href="/">
            <img
              src="/images/logo_bartolome_de_medina-bg.webp"
              alt="logo de colegio bartolome de medina "
              className="block w-14"
            />
          </a>

        </div>

        {/* desktop */}
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {navLinks.map(navlink => {
              return (
                <li
                  key={navlink.title}
                >
                  <a
                    href={navlink.id}
                    className=""
                  >
                    {navlink.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

      </nav>
    </>
  )
};


