import React from 'react'

// sass를 그냥 import할 수도 있고 (전체에 디자인)
// module로 import 해서 사용할 수도 있다
import style from './sass.module.scss'

export default function SassComp() {
  return (
    <div className={style.color}>SassComp</div>
  )
}
