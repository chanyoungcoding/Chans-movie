import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import styled, { keyframes } from "styled-components";
import DailyBoxOffice from "../components/DailyBoxOffice";
import MovieSearch from "../components/MovieSearch";
import MovieContainer from "../components/MovieContainer";

interface DailyBoxOfficeData {
  movieNm: string;
}

const Home = () => {

  const now = moment();
  const today = now.subtract(1, "d").format("YYYYMMDD")

  const {data: dailyBoxOffice, error: dailyError, isPending: dailyPending} = useQuery<DailyBoxOfficeData[]>({
    queryKey: ["dailyMovieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${import.meta.env.VITE_MOVIE_API_KEY}&targetDt=${today}`)
      return response.data.boxOfficeResult.dailyBoxOfficeList
    }
  })

  console.log("🚀 data:", dailyBoxOffice)

  if(dailyError) return <div>error</div>
  if(dailyPending) return <div>loding</div>

  return (
    <HomeContainer>
      <MovieSearch/>
      <DailyContainer>
        <h1>최신 인기 영화</h1>
        <DailyContainerBox>
          <div className="daily-inner">
          {dailyBoxOffice?.map((item) => (
            <DailyBoxOffice movieName={item.movieNm}/>
          ))}
          </div>
          <div className="daily-inner">
          {dailyBoxOffice?.map((item) => (
            <DailyBoxOffice movieName={item.movieNm}/>
          ))}
          </div>
        </DailyContainerBox>
      </DailyContainer>
      <MovieContainer titleName="애니메이션"/>
    </HomeContainer>
  )
}

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const HomeContainer = styled.div`
  background-color: #141414;
`

const DailyContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  h1 {
    margin: 60px 0px 30px;
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }
`

const DailyContainerBox = styled.div`
  width: 5600px;
  animation: ${slideAnimation} 100s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  .daily-inner {
    display: inline-block;
    div {
      display: inline-block;
      width: 213px;
      height: 305px;
      margin: 10px;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
`


export default Home