import styled from "styled-components";

export const BoxSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BoxContainerDiv = styled.div`
    width: 350px;
    height: 380px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 0 5em -3.0em black;
`;

export const BoxContentDiv = styled.div`
    text-align: center;
`;

export const BgPatternCardImg = styled.img`
    border-radius: 15px 15px 0 0;
`;

export const PhotoProfileImg = styled.img`
    margin-top: -60px;
    border-radius: 50px;
    border: 5px solid white;
    box-shadow: inset 10px 10px 10px 10px white;
`;

export const NameH1 = styled.h1`
    margin-top: 15px;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 700;
`;

export const AgeSpan = styled.span`
    color: hsl(227, 10%, 46%);
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
`;

export const CityH2 = styled.h2`
    margin-top: 15px;
    font-size: 15px;
    color: hsl(227, 10%, 46%);
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
`;

export const LineSeparatorDiv = styled.div`
    border-top: 1px solid hsl(227, 10%, 85%);
    margin-top: 30px;
`;

export const StatisticsContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 140px 70px 139px;
    grid-template-rows: 50px;
    margin-top: 15px;
`;

export const StatisticsContentDiv = styled.div`
    display: grid;
    font-family: 'Kumbh Sans', sans-serif;
`;

export const StatisticsH1 = styled.h1`
    font-size: 17px;
    font-weight: 700;
`;

export const StatisticsTextH2 = styled.h2`
    font-size: 12px;
    font-weight: 400;
    color: hsl(227, 10%, 46%);
`;