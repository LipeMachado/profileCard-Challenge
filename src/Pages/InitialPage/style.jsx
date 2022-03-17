import styled from 'styled-components';
import bgTopPattern from "../../assets/bgPatternTop.png";

export const BackgroundSection = styled.section`
    display: flex;
`;

export const BgPatternTop = styled.div`
    background: url(${bgTopPattern});
    background-size: cover;
    background-repeat: no-repeat;
    width: 900px;
    height: 900px;
    position: absolute;
    top: -60%;
    left: -10%;
    z-index: -1;
`;