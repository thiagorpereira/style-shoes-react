import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/250x250/93556002A1/tenis-fila-lugano-6-0-masculino-img.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$:129,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/250x250/93556002A1/tenis-fila-lugano-6-0-masculino-img.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$:129,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/250x250/93556002A1/tenis-fila-lugano-6-0-masculino-img.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$:129,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/250x250/93556002A1/tenis-fila-lugano-6-0-masculino-img.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$:129,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/250x250/93556002A1/tenis-fila-lugano-6-0-masculino-img.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$:129,99</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
