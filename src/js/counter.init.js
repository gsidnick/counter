const container1 = document.querySelector('#counter-1')
const container2 = document.querySelector('#counter-2')
const container3 = document.querySelector('#counter-3')
const counter1 = new Counter(container1, {
  min: -20,
  max: 0
})
const counter2 = new Counter(container2, {
  min: -10,
  max: 10
})
const counter3 = new Counter(container3, {
  min: 0,
  max: 20
})

