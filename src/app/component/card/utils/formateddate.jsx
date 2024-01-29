export const formatCustomDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    return dateObject.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };