import { format } from 'date-fns';
import { differenceInDays } from 'date-fns';

const formatDateWithDaysAgo = (dateString: string): string => {
  const date = new Date(dateString); 
  const today = new Date(); 

  const formattedDate = format(date, 'MMMM d, yyyy');

  const daysAgo = differenceInDays(today, date);

  const daysAgoText =
    daysAgo === 0
      ? '(today)'
      : daysAgo === 1
      ? '(1 day ago)'
      : `(${daysAgo} days ago)`;

  return `${formattedDate} ${daysAgoText}`;
};

export default formatDateWithDaysAgo;
