import React, { useState } from 'react';
import styled from "@emotion/styled";
import { baseTheme } from '../../theme';

export const CopyZone = ({data}: {data: string}) => {
    const [copied, setCopied] = useState("Copy");
    return <CopyBox text={copied} onClick={() => {
        navigator.clipboard.writeText(data);
        setCopied("Copied");
    }}>{data}</CopyBox>
};

const CopyBox = styled.div<{text: string}>`
    position: relative;
    font-family: sans-serif;
    padding: 20px 10px;
    border: 1px solid gray;
    border-radius: ${(e) => (e.theme as any).borderRadius};
    cursor: pointer;
    user-select: all;
    :hover {
        background: #eee;
        ::after {
            position: absolute;
            content: "${(e) => e.text}";
            font-size: 12px;
            right: 3px; top: 3px;
            background: black; color: white;
            padding: 5px;
            user-select: none;
        }
    }
`;
CopyBox.defaultProps = {
    theme: baseTheme,
};
