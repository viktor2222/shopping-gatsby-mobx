/* eslint-disable prefer-const */
import { observable, action, computed } from 'mobx'

class CartStore {
  @observable isShowCart = false

  @observable isShowCheck = false

  @observable productCart = []

  @action('Cart is show')
  showCart = () => {
    this.isShowCart = true
  }

  @action('Cart is hide')
  hideCart = () => {
    this.isShowCart = false
  }

  @action('Check is show')
  showCheck = () => {
    this.isShowCheck = true

    try {
      window.localStorage.setItem(
        'productCart',
        JSON.stringify(this.productCart),
      )
    } catch {
      console.error('setItem store error')
    }
  }

  @computed get totalSum() {
    return this.productCart.reduce((sum, current) => sum + current.price, 0)
  }

  @computed get cartCount() {
    return this.productCart.length;
  }

  @action('Check is hide')
  hideCheck = () => {
    this.isShowCheck = false
    this.productCart = []
  }

  @action('Add todo Cart')
  addTodoCart = (payload) => {
    if (this.productCart.find(x => x.id === payload.id)) {
      return
    }
    this.productCart.push(payload)
  }

  @action('Remove todo Cart')
  removeTodoCart = (id) => {
    this.productCart = this.productCart.filter(item => item.id !== id)
  }
}

export default CartStore
