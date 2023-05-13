const data = [
  { id: 1, name: '苹果', price: 10 },
  { id: 2, name: '葡萄', price: 20 },
  { id: 3, name: '香蕉', price: 30 },
  { id: 4, name: '西瓜', price: 40 },
];
interface Item {
  id: number;
  name: string;
  price: number;
  choose?: number;
}
class ShoppingCart {
  goods: Item[];
  constructor() {
    this.goods = [];
  }
  // 添加商品
  addItem(good: Item) {
    const isExist = this.goods.find((item) => {
      return item.name === good.name;
    });
    if (isExist) {
      (isExist.choose as number)++;
    } else {
      good.choose = 1;
      this.goods.push(good);
    }
  }
  // 删除商品
  removeItem(goodName) {
    const isExist = this.goods.findIndex((item) => {
      return item.name === goodName;
    });
    if (isExist >= 0) {
      this.goods.splice(isExist, 1);
      return `删除${goodName}成功`;
    } else {
      return '没有此商品，不能删除';
    }
  }
  // 获取特定商品的数量
  getItemQuantity(goodName) {
    const good = this.goods.find((item) => {
      return item.name === goodName;
    });
    if (good) {
      return good.choose;
    } else {
      return '没有此商品';
    }
  }
  // 获得特定商品的总价
  getItemTotalPrice(goodName) {
    const good = this.goods.find((item) => {
      return item.name === goodName;
    });
    if (good) {
      return (good.choose as number) * good.price;
    } else {
      return '没有此商品';
    }
  }
  // 获得购物车中所有商品的总价
  getTotal() {
    let totalPrice = 0;
    this.goods.forEach((item) => {
      totalPrice += this.getItemTotalPrice(item.name) as number;
    });
    return totalPrice;
  }
}
const s = new ShoppingCart();
s.addItem(data[0]);
s.addItem(data[0]);
s.addItem(data[1]);
s.addItem(data[1]);
s.addItem(data[2]);
s.addItem(data[2]);
console.log(s.removeItem('苹果'));
console.log(s.getItemTotalPrice('苹果'));
console.log(s.getTotal());
console.log(s.goods);
