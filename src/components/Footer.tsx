import { navLinks } from "../constants";
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <footer
          className="p-10 footer footer-center bg-gradient-to-r from-navy to-blueCustom text-whiteCustom"
        >
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((navlink) => {
              return (
                <a
                  key={navlink.title}
                  className="link link-hover"
                  href={navlink.id}
                >{navlink.title}</a>
              )
            })}

          </nav>
          <img
            src="/images/logo_bartolome_de_medina-bg.webp"
            alt=""
            className="block w-12 mx-auto sm:w-16 md:w-24"
          />
          <aside>
            <p>
              Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados por Colegio Bartolome de Medina
            </p>
          </aside>
        </footer>
      </motion.div>
    </>
  )
}


