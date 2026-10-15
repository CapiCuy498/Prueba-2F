import { Text } from '../atoms/Text'
import { FooterColumn } from '../molecules/FooterColumn'
import '../../styles/organisms/footer.css'

export function Footer({ sitio, enlaces }) {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <Text className="footer-brand">{sitio.nombre}</Text>
            <Text className="footer-description">{sitio.descripcion}</Text>
          </div>
          <div className="col-6 col-md-2">
            <FooterColumn title="Explorar" items={enlaces} />
          </div>
          <div className="col-6 col-md-2">
            <FooterColumn
              title="Contacto"
              items={sitio.contacto.map((dato) => ({ label: dato }))}
            />
          </div>
          <div className="col-12 col-md-3">
            <FooterColumn
              title="Síguenos"
              items={sitio.redes.map((red) => ({ ...red, externo: true }))}
            />
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container py-3">
          <Text>{sitio.copyright}</Text>
        </div>
      </div>
    </footer>
  )
}
