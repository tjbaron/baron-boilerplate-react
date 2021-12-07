import React from 'react';
import styled from "@emotion/styled";

export const ButtonGroup = styled.div`
    margin: 10px;
    button:not(:only-of-type) {
        border-radius: 0px;
        margin: 0px;
    }
    button:first-of-type:not(:only-of-type) {
        border-radius: 4px 0px 0px 4px;
        border-right: 0px;
    }
    button:last-of-type:not(:only-of-type) {
        border-radius: 0px 4px 4px 0px;
    }
    button:nth-last-of-type(2) {
        border-right: 0px;
    }
`;
