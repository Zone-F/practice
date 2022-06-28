// import deepClone from './deepClone';
const clone = require('./deepClone');
const deepClone = require('./deepClone')  //声明一个只读的常量，require引入当前文件夹下的sum类

it("循环引用导致堆栈溢出",()=>{
    const target = {
        field1: 1,
        field2: undefined,
        field3: {
            child: 'child'
        },
        field4: [2, 4, 8]
    };
    target.target = target;
    let a = clone(target)
})

it('deepClone Test', () => { 
    let a = {
        a:1,
        b:{
            foo:1,
            bar:2
        },
        c:[1,2,3,{foo:1}],
        // field4:[],
    }

    let b = deepClone(a);

    b.d = a
    b.a = 2;
    b.b.foo = 2;
    b.c.push(4);

    // 两个对象不相等
    expect(a).not.toEqual(b);
    // 基础类型
    expect(a.a).toBe(1);
    // 对象
    expect(a.b.foo).not.toBe(2);
});