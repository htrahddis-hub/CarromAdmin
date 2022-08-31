export const getCurrentDate = (separator = "") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
};

export const getISODate = (date) => {
  const darr = date.split("-");
  const dobj = new Date(
    parseInt(darr[0]),
    parseInt(darr[1]) - 1,
    parseInt(darr[2])
  );
  return dobj.toISOString();
};
