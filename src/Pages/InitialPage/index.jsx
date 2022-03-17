import React from "react";
import {
    BackgroundSection,
    BgPatternTop
} from "./style";
import { BoxProfile } from "../../components/BoxProfile/";

export function InitialPage() {
    return (
        <>
            <BackgroundSection />
            <BgPatternTop />
            <BoxProfile />
        </>
    );
}