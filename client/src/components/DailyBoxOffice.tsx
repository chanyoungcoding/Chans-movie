import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";

interface DailyBoxOfficeData {
  movieName: string
}


const DailyBoxOffice:React.FC<DailyBoxOfficeData> = ({movieName}) => {

  const {data: KMDBData, error: KMDBError, isPending: KMDBPending} = useQuery({
    queryKey: ["KMDBMovieData", movieName],
    queryFn: async () => {
      const response = await axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${import.meta.env.VITE_KMDB_API_KEY}&title=${movieName}&detail=Y`)
      return response.data.Data[0].Result
    }
  })

  if(KMDBError) return <div>error</div>
  if(KMDBPending) return <div>loding</div>

  console.log("불러온 데이터", KMDBData);

  return (
    <DailyBox>
      <img src={KMDBData[0].posters.split("|")[0]} alt="#" />
    </DailyBox>
  )
}

const DailyBox = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`

export default DailyBoxOffice