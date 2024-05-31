import { useCallback } from 'react';

const useFormattedDate = () => {
  const formatDateTime = useCallback((dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return { formattedDate, formattedTime };
  }, []);

  return { formatDateTime };
};

export default useFormattedDate;
