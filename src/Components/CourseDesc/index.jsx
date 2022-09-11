import './CourseDesc.css';
import React from 'react';
import { Button } from '../Button';

export function CourseDesc() {
  return (
    <div className='coursedesc'>
      <div className='coursedesc-container'>
        <div>
          <h3 className='coursedesc-header'>Сардэчна запрашаем!</h3>
          <Button>
            Запісацца
          </Button>
        </div>
        <div>
          <p className='coursedesc-text'>
            Курс уяўляе сабой серыю вебинаров і практычных заданняў. У рамках курса вы пазнаёміцеся і паспрабуеце сябе ў розных практыках і тэхніках сучаснага мастацтва: напрыклад, калаж, саўнд-арт і інш. Кожная тэхніка ўніверсальная і можа выкарыстоўвацца ў вашай сферы дзейнасці.
          </p>
          <p className='coursedesc-text'>
            *Звярніце ўвагу, што методыка, дызайн, аўтарства абаронена законам аб аўтарскім праве РБ. Любое капіраванне, распаўсюджванне, публічная дэманстрацыя вэбінараў забаронена.
          </p>
        </div>
      </div>
    </div>
  )
}