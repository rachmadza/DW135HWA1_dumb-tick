exports.convertToRupiah = angka => {
  var rupiah = "";
  var angkarev = angka
    .toString()
    .split("")
    .reverse()
    .join("");
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};

exports.convertToDate = inputDate => {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepetember",
    "October",
    "November",
    "December"
  ];

  let date = new Date(inputDate).getDate();
  let _day = new Date(inputDate).getDay();
  let _month = new Date(inputDate).getMonth();
  let _year = new Date(inputDate).getFullYear();

  let finalday = day[_day];
  let finalmonth = month[_month];

  let fullDate = `${finalday}, ${finalmonth} ${date}, ${_year}`;

  return fullDate;
};

exports.convertToDateWithoutDay = inputDate => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepetember",
    "October",
    "November",
    "December"
  ];

  let date = new Date(inputDate).getDate();
  let _month = new Date(inputDate).getMonth();
  let _year = new Date(inputDate).getFullYear();

  let finalmonth = month[_month];

  let fullDate = `${finalmonth} ${date}, ${_year}`;

  return fullDate;
};

exports.convertToTime = inputDate => {
  let hours = String(new Date(inputDate).getHours()).padStart(2, "0");
  let minutes = String(new Date(inputDate).getMinutes()).padStart(2, "0");

  let fullTime = `${hours} : ${minutes}`;

  return fullTime;
};