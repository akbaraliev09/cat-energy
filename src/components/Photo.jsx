import { useState } from 'react'


export default function Photo({ src, alt = '', className = '', fallback, style }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    if (fallback !== undefined) return fallback
    return (
      <div className={'ph ' + className} style={style} role="img" aria-label={alt}>
        <span>Вставьте фото:<br />public{src}</span>
      </div>
    )
  }

  return <img className={className} style={style} src={src} alt={alt} onError={() => setBroken(true)} />
}
