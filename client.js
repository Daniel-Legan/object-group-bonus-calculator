// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  

  // your logic here
if(employee[0].reviewRating === 3){
  employee[0].bonusPercentage = 0.04;
  employee[0].totalCompensation = employee[0].annualSalary * employee[0].bonusPercentage;
  employee[0].totalBonus = (1*employee[0].annualSalary) + (1*employee[0].totalCompensation);
  //console.log('Total compensation is:', employee[0].totalCompensation);
  //console.log('Total bonus percentage', employee[0].bonusPercentage);
  //console.log('Total bonus:', employee[0].totalBonus);
}

if(employee[0].reviewRating === 4){
  employee[0].annualSalary = employee[0].annualSalary*1.06;
}

if(employee[0].reviewRating === 5){
  employee[0].annualSalary = employee[0].annualSalary*1.10;
}

if(employee[0].employeeNumber.length === 4){
  console.log('the employee numbner is 4 digits long');
  employee[0].annualSalary = employee[0].annualSalary*1.05;
}

if(employee[2].annualSalary > 65000){
  employee[2].annualSalary*0.99;
  console.log('the employee salary is greater than 65000')
}

  return employee[0];
}
  
  // return new object with bonus results


console.log(calculateIndividualEmployeeBonus(employees));