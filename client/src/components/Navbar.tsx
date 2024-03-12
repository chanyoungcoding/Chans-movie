import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding: 20px 0px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  h1 {
    margin-left: 50px;
    font-size: 2rem; 
    font-weight: bold;
    color: #0066FF;
    cursor: pointer;
  }
`

const Navbar = () => {
  const navigate = useNavigate();
  const onClickGoHome = () => {
    navigate("/");
  }

  return (
    <NavbarContainer>
      <h1 onClick={onClickGoHome}>Cinelog</h1>
      <div className="checkbox-wrapper-5">
        <div className="check">
          <input id="check-5" type="checkbox"/>
          <label htmlFor="check-5"></label>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar