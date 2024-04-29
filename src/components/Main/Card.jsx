import * as S from "./main_styled"
import React from 'react'

export default function Card({linksite, siteimg, texto, descricao, repositorio, gitsymbol}) {
  return (
    <S.Card>
       

        <a href={linksite} target="_blank">
            <S.Figure><img src={siteimg} alt="" /></S.Figure></a>
          <p>{texto}</p>
          <p>{descricao}</p>
          <a href={repositorio} target="_blank">
          <img className="git" src={gitsymbol} alt="" /></a>

    </S.Card>
  )
}
