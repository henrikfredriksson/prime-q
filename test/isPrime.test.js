const millerRabin = require('../index')

// const sieve = require('../src/sieve')

// const primes = sieve(500000)

// console.log(primes.length)

describe('Test Miller-Rabin moduled', () => {
  it('2 is prime', () => {
    expect(millerRabin(2)).toBeTruthy()
  })

  it('10 is composite', () => {
    expect(millerRabin(10)).toBeFalsy()
  })

  it('53 is prime', () => {
    expect(millerRabin(53)).toBeTruthy()
  })

  it('15487469 is prime', () => {
    expect(millerRabin(15487469)).toBeTruthy()
  })

  it('1344513 is composite', () => {
    expect(millerRabin(1344513)).toBeFalsy()
  })

  it('179425579 is prime', () => {
    expect(millerRabin(179425579)).toBeTruthy()
  })

  it('1290318231923 is composite', () => {
    expect(millerRabin(1290318231923)).toBeFalsy()
  })

  it('78817863267167 is prime', () => {
    expect(millerRabin(78817863267167)).toBeTruthy()
  })

  it('4294967291 is prime', () => {
    expect(millerRabin(4294967291)).toBeTruthy()
  })

  // primes.forEach(prime => {
  //   it(`${prime} is prime`, () => {
  //     expect(prime).toBeTruthy()
  //   })
  // })
})
