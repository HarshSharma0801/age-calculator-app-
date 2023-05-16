//start
function caculate(){
    const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; 
const currentDay = currentDate.getDate();


  let years = 0;
  let months = 0;
  let days = 0;


  const enteredYear = document.getElementById("InYear").value ;
  const enteredMonth = document.getElementById("InMonth").value ;
  const enteredDay = document.getElementById("InDay").value ;

  
  if(currentMonth>enteredMonth){
    years = currentYear-enteredYear;
    if(currentDay>enteredDay){
        months= currentMonth-enteredMonth;
        days = currentDay-enteredDay;
}
    if(currentDay<enteredDay){
        months= currentMonth-enteredMonth-1;
        switch(months){
            case 1 : days= currentDay + (31-enteredDay);
            break;
            case 2: days= currentDay + (28-enteredDay);
            break;
            case 3 : days= currentDay + (31-enteredDay);
            break;
            case 4 : days= currentDay + (30-enteredDay);
            break;
            case 5 : days= currentDay + (31-enteredDay);
            break;
            case 6 : days= currentDay + (30-enteredDay);
            break;
            case 7 : days= currentDay + (31-enteredDay);
            break;
            case 8 : days= currentDay + (31-enteredDay);
            break;
            case 9 : days= currentDay + (30-enteredDay);
            break;
            case 10 : days= currentDay + (31-enteredDay);
            break;
            case 11: days= currentDay + (30-enteredDay);
            break;
            case 12: days= currentDay + (31-enteredDay);
            break;
            default:break;

        }


    }
  }
  if(currentMonth==enteredMonth){
    
    
    if(currentDay>=enteredDay){
        years = currentYear-enteredYear;
        months = 0;
        days = currentDay-enteredDay;
    }
    else{
        years = currentYear-enteredYear-1;
        months = 11;
        switch(months){
            case 1 : days= currentDay + (31-enteredDay);
            break;
            case 2: days= currentDay + (28-enteredDay);
            break;
            case 3 : days= currentDay + (31-enteredDay);
            break;
            case 4 : days= currentDay + (30-enteredDay);
            break;
            case 5 : days= currentDay + (31-enteredDay);
            break;
            case 6 : days= currentDay + (30-enteredDay);
            break;
            case 7 : days= currentDay + (31-enteredDay);
            break;
            case 8 : days= currentDay + (31-enteredDay);
            break;
            case 9 : days= currentDay + (30-enteredDay);
            break;
            case 10 : days= currentDay + (31-enteredDay);
            break;
            case 11: days= currentDay + (30-enteredDay);
            break;
            case 12: days= currentDay + (31-enteredDay);
            break;
            default:break;

        }
    }
  }
  if(enteredMonth>currentMonth){
    years = currentYear-enteredYear-1;
    if(currentDay>enteredDay){
        months=  12-(enteredMonth-currentMonth);
        days = currentDay-enteredDay;
    }
    if(currentDay<enteredDay){
        months= 11-(enteredMonth-currentMonth);
        switch(months){
            case 1 : days= currentDay + (32-enteredDay);
            break;
            case 2: days= currentDay + (29-enteredDay);
            break;
            case 3 : days= currentDay + (32-enteredDay);
            break;
            case 4 : days= currentDay + (31-enteredDay);
            break;
            case 5 : days= currentDay + (32-enteredDay);
            break;
            case 6 : days= currentDay + (31-enteredDay);
            break;
            case 7 : days= currentDay + (32-enteredDay);
            break;
            case 8 : days= currentDay + (32-enteredDay);
            break;
            case 9 : days= currentDay + (31-enteredDay);
            break;
            case 10 : days= currentDay + (32-enteredDay);
            break;
            case 11: days= currentDay + (31-enteredDay);
            break;
            case 12: days= currentDay + (32-enteredDay);
            break;
            default:break;

        }    }
  }

  let element1 = document.getElementById("ansy");
  let element2 = document.getElementById("ansm");
  let element3 = document.getElementById("ansd");
  element1.innerHTML= years;
  element2.innerHTML = months;
  element3.innerHTML = days;

  

}

const button = document.getElementById("btn");
button.addEventListener('click',caculate);


