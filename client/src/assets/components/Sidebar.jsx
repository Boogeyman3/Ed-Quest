import styled from 'styled-components'
import logo from './images/mark.png' 
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
const SidebarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
 position: fixed;
 top: 0;
 left: 1px;
 height: 100%;
padding: 18px;
  flex: 1;
  background-color: #fff;
`
const SidebarContent = styled.div`
` 
const SidebarLogo = styled.img`
  border: none;

  
`
const Tags = styled.li`
display: flex;  
margin-top: 1rem;
font-size: 13px;
gap: 10px;
color: #64748B;
cursor: pointer;
&:hover{
 background-color: #F8FAFC;
 color:#2563EB;
 padding: 6px;
;
;
}
`
const Logocontainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom: 1rem;
gap:5px;`


const LogoH1 = styled.h1`
font-size:22px;`
         
const  DownContent = styled.div`
  margin-top: 12rem;
  font-size: 15px;
  color: #64748B;
  
`
const Settings = styled.div`
  display: flex;
  gap: 15px;
  font-size: 15px;
  color: #64748B;

`
const Tooglecontainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 17px;
margin-top: 2rem;
font-size: 15px;
  color: #64748B;
`

function Sidebar() {
  return (
 <SidebarContainer>
  <Logocontainer><SidebarLogo  src={logo} alt='logo'/>
 <LogoH1> Ed Quest</LogoH1>
   </Logocontainer>
  
    <SidebarContent>
      <Tags>Menu</Tags>
      <Tags> <AppsOutlinedIcon /> Home</Tags>
    <Tags> <CheckBoxOutlinedIcon />Submitted assignment</Tags>
      <Tags><SmsOutlinedIcon/> Student</Tags>
      <Tags ><EmojiEventsOutlinedIcon/> Additional page</Tags>
      <Tags> <AddOutlinedIcon /> Additional content</Tags>

    </SidebarContent>
    <DownContent>
    <Settings> <SettingsOutlinedIcon/> setttings </Settings>
    <Tooglecontainer><DarkModeOutlinedIcon/> Dark <ToggleOnOutlinedIcon/></Tooglecontainer>
    </DownContent>
 </SidebarContainer>
  )
}

export default Sidebar