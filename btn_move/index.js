let btn = document.querySelector('.btn'),
    one = document.querySelector('span:nth-child(1)'),
    two = document.querySelector('span:nth-child(2)'),
    three = document.querySelector('span:nth-child(3)'),
    four = document.querySelector('span:nth-child(4)'),
    arr = ['green','lime'];


let handleColor = () => {
  one.style.background = `linear-gradient(to right, ${arr[0]}, ${arr[1]})`
  two.style.background = `linear-gradient(to left, ${arr[0]}, ${arr[1]})`
  three.style.background = `linear-gradient(to right, ${arr[0]}, ${arr[1]})`
  four.style.background = `linear-gradient(to left, ${arr[0]}, ${arr[1]})`
  btn.style.color = arr[1]
}

btn.addEventListener('click', handleColor);