import React from 'react';
import { 
    BoxSection,
    BoxContainerDiv,
    BoxContentDiv,
    BgPatternCardImg,
    PhotoProfileImg,
    NameH1,
    AgeSpan,
    CityH2,
    LineSeparatorDiv,
    StatisticsContainerDiv,
    StatisticsContentDiv,
    StatisticsH1,
    StatisticsTextH2
} from "./style";

import photoProfile from '../../assets/image-victor.jpg';
import bgCard from '../../assets/bg-pattern-card.svg';

export function BoxProfile() {
    return (
        <>
            <BoxSection>
                <BoxContainerDiv>
                    <BoxContentDiv>

                        <BgPatternCardImg src={bgCard} />
                        <PhotoProfileImg src={photoProfile}/>
                        
                        <NameH1>Victor Crest <AgeSpan>26</AgeSpan></NameH1>
                        <CityH2>London</CityH2>
                        
                        <LineSeparatorDiv />
                        
                        <StatisticsContainerDiv>
                        
                            <StatisticsContentDiv>
                                <StatisticsH1>80K</StatisticsH1>
                                <StatisticsTextH2>Followers</StatisticsTextH2>
                            </StatisticsContentDiv>
                        
                            <StatisticsContentDiv>
                                <StatisticsH1>803K</StatisticsH1>
                                <StatisticsTextH2>Likes</StatisticsTextH2>
                            </StatisticsContentDiv>
                        
                            <StatisticsContentDiv>
                                <StatisticsH1>1.4K</StatisticsH1>
                                <StatisticsTextH2>Photos</StatisticsTextH2>
                            </StatisticsContentDiv>
                        
                        </StatisticsContainerDiv>
                    
                    </BoxContentDiv>
                </BoxContainerDiv>
            </BoxSection>
        </>
    );
}