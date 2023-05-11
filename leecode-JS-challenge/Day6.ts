type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length == 0) {
        return init
    }
    else {
        let total = init
        for ( let i = 0 ; i < nums.length ; i++ ) {
            let a = fn(total,nums[i])
            total = a
        }
         return total
    }
};
