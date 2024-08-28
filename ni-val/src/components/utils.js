export const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M'; // Convert to millions
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K'; // Convert to thousands
    } else {
      return num; // Return the number as is if less than 1,000
    }
  };
  