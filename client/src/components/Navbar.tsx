import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import styled from "styled-components"

// Motion options
const variants = {
  open: { rotate: 45 },
  closed: { rotate: 225 }
}

const container = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0
  }
}

const Navbar = () => {
  const navigate = useNavigate();
  const onClickGoHome = () => {
    navigate("/");
  }

  const [isOpen, setIsOpen] = useState(false);

  const menuList = useMemo(() => [
    { title: "애니메이션", link: "/animation" },
    { title: "아시아영화", link: "/animation" },
    { title: "애니메이션", link: "/animation" },
    { title: "아시아영화", link: "/animation" },
  ], []);

  return (
    <NavbarContainer>

      <h1 onClick={onClickGoHome}>Cinelog</h1>
      <div className="checkbox-wrapper-5">
        <div className="check">
          <input id="check-5" type="checkbox"/>
          <label htmlFor="check-5"></label>
        </div>
      </div>

      <MenuContainer>

        <MenuButton onClick={() => setIsOpen(isOpen => !isOpen)}>
          <p>MENU</p>
          <motion.div
            className="thick-arrow-up"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          ></motion.div>
        </MenuButton>

        {isOpen && (
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
        {menuList.map((list,index) => (
          <motion.li className="item" key={index} variants={item}>
            {list.title}
          </motion.li>
        ))}
        </motion.ul>
        )}

      </MenuContainer>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding: 20px 0px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  h1 {
    margin-left: 50px;
    font-size: 2rem; 
    font-weight: bold;
    color: #0066FF;
    cursor: pointer;
  }
`

const MenuContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  .container {
    position: absolute;
    left: -30px;
    width: 180px;
    height: 320px;
    margin-top: 15px;
    text-align: center;
    border-radius: 15px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    .item {
      margin: 15px;
      font-size: 1.1rem;
    }
  }
`

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }
  .thick-arrow-up {
    width: 10px;
    height: 10px;
    margin-left: 15px;
    border: 5px solid #ffffff;
    border-left: 0;
    border-top: 0;
    transform: rotate(225deg);
  }
`

export default Navbar