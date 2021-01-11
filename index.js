import { Computer } from 'bitcoin-computer'

const Counter = `class Counter {
  constructor() { this.n = 0 }
  inc() { this.n += 1 }
}`

;(async () => {
  const computer = new Computer({
    seed: 'wet man custom turn card fatigue detail fetch express sauce reform mistake',
    chain: 'BSV', // BSV or BCH
    network: 'testnet', // testnet or livenet
    path: "m/44'/0'/0'/0" // defaults to "m/44'/0'/0'/0"
  })
  const counter = await computer.new(Counter, [])
  document.getElementById("el").innerHTML = `Counter is ${counter.n}`

  await counter.inc()
  document.getElementById("el").innerHTML = `Counter is ${counter.n}`

  console.log(computer.db.wallet.getAddress().toString())
  console.log(counter)
})()