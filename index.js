//answer 1
function add(a,b)
{
  if (a+b === a+b)
  {return(a+b)}
}

//answer 2
function subtract (a,b)
{
  if (a-b === a-b)
  {return (a-b)}
}

//answer 3
function multiply (a,b)
{
  if (a*b === a*b)
  {return (a*b)}
}

//answer 4 
function divide(a,b)
{
  if (a/b === a/b)
  {return (a/b)}
}

//answer 5 
function inc(n)
{ 
  if (n === n)
  {return (n+1)}
}

//answer 6 
function dec(n)
{
 if (n === n)
 {return(n-1)}
}

//answer 7 
function makeInt(n)
{
  {return(parseInt(n, 10))}
  
}

//answer 8
function preserveDecimal(n)
{
  {return(parseFloat(n))}
}




// describe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })

//   it('returns NaN as appropriate', function() {
//     expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//   })
// })
