import { LeafIcon, BowlIcon, ForkIcon, ClockIcon } from './Icons.jsx'

const STEPS = [
  { icon: <LeafIcon />, text: 'Функциональное питание содержит только полезные питательные вещества.' },
  { icon: <BowlIcon />, text: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.' },
  { icon: <ForkIcon />, text: 'Замените один-два приема обычной еды на наше функциональное питание.' },
  { icon: <ClockIcon />, text: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!' },
]

export default function HowItWorks() {
  return (
    <section className="how container" id="how">
      <h2 className="title">Как это работает</h2>
      <ol className="steps">
        {STEPS.map((s) => (
          <li className="step" key={s.text}>
            <span className="step__icon">{s.icon}</span>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
