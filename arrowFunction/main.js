const double = (arr) => arr.map((val) => val * 2);

const  squareAndFindEven = (numbers) => {
    let square = numbers.map((num)=> num**2);
    let evens = square.filter((square)=> square % 2 === 0)
    return evens
}