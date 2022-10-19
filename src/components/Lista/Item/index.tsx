import Style from './item.module.scss';
import React from "react";
import { Itarefa } from '../../../types/tarefas';

interface Props extends Itarefa {
    selecionaTarefa:(tarefaSelecionada: Itarefa) => void
}

 function Item({tarefa, tempo, selecionado , completado, id, selecionaTarefa}: Props){
    return(
        <li className={`${Style.item} ${selecionado ? Style.itemSelecionado :''}${completado ? Style.itemCompletado : ''}`}
        onClick={()=> selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
         <h3>{tarefa}</h3>
         <span>{tempo}</span>
         {completado && <span className={Style.concluido} aria-label="tarefa completada"></span>}
         </li>
    )
}
export default Item;