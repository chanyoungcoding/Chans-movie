import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const Home = () => {

  const now = moment();
  const today = now.subtract(1, "d").format("YYYYMMDD")

  const url =`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${import.meta.env.VITE_KMDB_API_KEY}&title=파묘&detail=Y`
  console.log(url)

  const {data: dailyBoxOffice, error: dailyError, isPending: dailyPending} = useQuery({
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
  
  return (
    <div>
    </div>
  )
}

export default Home