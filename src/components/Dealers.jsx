import Photo from './Photo.jsx'
import { LogoFallback } from './Icons.jsx'
import { IMG } from '../images.js'

export default function Dealers() {
  return (
    <section className="dealers" id="dealers">
      <div className="dealers__wrap container">
        <div className="dealers__card">
          <h2>Приглашаем к сотрудничеству дилеров!</h2>
          <address>
            ул. Большая Конюшенная, д. 19/8
            <br />
            <br />
            Санкт-Петербург
          </address>
        </div>
      </div>

      <div className="dealers__map">
        <Photo className="dealers__img" src={IMG.map} alt="Карта: офис Cat Energy в Санкт-Петербурге" />
        <span className="dealers__pin" aria-hidden="true">
          <Photo src={IMG.logo} alt="" fallback={<LogoFallback />} />
        </span>
      </div>
    </section>
  )
}
