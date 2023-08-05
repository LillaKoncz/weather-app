import React, {useState, useEffect} from 'react'


export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    

    const formatDigits = (number) => {
        return number < 10 ? '0' + number : number;
    };


    const hours = formatDigits(time.getHours());
    const minutes = formatDigits(time.getMinutes());


  return (
    <div>{`${hours}:${minutes}`}</div>
  );
}

