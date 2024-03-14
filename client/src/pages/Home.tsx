import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const HomeContainer = styled.div`
`

const DailyContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  overflow: hidden;
`

const DailyContainerBox = styled.div`
  width: 5760px;
  margin-top: 100px;
  animation: ${slideAnimation} 30s linear infinite;
  .daily-inner {
    display: inline-block;
    div {
      display: inline-block;
      width: 268px;
      height: 268px;
      margin: 10px;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
`

const WeeklyContainer = styled.div`
  div {
    display: inline-block;
    width: 200px;
    height: 300px;
    margin: 10px;
    background-color: beige;
  }
`

interface DailyBoxOfficeData {
  movieNm: string;
}

const Home = () => {

  const now = moment();
  const today = now.subtract(1, "d").format("YYYYMMDD")

  const url =`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${import.meta.env.VITE_KMDB_API_KEY}&title=파묘&detail=Y`

  const {data: KMDBData, error: KMDBError, isPending: KMDBPending} = useQuery({
    queryKey: ["KMDBMovieData"],
    queryFn: async () => {
      const response = await axios.get(url)
      return response.data.Data[0].Result
    }
  })

  console.log(KMDBData)

  const {data: dailyBoxOffice, error: dailyError, isPending: dailyPending} = useQuery<DailyBoxOfficeData[]>({
    queryKey: ["dailyMovieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${import.meta.env.VITE_MOVIE_API_KEY}&targetDt=${today}`)
      return response.data.boxOfficeResult.dailyBoxOfficeList
    }
  })

  const {data: weeklyBoxOffice, error: weeklyError, isPending: weeklyPending} = useQuery({
    queryKey: ["weeklyMovieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${import.meta.env.VITE_MOVIE_API_KEY}&targetDt=${today}`)
      return response.data.boxOfficeResult.weeklyBoxOfficeList
    }
  })

  console.log("🚀 ~ Home ~ data:", dailyBoxOffice)
  console.log("🚀 ~ Home ~ weeklyBoxOffice:", weeklyBoxOffice)

  if(dailyError) return <div>error</div>
  if(dailyPending) return <div>loding</div>

  if(weeklyError) return <div>error</div>
  if(weeklyPending) return <div>loding</div>

  if(KMDBError) return <div>error</div>
  if(KMDBPending) return <div>loding</div>
  
  return (
    <HomeContainer>
      <DailyContainer>
        <DailyContainerBox>
          <div className="daily-inner">
          {dailyBoxOffice?.map((item,index) => (
            <div key={index}>{item.movieNm}</div>
          ))}
          </div>
          <div className="daily-inner">
          {dailyBoxOffice?.map((item,index)  => (
            <div key={index}>{item.movieNm}</div>
          ))}
          </div>
        </DailyContainerBox>
      </DailyContainer>

      <WeeklyContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </WeeklyContainer>
    </HomeContainer>
  )
}

export default Home