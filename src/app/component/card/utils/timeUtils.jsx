export const calculateTimeAndPercentage = (start, end) => {
    const parseTime = (timeString) => {
      const [hours, minutes] = timeString.split(':').map(Number);
      return { hours, minutes };
    };
  
    const { hours: startHours, minutes: startMinutes } = parseTime(start);
    const { hours: endHours, minutes: endMinutes } = parseTime(end);
  
    let hoursDifference = endHours - startHours;
    let minutesDifference = endMinutes - startMinutes;
  
    if (minutesDifference < 0) {
      hoursDifference -= 1;
      minutesDifference += 60;
    }
  
    const totalMinutes = hoursDifference * 60 + minutesDifference;
    const percentage = (totalMinutes / (16 * 60)) * 100;
  
    let textColorClass = 'text-green-500'; // Default to green
    if (percentage < 15) {
      textColorClass = 'text-red-500';
    } else if (percentage < 30) {
      textColorClass = 'text-amber-500';
    } else if (percentage < 50) {
      textColorClass = 'text-purple-500';
    } else if (percentage < 60) {
      textColorClass = 'text-blue-300';
    } else if (percentage < 75) {
      textColorClass = 'text-indigo-400';
    }
  
    return { hoursDifference, minutesDifference, percentage, textColorClass };
  };
  