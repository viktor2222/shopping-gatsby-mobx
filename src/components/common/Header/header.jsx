import React from 'react'

import { observer, inject } from 'mobx-react'
import {
  Container,
} from '../../../styles'
import {
  HeaderContainer,
  ImgCart,
  ActiveList,
  CartCount,
} from './styled'

import { Check, Cart } from '..'


const HeaderComponent = ({ cartStore }) => (
  <HeaderContainer>
    <Container>
      <ActiveList onClick={cartStore.showCart}>
        <ImgCart src='/cart.svg' alt='cart' />
        <CartCount>{cartStore.cartCount}</CartCount>
      </ActiveList>
    </Container>
    <Cart />
    <Check />
  </HeaderContainer>
)
export const Header = inject('cartStore')(observer(HeaderComponent))
