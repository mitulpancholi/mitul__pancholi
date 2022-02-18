import styled from "styled-components"

function Header() {
  return (
      <>
      
    {/* //   Left Side of Navbar - Desktop View */}
    <NavWrapper>
        <StyledName>Mitul Pancholi</StyledName>
        <HamburgerMenu>
            <HamburgerLine></HamburgerLine>
            <HamburgerLine></HamburgerLine>
        </HamburgerMenu>
    </NavWrapper>

    {/* //   Top Side of Navbar - Desktop View */}
    <TopNavbar>

    </TopNavbar>
      </>
  )
}

export default Header


const NavWrapper = styled.div`
position: absolute;
height: 100vh;
width: 4vw;
border-right:  1px solid hsla(0,0%,100%,.3);
display: flex;
flex-direction: column;
justify-content: center;
`

const StyledName = styled.span`
font-size: 24px;
font-weight: 400px;
position: absolute;
display: block;
transform: rotate(-90deg);
left: -40px;
top: 80px;
width: 150px;
cursor: pointer;
`

const HamburgerMenu = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
height: 36px;
cursor: pointer;
padding: 5px 0px;

`

const HamburgerLine = styled.span`
width: 50%;
height: 1px;
background: #fff;

`

const TopNavbar = styled.div`
position: fixed;
    left: auto;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: 201;
    display: flex;
    width: 96%;
    height: 4vw;
    min-height: 4vw;
    min-width: 96%;
    padding-right: 1.8vw;
    padding-left: 1.8vw;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid hsla(0,0%,100%,.3);
    color: #fff;
    cursor: pointer;
`

