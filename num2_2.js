  const cart = {
    cartlb: null,
    cartbut: null,
    buket: [
      {
        name: "Компьютер",
        count: '1',
        price: '120000',
      },
      {
        name: "Монитор",
        count: '2',
        price: '15000',
      },
      {
        name: "Клавиатура",
        count: '1',
        price: '4000',
      },
      {
        name: "Мышка",
        count: '1',
        price: '3500',
      },
    ],

  init() {
    this.cartlb = document.querySelector('.cart_cat');
    this.cartbut = document.querySelector('.cart_clear');
    this.cartbut.addEventListener('click', () => this.clearCart());
    this.render();
  },
  render() {
        if (this.buket.length > 0) {
            this.cartlb.insertAdjacentHTML('beforeend', `В корзине ${this.buket.length} позиций стоимостью ${this.cartprice()}`);
        } else {
            this.cartlb.text = 'Корзина пуста';
        }
    },
  cartprice(buket) {
    let allPrice = 0
    for (let i = 0; i < buket.lenght; i++) {
        allPrice += buket[i][1] * buket[i][2] * buket[i][3] * buket[i][4];
    }
    return allPrice;
  },
  clearCart() {
    this.cart = [];
    this.render();
  },
};

cart.init();
