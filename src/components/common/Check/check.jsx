import React from 'react'
import { Fade } from 'react-reveal'
import { inject, observer } from 'mobx-react'
import { CustomModal } from '..'
import { ItemList, CartImg, TitleCheck } from './styled'

import { BuyBtn } from '../../../styles'

const checkCustom = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    minHeight: 'max-content',
    borderRadius: 'none',
    maxWidth: '300px',
    width: '100%',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
  },
}

const CheckComponent = ({ cartStore }) => (
  <CustomModal isOpen={cartStore.isShowCheck} cartModal={checkCustom}>
    <Fade top cascade>
      <TitleCheck>Your check</TitleCheck>
      {cartStore.productCart.map(({
        img, title, price, id,
      }) => (
        <ItemList key={id}>
          <CartImg src={img} alt={title} />
          <span>{title}</span>
          <span>
              $
            {price}
          </span>
        </ItemList>
      ))}
      <BuyBtn type='button' onClick={cartStore.hideCheck}>
          Ok!
      </BuyBtn>
    </Fade>
  </CustomModal>
)
export const Check = inject('cartStore')(observer(CheckComponent))
