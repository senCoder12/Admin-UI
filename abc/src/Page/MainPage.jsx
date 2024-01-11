import React, { useEffect, useState } from 'react'
import GridPage from './GridPage'

export default function MainPage() {
    const [ dataList, setDataList ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then(res => res.json()).then((response)=> {
            setDataList(response);
            setLoading(false);
        })
    } ,[])

  return (
        !loading && (
            <GridPage data={dataList}/>
        )
  )
}
