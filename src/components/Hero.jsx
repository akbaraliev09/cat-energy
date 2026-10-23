import Photo from './Photo.jsx'
import { IMG } from '../images.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
=        <Photo className="hero__cat" src={IMG.heroCat} fallback={null} />
      </div>

      <div className="container hero__inner">
        <div className="hero__title">
          <h1>Функциональное питание для котов</h1>
          <p>Занялся собой? Займись котом!</p>
        </div>

        <div className="hero__visual">
          <span className="dot dot--a" aria-hidden="true" />
          <span className="dot dot--b" aria-hidden="true" />
          <span className="dot dot--c" aria-hidden="true" />
          <Photo className="hero__jar" src={IMG.jar} alt="Банка корма Cat Energy Pro, вкус курица" />
        </div>

        <a className="btn" href="#how">Подобрать программу</a>
      </div>
    </section>
  )
}
