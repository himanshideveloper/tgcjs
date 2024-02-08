// Write a program to print days of a week using switch case.


let date = new Date();
let day = date.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

switch(day){
    case 0 : 
        console.log('Sunday');
        break;
    case 1 : 
        console.log('Monday');
        break;
    case 2 : 
        console.log('Tuesday');
        break;
    case 3 : 
        console.log('Wednesday');
        break;
    case 4 : 
        console.log('Thursday');
        break;
    case 5 : 
        console.log('Friday');
        break;
    case 6 : 
        console.log('Saturday');
        break;
}