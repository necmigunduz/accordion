const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(Number(monthNumber));
    return date.toLocaleString("en-US", {
      month: "long",
    });
};

export default toMonthName