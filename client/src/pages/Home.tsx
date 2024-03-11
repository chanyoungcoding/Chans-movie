import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const Home = () => {

  const now = moment();
  const today = now.subtract(1, "d").format("YYYYMMDD")

  const {data, error, isPending} = useQuery({
    queryKey: ["movieData"],
    queryFn: async () => {
      const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e2093da7939d072062f791c3356fb707&targetDt=${today}`)
      return response.data.boxOfficeResult.dailyBoxOfficeList
    }
  })

  console.log("🚀 ~ Home ~ data:", data)

  if(error) return <div>error</div>
  if(isPending) return <div>loding</div>
  
  return (
    <div>
    </div>
  )
}

export default Home