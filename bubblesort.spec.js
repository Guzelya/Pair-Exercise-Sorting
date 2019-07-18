

describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(swapObj, 'swap').and.callThrough();
      });
    it(('swaps 3 times'), function(){
        bubbleSort([25, 5, 3, 2, 1]);
        expect(swapObj.swap.calls.count()).toEqual(10);
    })
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('returns an array with a single item', function(){
        expect( bubbleSort(['a']) ).toEqual( ['a'] );
    })
    it('returns a sorted array', function(){
        expect( bubbleSort([2, 1])).toEqual([1, 2]);
        expect( bubbleSort([2, 5, 1, 3, 25])).toEqual([1, 2, 3, 5, 25]);
    })
})
