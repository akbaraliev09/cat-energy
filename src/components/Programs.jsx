import Photo from './Photo.jsx'
import { Arrow } from './Icons.jsx'
import { IMG } from '../images.js'

const PROGRAMS = [
  {
    id: 'slim',
    title: 'Похудение',
    text: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
    link: 'Каталог Slim',
    icon: IMG.iconSlim,
  },
  {
    id: 'pro',
    title: 'Набор массы',
    text: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
    link: 'Каталог Pro',
    icon: IMG.iconPro,
  },
]

export default function Programs() {
  return (
    <section className="programs container" id="programs">
      {PROGRAMS.map((p) => (
        <article className={'card card--' + p.id} key={p.id}>
          <div className="card__icon">
            <Photo src={p.icon} alt="" />
          </div>
          <h2 className="card__title">{p.title}</h2>
          <p className="card__text">{p.text}</p>
          <a className="card__link" href="#">
            {p.link} <Arrow />
          </a>
        </article>
      ))}
    </section>
  )
}
