import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AdminImage from '../components/images/icon.jpg'; // Import the image correctly
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const AdminContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 23px;
    margin-left: 178px;
    margin-right: -8px;
    padding: 22px;
    margin-top: -8px;
    background-color: #fff;

`;

const NavH1 = styled.h1`
font-size: 21px;
`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
`
const Search = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.25); /* Use rgba() for background color */
  color: #64748B;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
  border: 1px solid #eff1f4;
  border-radius:7px;
`;

const SearchIconWrapper = styled.div`

`;

const StyledInputBase = styled.input`
  text-decoration: none;
  border: none;
  color: #64748B;
`;

const Image = styled.img`
   width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
`;

const Tutorcontainer = styled.div `
gap:3px; `
const TutorH1 = styled.h3`
font-size: 15px;
`
const TutorSpan = styled.span`
font-size: 13px;
color: #64748B;

`


function Admindashboard() {
  return (
    <AdminContainer>
      <NavH1>Home</NavH1>

      <Div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" />
      </Search>
      <NotificationsNoneOutlinedIcon style={{color: "#64748B"}}/>
      
      <Image src={AdminImage} alt="Admin" /> 
      <Tutorcontainer>
        <TutorH1>Adam</TutorH1>
        <TutorSpan>Tutor</TutorSpan>
      </Tutorcontainer>
      <ExpandMoreIcon  style={{color: "#64748B"}}/>
      </Div>
    </AdminContainer>
  );
}

export default Admindashboard;
