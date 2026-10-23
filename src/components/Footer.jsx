import { VkIcon, InstagramIcon, FacebookIcon, HexIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <a className="footer__logo" href="#top">
          <b>CAT</b> ENERGY
        </a>

        <ul className="social">
          <li><a href="#" aria-label="ВКонтакте"><VkIcon /></a></li>
          <li><a href="#" aria-label="Instagram"><InstagramIcon /></a></li>
          <li><a href="#" aria-label="Facebook"><FacebookIcon /></a></li>
        </ul>

        <a className="footer__academy" href="#">
          HTML Academy <HexIcon />
        </a>
      </div>
    </footer>
  )
}
