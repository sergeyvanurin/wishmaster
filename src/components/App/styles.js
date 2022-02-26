import styled from 'styled-components';
import Color from 'color';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Header = styled.header`
    background: ${props => props.background ? `url(${props.background}) center center` : 'lightgrey'};
    background-size: cover;
    width: 100%;
    height: 300px;
    position: relative;
> div {
        backdrop-filter: blur(30px);
        display: flex;
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
        a {
            display: block;
            width: 250px;
            height: 130px;
            text-decoration: none;
            img {
                display: block;
                margin: 0 auto 10px auto;
                width: 100px;
                height: 100px;
                border-radius: 50px;
                transition: all 250ms ease-in-out 0s;
            }
            h1 {
                display: block;
                height: 20px;
                line-height: 20px;
                color: white;
                font-weight: bold;
                font-size: 24px;
                text-align: center;
            }
            p {
                display: block;
                font-size: 12px;
                text-align: center;
                color: lightgray;
            }
            &:hover {
                img {
                    transform: scale(1.5);
                }
            }
        }
    }
    button {
        position: absolute;
        cursor: pointer;
        bottom: -20px;
        left: 0;
        right: 0;
        width: 150px;
        margin: 0 auto;
        background: #10c694;
        height: 40px;
        color: white;
        border: none;
        font-size: 12px;
        padding: 0 30px;
        border-radius: 20px;
        text-transform: uppercase;
        transition: all 250ms ease-in-out 0s;
        &:hover {
            background: ${Color('#10c694').darken(0.2).toString()};
        }
    }
`;
export const Item = styled.article`
    background: white;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.15);
    height: 300px;
    padding: 40px 20px 20px 20px;
    position: relative;
    transition: all 250ms ease-in-out 0s;
    dl {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 20px;
        dt {
            background: #ddd;
            opacity: 0;
            cursor: pointer;
            height: 31px;
            width: 30px;
            text-align: center;
            line-height: 24px;
            padding: 0 6px;
            border-radius: 3px;
            transition: all 250ms ease-in-out 0s;
        }
        dd {
            display: none;
            cursor: pointer;
            color: #b16060;
            background: #ffdede;
            margin: 0;
            width: 100px;
            padding: 0 12px;
            font-weight: bold;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            border-radius: 0px 3px 3px 3px;
            transition: all 250ms ease-in-out 0s;
            &:hover {
                background: #b10000;
                color: white;
            }
        }
        &:hover {
            dt {
                border-radius: 3px 3px 0px 0px;
            }
            dd {
                display: block;
            }
        }
    }
    &:hover {
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3);
        transform: scale(1.01);
        dl {
            dt {
                opacity: 1;
            }
        }
    }
    img {
        display: block;
        width: auto;
        height: 180px;
        margin: 0 auto;
        top: 40px;
        bottom: 0;
        left: 0;
        right: 0;
    }
    span {
        position: absolute;
        top: 20px;
        right: 20px;
        text-align: right;
        border: 1px solid #ddd;
        font-size: 14px;
        line-height: 21px;
        height: 21px;
        padding: 4px 8px;
        border-radius: 3px;
        color: #666;
    }
    h3 {
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        max-height: 42px;
        position: absolute;
        bottom: 60px;
        left: 25px;
        right: 25px;
        overflow: hidden;
    }
    a {
        cursor: pointer;
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        display: block;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        background: #10c694;
        height: 40px;
        color: white;
        border: none;
        font-size: 12px;
        width: calc(100% - 40px);
        border-radius: 20px;
        text-transform: uppercase;
        transition: all 250ms ease-in-out 0s;
        &:hover {
            background: ${Color('#10c694').darken(0.2).toString()};
        }
    }
`;
export const Main = styled.main`
    padding: 60px 0;
    display: flex;
    justify-content: center;
    > section {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        width: 960px;
        > ${Item} {
            margin: 0 15px 30px 15px;
            flex: 1 1 1;
            width: calc(33.33% - 30px - 40px);
        }
    }

    p {
        display: block;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
        color: #999;
        span {
            display: block;
            margin-top: 10px;
            cursor: pointer;
            text-decoration: underline;
            color: #10c694;
        }
    }
`;

export const Modal = styled.div`
    display: block;
    position: fixed;
    background: ${Color('#ffffff').alpha(0.7).toString()};
    top: ${props => props.show ? '0' : '100%'};
    opacity: ${props => props.show ? '1' : '0'};
    transition: opacity 250ms ease-in-out 0s;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    > div {
        background: #ffffff;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.15);
        display: block;
        width: 640px;
        height: auto;
        margin: 100px auto;
        position: relative;
        border-radius: 6px;
        h1 {
            display: block;
            border-bottom: 1px solid #dddddd;
            font-size: 21px;
            font-weight: normal;
            height: 60px;
            line-height: 60px;
            margin: 0;
            padding: 0 20px;
        }
        > button {
            position: absolute;
            right: 15px;
            top: 10px;
            cursor: pointer;
            background: #10c694;
            height: 40px;
            color: white;
            border: none;
            font-size: 21px;
            padding: 0 20px;
            border-radius: 20px;
            text-transform: uppercase;
            transition: all 250ms ease-in-out 0s;
            &:hover {
                background:     ${Color('#10c694').darken(0.2).toString()};
            }
        }
        & .form-label {
            display: block;
            font-size: 16px;
            margin-bottom: 8px;
            color: #a4a4a4;
        }
        & .form-control {
            padding: 8px 0px;
            margin-bottom: 10px;
            width: 100%;
            font-size: 16px;
            background: ${Color('#ebe2e1').alpha(0.5).toString()};;
            border: none;
            color: #b8b6b6;
            border-radius: 4px;
            outline: none;
            transition: all 0.2s ease;
        }
        & .form-control:hover {
            background: #404040;
        }
        & .form-control:focus {
            box-shadow: 0px 0px 0px 1px #0087ff;
        }
        & .form-group {
            display: block;
            margin-bottom: 20px;
        }
    }
`;

export const LoginPage = styled(Form)`
    width: max-content;
    margin: 40px auto;
    font-family: "Segoe UI", sans-serif;
    padding: 10px 28px;
    background: #151414;
    border-radius: 4px;
    border: 1px solid #302d2d;
    animation: popup 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    @keyframes popup {
        0% {
            transform: scale(0.2);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    h2 {
        text-align: center;
        font-size: 28px;
        margin-bottom: 20px;
        font-weight: 400;
        color: #e7e7e7;
    }
        
    }
    & Button {
        padding: 10px 18px;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 0px;
        background: #1a3969;
        width: 100%;
        border: none;
        border-radius: 4px;
        color: #f4f4f4;
        transition: all 0.2s ease;
    }
    & Button:hover {
        opacity: 0.9;
    }
    & Button:focus {
        box-shadow: 0px 0px 0px 3px black;
    }
    & .form-label {
        display: block;
        font-size: 16px;
        margin-bottom: 8px;
        color: #a4a4a4;
    }
    & .form-control {
        padding: 8px 0px;
        margin-bottom: 10px;
        width: 100%;
        font-size: 16px;
        background: #323131;
        border: none;
        color: #c7c7c7;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s ease;
    }
    & .form-control:hover {
        background: #404040;
    }
    & .form-control:focus {
        box-shadow: 0px 0px 0px 1px #0087ff;
    }
    & .form-group {
        display: block;
        margin-bottom: 20px;
    }
`;