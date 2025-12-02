function sum(a,b){
    return a+b;
}

test('sum a+b',()=>{
    expect(sum(2,2)).toBe(4);
})