import Photo from './Photo.jsx'
import { IMG } from '../images.js'

export default function Example() {
  return (
    <section className="example" id="example">
      <div className="container example__grid">
        <div className="example__info">
          <h2 className="title">Живой пример</h2>
          <p className="example__text">
            Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
          </p>

          <div className="example__facts">
            <div className="fact">
              <b>5 кг</b>
              <span>снижение веса</span>
            </div>
            <div className="fact">
              <b>60 дней</b>
              <span>затрачено времени</span>
            </div>
            <p className="example__cost">
              Затраты на питание: <span>15 000 руб.</span>
            </p>
          </div>
        </div>

        <div className="example__compare">
          <div className="stage">
            <Photo className="stage__img" src={IMG.catBefore} alt="Кот Борис до диеты" />
=            <Photo className="stage__img" src={IMG.catAfter} alt="Кот Борис после диеты" />
          </div>

          <div className="slider" aria-hidden="true">
            <span>Было</span>
            <span className="slider__track">
              <span className="slider__thumb" />
            </span>
            <span>Стало</span>
          </div>
        </div>
      </div>
    </section>
  )
}