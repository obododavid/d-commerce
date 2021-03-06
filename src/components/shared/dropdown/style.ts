import styled from "styled-components";
import { devices } from "../../../styling/devices";
import { DropdownProps } from "./IDropdown";

export const DropdownContainer = styled.div<Partial<DropdownProps>>`
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
    border-radius: 0px;
    padding: 10px;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    max-width: 300px;
    flex: 1;

    @media ${devices.tablet} {
        order: 2;
        align-self: center;
        flex-basis: 300px;
    }

    &:before {
        content: "";
        position: absolute;
        border-bottom: 5px solid black;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 10px;
        top: 12px;
    }

    &:after {
        content: "";
        position: absolute;
        border-top: 5px solid black;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 10px;
        top: 20px;
    }

    input{
        border: none;
        width: 100%;
        outline: transparent;
        font-size: 14px;
    }

    ul {
        list-style: none;
        position: absolute;
        background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 100%;
        left: 0px;
        top: 31px;
        max-height: 200px;
        overflow-y: scroll;
        ${({ showDropdown }) => showDropdown && "display: block"};
        ${({ showDropdown }) => !showDropdown && "display: none"};

        li {
            padding: 10px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.primaryColor};
                color: #ffffff;
            }
        }
    }
`;
