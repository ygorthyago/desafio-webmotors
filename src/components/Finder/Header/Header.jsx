import './Header.scss';
import React from 'react'
import {ReactComponent as Car} from '../../../template/car.svg';
import {ReactComponent as Motorcycle} from '../../../template/motorcycle.svg';

export default props => (
    <div className="headerFinder">
      <ul className="headerFinder__itemsList">
        <li className="headerFinder__item headerFinder__item--active">
          <figure className="headerFinder__itemLogo headerFinder__itemLogo--flip">
            <Car />
          </figure>
          <h2 className="headerFinder__itemName">
            <small>Comprar</small>
            <span>Carros</span>
          </h2>
        </li>

        <li className="headerFinder__item">
          <figure className="headerFinder__itemLogo">
            <Motorcycle />
          </figure>
          <h2 className="headerFinder__itemName">
            <small>Comprar</small>
            <span>Motos</span>
          </h2>
        </li>
      </ul>

      <div className="headerFinder__sellMyCar">
        <button>Vender meu carro</button>
      </div>
    </div>
)