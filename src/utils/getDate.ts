const getDate = (dateStr: string) => {
  const newDate = new Date(dateStr);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  return {
    year,
    month,
    date,
    dateStr: `${year}/${month}/${date}`,
  };
};

export default getDate;
