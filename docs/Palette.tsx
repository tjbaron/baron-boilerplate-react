import React, { useState } from 'react';
import styled from "@emotion/styled";
import { palette } from '../src/theme';

export const Palette = () => {
    return <Holder>
        <ColorSet set={palette.primary} />
        <ColorSet set={palette.secondary} />
        <ColorSet set={palette.secondary2} />
        <ColorSet set={palette.complement} />
    </Holder>;
}

export const ColorSet = ({set}: {set: string[]}) => {
    return <Square color={set[2]}>
        <MiniSquare top left color={set[0]} />
        <MiniSquare top right color={set[1]} />
        <MiniSquare bottom left color={set[3]} />
        <MiniSquare bottom right color={set[4]} />
    </Square>;
}

const Holder = styled.div`
    display: flex; flex-direction: row;
    width: 100%;
`;

const Square = styled.div<{color: string}>`
    position: relative; margin: 5px;
    display: flex; width: 100px; height: 100px;
    background: ${(e) => e.color};
`;

const MiniSquare = styled.div<{color: string, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean}>`
    position: absolute; width: 30px; height: 30px;
    background: ${(e) => e.color};
    ${(e) => e.top && `top: 0px;`}
    ${(e) => e.bottom && `bottom: 0px;`}
    ${(e) => e.left && `left: 0px;`}
    ${(e) => e.right && `right: 0px;`}
`;
