import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const Home = () => {

  const now = moment();
  const today = now.subtract(1, "d").format("YYYYMMDD")

  const {data: dailyBoxOffice, error: dailyError, isPending: dailyPending} = useQuery({
    queryKey: ["dailyMovieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e2093da7939d072062f791c3356fb707&targetDt=${today}`)
      return response.data.boxOfficeResult.dailyBoxOfficeList
    }
  })

  const {data: weeklyBoxOffice, error: weeklyError, isPending: weeklyPending} = useQuery({
    queryKey: ["weeklyMovieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=e2093da7939d072062f791c3356fb707&targetDt=${today}`)
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