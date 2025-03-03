const counterElement = document.getElementById('counter');
let count = +counterElement.innerText;
const increment = () => {
    count++
    counterElement.innerText = count.toString();
};

const decrement = () => {
    count--
    counterElement.innerText = count.toString();

};

const incrementButton = document.getElementById("increment")
incrementButton.addEventListener("click", increment);

const decrementButton = document.getElementById("decrement")
decrementButton.addEventListener("click", decrement);