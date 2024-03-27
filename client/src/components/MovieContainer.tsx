import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import "swiper/css/pagination";
import 'swiper/css';

import MovieBox from "./MovieBox";

interface GenreData {
  titleName: string;
}

const MovieContainer:React.FC<GenreData> = ({titleName = "오류"}) => {

  return (
    <GenreContainer>
      <h1 className="title-name">{titleName}</h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <GenreBox>
          {[...Array(6)].map((_, index) => (
            <MovieBox key={index} />
          ))}
          </GenreBox>
        </SwiperSlide>

        <SwiperSlide>
          <GenreBox>
          {[...Array(6)].map((_, index) => (
            <MovieBox key={index} />
          ))}
          </GenreBox>
        </SwiperSlide>
      </Swiper>
    </GenreContainer>
  )
}

const GenreContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  .title-name {
    margin: 20px 0px;
    color: white;
    font-size: 1.5rem;
  }
`

const GenreBox = styled.div`
  width: 2800px;
`

export default MovieContainer