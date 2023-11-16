import styled from "styled-components";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Divider from '@mui/material/Divider';
import indicator from "../images/indicator.png";
import Avatar1 from "../images/Avatar1.png";
import Avatar from "../images/Avatar.png";
import Group from "../images/Group.png";
import dataElement from "../dataElement";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Chart } from 'react-google-charts';


export const data = [
    ["Date" , "Peformance"],
    ["Sun",  100], 
    ["Mon", 70],
    ["Tue", 50],
    ["Wed", 30],
    ["Thur", 10],
    ["Fri", 0],
  ];
  
  export const options = {
    title: "Assignment Submitted",
    hAxis: { title: "Weekly", titleTextStyle: { color: "#333" } },
   
    chartArea: { width: "80%", height: "70%" },
  };


const MainContainer = styled.div`
 
`;

const CourseContainer = styled.div`
    
  
    margin: 20px auto;
    background-color: #fff;
    width: 768px;
    height: 252px;
    margin-left: 200px;
    padding: 10px;
    border-radius: 10px;`;

const CourseContainerDiv = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    gap: 609px;
`;

const CourseH1 = styled.h3`
    font-size: 15px;
`;

const CourseDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly`


const ContentCourse1 = styled.div`
    width: 215px;
    height: 148px;
    border-radius: 12px;
    background: #F8FAFC;
    padding: 9px;
`;

const Contenth1 = styled.h3`
    font-size: 15px;
`;

const Progress = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProgressH1 = styled.p`
    font-size: 12px;
`;

const ProgressPer = styled.p`
    font-size: 12px;
`;

const PersonOutlineimg = styled.img``;

const ProgressImg = styled.img`
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-top: 12px;
    margin-bottom: 10px;
`;

const PersonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Personh1 = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    color: #64748B;
`;

const PersonImg = styled.div`
    display: flex;
`;

const Avatarimg = styled.img``;

const Avatar1img = styled.img`
    margin-left: -8px;
`;

const PersonNum = styled.span`
    background-color: #eff4f9;
    color: #64748B;
    font-size: 9px;
    padding: 6px;
    border-radius: 16px;
    margin-left: -10px;
`;
const AnalyticContainer = styled.div`

    margin: 20px auto;
    margin-left: 200px;
  
    
`

const Taskdiv = styled.div``
function Home() {
    return (
        <MainContainer>
            
                <CourseContainer >
                    <CourseContainerDiv>
                        <CourseH1>Current Course</CourseH1>
                        <MoreHorizOutlinedIcon style={{ color: "#64748B" }} />
                    </CourseContainerDiv>
                    <Divider style={{ marginBottom: "10px" }} />
                    <ContentContainer>
                    {dataElement.map((item, index) => (
                        <ContentCourse1 key={index}>
                            <CourseDiv>
                                <Contenth1>{item}</Contenth1>
                                <MoreHorizOutlinedIcon style={{ color: "#64748B", fontSize: "16px" }} />
                            </CourseDiv>
                            <Progress>
                                <ProgressH1>Progress</ProgressH1>
                                <ProgressPer>54%</ProgressPer>
                            </Progress>
                            <ProgressImg src={indicator} alt="indicator" />
                            <PersonDiv>
                                <Personh1>
                                    <PersonOutlineimg src={Group} /> 20
                                </Personh1>
                                <PersonImg>
                                    <Avatarimg src={Avatar} />
                                    <Avatar1img src={Avatar1} />
                                    <PersonNum>+20</PersonNum>
                                </PersonImg>
                            </PersonDiv>
                        </ContentCourse1>
                             ))}
                    </ContentContainer>
                </CourseContainer>
       
                <AnalyticContainer>
               
                <Chart
        
            chartType=
            "AreaChart"
            width="400px"
            height="293px"                      
            data={data}
            options={options}
             />
                
                <Taskdiv></Taskdiv>
                </AnalyticContainer>
        </MainContainer>
    );
}

export default Home;
