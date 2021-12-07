import React from 'react';
import styled from "@emotion/styled";
import { baseTheme } from '../../theme';

export type ButtonProps = {
    variant?: "Text" | "Contained" | "Outlined",
    title?: string,
    loading?: boolean,
    debounce?: boolean,
    onClick?: () => void,
};

export const Button = ({title, variant, ...props}: ButtonProps) => {
    switch (variant) {
        case "Text": return <BaseButton {...props}><ButtonContent>{title}</ButtonContent></BaseButton>;
        case "Contained": return <FillButton {...props}><ButtonContent>{title}</ButtonContent></FillButton>;
    }
    return <OutlineButton {...props}><ButtonContent>{title}</ButtonContent></OutlineButton>;
}
Button.defaultProps = {
    variant: "Outlined",
    title: "Button",
    theme: baseTheme,
    debounce: true,
};

const ButtonContent = styled.div`
    position: relative;
    margin: 1px;
    padding: 5px;
    border-radius: 4px;
    min-width: 40px; max-width: 200px;
    white-space: no-wrap;
    text-overflow: ellipsis;
    font-size: 14px;
`;

const BaseButton = styled.button<{loading?: boolean}>`
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: 5px; padding: 0px;
    cursor: pointer;
    color: ${(e) => (e.theme as any).color.clickableText};
    overflow: hidden;
    :hover {
        background: ${(e) => (e.theme as any).color.fillHighlight}
    }
    :active {
        background: #ddd
    }
    ${(e) => e.loading ? `
        border: 1px solid gray !important;
        @keyframes bld {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        ::before {
            content: "";
            position: absolute; top: 50%; left: 50%; width: 500px; height: 500px;
            margin-left: -250px; margin-top: -250px;
            animation: bld 2s linear infinite;
            background: conic-gradient(transparent 5deg, #eee 10deg 350deg, transparent 355deg);
            
        }
        ${ButtonContent} {
            background: #eee !important;
        }
    ` : `
        :before {
            content: "";
            position: absolute; width: 100%; height: 100%; top: 0px; left: 100%;
            transition: 2s;
            background: linear-gradient(
                90deg,
                transparent 0%,
                ${(e.theme as any).color.highlightOverlay} 100%
            );
        }
        :active:before {
            left: -100%;
            transition: 0s;
        }
    `}
`;

const FillButton = styled(BaseButton)`
    border: 1px solid ${(e) => (e.theme as any).color.outline};
    background: ${(e) => (e.theme as any).color.fill};
    ${ButtonContent} {
        background: ${(e) => (e.theme as any).fill};
        color: white;
    }
`;

const OutlineButton = styled(BaseButton)`
    border: 1px solid ${(e) => (e.theme as any).color.outline};
`;
