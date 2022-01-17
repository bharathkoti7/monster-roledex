import React from 'react';
import './card-list.Styles.css';
import {Card} from '../Cards/card.components'

export const CardList = (props) => {
return (<div className='card-list'>
        {props.monsters.map( monster => (
          <Card key = {monster.id} monster = {monster}/>
        ))}
</div>)
}