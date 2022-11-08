const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPerson = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')
const preloader = document.getElementById('preloader')
const calculator = document.getElementById('calculator')

let numberPeople = Number(numberOfPerson.innerText)
const increasePeople = () => {
    numberPeople += 1
    numberOfPerson.innerText = numberPeople
    calculateBill()
}

const decreasePeople = () => {
    if (numberPeople <= 1) {
        alert('People cannot be less than 1')
        return
    } else {
        numberPeople -= 1
        numberOfPerson.innerText = numberPeople
        calculateBill()
    }
}

const calculateBill = () => {
    billamount = Number(billInput.value)
    tipamount = Number(tipInput.value)
    totalPeoples = Number(numberOfPerson.innerText)
    perPersonTotal.innerText = `₹ ${((billamount + tipamount) / totalPeoples).toFixed(2)}`
}


window.addEventListener('load', function () {
    setTimeout(() => {
        preloader.style.display = 'none'
        calculator.style.display = 'flex'
    }, 2000);
})

