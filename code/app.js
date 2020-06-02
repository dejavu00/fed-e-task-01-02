// 代码1-----------

// 练习1
const fp = require('lodash/fp');
const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)

// 练习2
const isFirstName = fp.flowRight(fp.prop('name'), fp.fisrt)

// 练习3
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
}
const averageDollarValue = fp.flowRight(_average, fp.map(car => car.dollar_value));

// 练习4
let _underscore = fp.replace(/\W+/g, '_');
const sanitizeNames = fp.flowRight(fp.toLower, _underscore);

// 代码2-----------

// 练习1
let maybe = Maybe.of([5,6,1])
let ex1 = maybe.map(fp.map(function (item) {
    return fp.add(item)(item)
  }))
// 练习2 

let xs = Container.of(['do', 'some', 'thing']);
let ex2 = xs.map(fp.first);

// 练习3
let ex3 = safeProp('name', user)

// 练习4
let ex4 = function (n) {
    return Maybe.of(n).map(parseInt);
}
