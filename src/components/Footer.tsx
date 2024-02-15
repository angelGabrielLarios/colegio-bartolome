import { navLinks } from "../constants";


export const Footer = () => {
  return (
    <>
      <footer
        className="footer footer-center p-10 bg-gradient-to-r from-navy to-blueCustom text-whiteCustom"
      >
        <nav className="flex flex-wrap gap-4 items-center justify-center">
          {navLinks.map((navlink) => {
            return (
              <a
                className="link link-hover"
                href={navlink.id}
              >{navlink.title}</a>
            )
          })}

        </nav>
        <img
          src="/public/images/logo_bartolome_de_medina-bg.webp"
          alt=""
          className="block w-12 sm:w-16 md:w-24 mx-auto"
        />
        <aside>
          <p>
            Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados por Colegio Bartolome de Medina
          </p>
        </aside>
      </footer>
    </>
  )
}


