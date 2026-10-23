import { useState } from 'react'
import Photo from './Photo.jsx'
import { LogoFallback } from './Icons.jsx'
import { IMG } from '../images.js'

const LINKS = [
  { href: '#top', label: 'Главная' },
  { href: '#programs', label: 'Каталог продукции' },
  { href: '#how', label: 'Подбор программы' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__row">
                <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <Photo
            className="logo__img"
            src={IMG.logo}
            alt="Cat Energy"
            fallback={
              <>
                <LogoFallback className="logo__img logo__img--icon" />
                <span className="logo__text"><b>CAT</b> ENERGY</span>
              </>
            }
          />
        </a>

        <button
          type="button"
          className={'burger' + (open ? ' burger--open' : '')}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu" className={'nav' + (open ? ' nav--open' : '')} aria-label="Главное меню">
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a className={i === 0 ? 'is-active' : ''} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
