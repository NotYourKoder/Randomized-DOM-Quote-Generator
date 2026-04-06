const quotes = [
  "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Simplicity is the soul of efficiency.",
  "Dream big. Start small. Act now.",
  "Push yourself, because no one else will.",
  "Consistency beats motivation."
]

const btn = document.querySelector('#btn')
const main = document.querySelector('main')

btn.addEventListener('click', () => {

    const h1 = document.createElement('h1')

    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    h1.textContent = quote

    let x = Math.random() * 100
    let y = Math.random() * 100

    let rot = Math.random() * 360
    let scale = Math.random() * 1.5 + 0.5   // better range (0.5 → 2)

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.color = `rgb(${r}, ${g}, ${b})`

    h1.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`

    main.appendChild(h1)

})