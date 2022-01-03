import { SimplyList } from './simply_list/simpleList'

const lista = new SimplyList<number>();
lista.push(5);
lista.push(7);
lista.push(15);
lista.insertAtPosition(16, 3);
lista.insertAtPosition(6, 1);
lista.insertAtPosition(4, 0);
lista.insertAfterValue(8, 7);
console.log('First');
lista.forEach((data ) => console.log(data));

lista.deleteByValue(4);
lista.deleteByValue(8);
lista.deleteByValue(16);

console.log('Second');
lista.forEach((data ) => console.log(data));

