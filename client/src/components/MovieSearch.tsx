import styled from "styled-components"
import { IoSearch } from "react-icons/io5";

const MovieSearch = () => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  };

  return (
    <MovieSearchContainer className="movie-container">
      <IoSearch className="search-icon" size={30}/>
      <MovieSearchBox type="text" onKeyDown={handleKeyDown} />
    </MovieSearchContainer>
  )
}

const MovieSearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  padding-top: 100px;
  .search-icon {
    position: absolute;
    left: 15px;
    z-index: 10;
    cursor: pointer;
  }
`

const MovieSearchBox = styled.input`
  width: 100%;
  padding: 20px 10px 20px 60px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 1s;
  &:focus {
    transform: scaleX(1.05);
    transform-origin: center left;
  }
`

export default MovieSearch