import styled from "styled-components";
import test from "../../images/test.jpg";

const DetailImg = () => {
  return (
    <ImageBox>
      <div className="image-sticker"></div>
      <img src={test} alt="#"/>
    </ImageBox>
  )
}

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 350px;
  position: relative;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  transform: rotate(10deg);
  .image-sticker {
    position: absolute;
    top: -18px;
    right: 60px;
    width: 100px;
    height: 30px;
    background-color: rgba(98, 77, 71, 0.6);
  }
  img {
    width: 213px;
    height: 305px;
    border-radius: 5px;
    object-fit: cover;
  }
`

export default DetailImg