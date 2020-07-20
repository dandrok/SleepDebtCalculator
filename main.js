const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 6; // enter the number of hours you sleep on Monday
    case 'tuesday':
      return 6.5; // enter the number of hours you sleep on Tuesday
    case 'wednesday':
      return 7.5; // enter the number of hours you sleep on Wednesday
    case 'thursday':
      return 7; // enter the number of hours you sleep on Thursday
    case 'friday':
      return 13; // enter the number of hours you sleep on Friday
    case 'saturday':
      return 11; // enter the number of hours you sleep on Saturday
    case 'sunday':
      return 12; // enter the number of hours you sleep on Sunday
  }
}

// console.log(getSleepHours('monday')); //test

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); // the sum of your weekly sleep time


  const getIdealSleepHours = () => {
  const idealHours = 9; // perfect sleep time per day (you can change number)
  return idealHours * 7; // perfect sleep time * 7 days 
}

console.log(getActualSleepHours()); //test your sleep time
console.log(getIdealSleepHours()); //test perfect sleep time


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got perfect sleep time!`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  } else {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week. You sleep more than you need.`);
    }
}

calculateSleepDebt();





