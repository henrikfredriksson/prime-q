/**
 *
 * @author Henrik Fredriksson
 * @param {*} n Integer to be tested for primality
 * @param {number} [k=100] iteratons
 * @returns {boolean} True if n is prime otherwise false
 */
function isPrime(n, k = 100) {
  if (n === 2 || n === 3) { return true }

  const smallPrimes = [2, 3, 5, 7, 11, 13, 17]

  const res = smallPrimes.map(x => n % x === 0).filter(x => x).includes(true)
  if (res) return false

  if (
    n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0 || n < 2) {
    return false
  }

  // Write (n - 1) as 2^s * d
  let s = 0
  let d = n - 1
  while (d % 2 === 0) {
    d /= 2
    ++s
  }

  const witness = n => {
    return Math.floor(Math.random() * (n - 2)) + 2
  }

  while (k--) {
    let a = Math.pow(witness(n), s)

    if (a % n === 1) continue

    let testFails = false
    for (let i = 0; i < s; i++) {
      a = Math.pow(a, 2) % n
      if (a === n - 1) {
        testFails = true
        break
      }
    }

    if (testFails) return false
  }
  return true
}

module.exports = isPrime
