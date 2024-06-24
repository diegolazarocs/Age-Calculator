const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;
}

let bithDetails = {
    date:inputDate.getDate(),
    month:inputDate.getMonth()+1,
    year:inputDate.getFullYear()
}

let currentYear = today.getFullYear();
let currentMonth = today.getMonth()+1;
let currentDate = today.getDate();

leapChecker (currentYear);

if(
    birthDatails.year > currentYear || (birthDatails.month : correntMonth && birthDatails.year == currentYear) || (birthDatails.date : currentDate && birthDatails.month == currentMonth && birthDatails.year == currentYear)
){
    alert("Not Born Yet")
    return
}
