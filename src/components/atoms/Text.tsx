
import React from 'react';
import styled from "@emotion/styled";
import { baseTheme } from '../../theme';

export type ButtonProps = {
    children?: any;
    type?: "h1" | "h2" | "h3" | "body";
    loading?: boolean;
};

export const Text = ({...props}: ButtonProps) => {
    if (props.type[0] === "h") {
        const H = BaseText.withComponent(props.type);
        return <H {...props} />
    }
    return <BaseText {...props} />
}
Text.defaultProps = {
    children: "Lorem ipsum dolor sit amet",
    type: "body",
    theme: baseTheme,
};

const BaseText = styled.p<ButtonProps>`
    @keyframes gra {
        0% {
            background-position: 100% 0%
        }
        50% {
            background-position: 0% 0%
        }
        100% {
            background-position: 0% 0%
        }
    }
    position: relative;
    font-family: ${(e) => (e.theme as any).font[e.type].family};
    font-size: ${(e) => (e.theme as any).font[e.type].size};
    margin-left: 0px;
    ${(e) => e.loading ? `
        color: transparent;
        background: linear-gradient(150deg, #eee 40%, #fff 50%, #eee 60%);
        background-size: 300% 100%;
        animation: gra 2s linear infinite;
        user-select: none;
    ` : ``}
`;
