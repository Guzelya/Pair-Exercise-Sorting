describe('split', function(){
    it(('splits an array in half'), function(){
        expect( split([3,1])).toEqual([[3],[1]])
    })
})


describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([[3],[1]])).toEqual([1,3])
    });
  });
