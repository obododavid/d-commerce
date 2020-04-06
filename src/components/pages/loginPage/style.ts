import styled from "styled-components";
import { devices } from "../../../styling/devices";

export const LoginContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;

    form {
        border: 1px solid ${props => props.theme.primaryColor};
        padding: 30px 10px;

        @media ${devices.tablet} {
            max-width: 500px;
            margin: 0 auto;
        }

        h2 {
            font-weight: 400;
            margin-bottom: 20px;
        }

        div {
            @media ${devices.tablet} {
                width: 100%;
            }
        }
    }

    //-------------------------------------------------------------------------
    //resets on some components on this page
    //-------------------------------------------------------------------------

    h6 {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 800;
    }
`;
