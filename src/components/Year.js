import React, {useState, useEffect} from 'react';

export default function Year() {

    const [date , setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear())
    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
     <p class="copyright">Copyright &copy; 
     SERGTRADE -o- {date}. All Rights Reserved
      </p>
    </>
  );
 }

