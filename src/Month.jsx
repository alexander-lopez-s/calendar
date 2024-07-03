const Month = () => {
    const d = new Date();
const monthIndex = d.getMonth();
let name = '';

if (monthIndex === 0) {
    name = 'January';
} else if (monthIndex === 1) {
    name = 'February';
} else if (monthIndex === 2) {
    name = 'March';
} else if (monthIndex === 3) {
    name = 'April';
} else if (monthIndex === 4) {
    name = 'May';
} else if (monthIndex === 5) {
    name = 'June';
} else if (monthIndex === 6) {
    name = 'July';
} else if (monthIndex === 7) {
    name = 'August';
} else if (monthIndex === 8) {
    name = 'September';
} else if (monthIndex === 9) {
    name = 'October';
} else if (monthIndex === 10) {
    name = 'November';
} else if (monthIndex === 11) {
    name = 'December';
} else {
    name = 'Error';
}

  return (
    <div>{name}</div>
  )
}

export default Month;