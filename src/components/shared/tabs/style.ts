import styled from "styled-components";

export const TabsContainer = styled.div`
    .wrapper {
        .tab__nav {
            &__links {
                list-style: none;
                display: flex;
                padding-left: 10px;
                margin-bottom: 40px;
                position: relative;

                li {
                    font-size: 14px;
                    font-weight: 700;
                    border: 1px solid ${props => props.theme.primaryColor};
                    border-right: none;
                    border-bottom: none;
                    padding: 10px;
                    background-color: #f2f2f2;
                    cursor: pointer;

                    &:last-of-type {
                        border-right: 1px solid
                            ${props => props.theme.primaryColor};
                    }
                }

                .active {
                    background-color: #ffffff;
                    position: relative;
                    z-index: 2;
                }

                hr {
                    width: 100%;
                    height: 1px;
                    position: absolute;
                    bottom: 0;
                    left: 0px;
                    background-color: ${props => props.theme.primaryColor};
                    border: none;
                }
            }
        }

        .tab-description {
            h1 {
                margin-bottom: 20px;
                font-weight: 400;
            }
        }

        .tab-info {
            h1 {
                margin-bottom: 20px;
                font-weight: 400;
            }

            table {
                width: 100%;
                border-collapse: collapse;

                tr {
                    border-top: 1px dotted ${props => props.theme.primaryColor};

                    &:nth-child(2n) {
                        background-color: #f7f7f7;
                    }

                    &:last-child {
                        border-bottom: 1px dotted
                            ${props => props.theme.primaryColor};
                    }

                    td {
                        padding: 10px;

                        &:first-child {
                            font-weight: 600;
                            width: 12%;
                        }

                        &:last-child {
                            font-style: italic;
                        }
                    }
                }
            }
        }

        .tab-reviews {
            h1 {
                margin-bottom: 20px;
                dont-weight: 400;
            }

            p {
                margin-bottom: 20px;
            }

            h6 {
                margin-bottom: 10px;
                font-weight: 800;
            }

            .stars {
                margin-bottom: 15px;
            }

            form {
                .field-textarea {
                    margin-bottom: 20px;

                    textarea {
                        width: 100%;
                        min-height: 190px;
                        border: 1px solid ${props => props.theme.primaryColor};
                    }
                }

                .field-input {
                    display: inline-block;
                    margin-right: 30px;
                    margin-bottom: 20px;

                    input {
                        width: 300px;
                        border: 1px solid ${props => props.theme.primaryColor};
                        font-size: 14px;
                        padding: 7px;
                        outline: none;
                    }
                }

                .field-checkbox {
                    display: flex;
                    margin-bottom: 20px;

                    input {
                        margin-right: 10px;
                    }
                }

                .btn-submit {
                    background-color: #2e5c87;
                    border-bottom: 1px solid
                        ${props => props.theme.primaryColor};
                    color: #ffffff;
                    border: none;
                    font-size: 12px;
                    padding: 12px 25px;
                }
            }
        }
    }
`;
