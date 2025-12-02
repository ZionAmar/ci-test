function sum(a,b){
    return a+b;
}

test('sum a+b',()=>{
    expect(sum(1,2)).toBe(3);
})