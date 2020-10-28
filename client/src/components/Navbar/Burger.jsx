import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const Wrapper = styled.div`
    width: 2em;
    height: 2em;
    display: none;
    position: absolute;
    left: 80%;
    top: 3%;
    border-radius: 50% 50%;
    padding: 5px;
    div{
        width: 15.5%;
        height: 14.4%;
        background-color: ${({open}) => open ? "#e0e0e0": "black"};
        border-radius: 50%;
        transform-origin: .7px;
        transition: all .3s;
        /* &:nth-child(1){
            transform: ${({open}) => open ? "rotate(45deg)": "rotate(0deg)"};
        }
        &:nth-child(2){
            transform: ${({open}) => open ? "translateX(100%)": "translateX(0)"};
            opacity: ${({open}) => open ? "0" : "1"};

        }
        &:nth-child(3){
            transform: ${({open}) => open ? "rotate(-45deg)": "rotate(0deg)"};
        } */
    }
    &:hover{
        cursor: pointer;
    }    
    @media (max-width: 850px){
        display: flex;
        flex: 0.8;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        background-color: ${({open}) => open ? "#f0f0f0" : "white"}
    }
    
`



function Burger() {
    const [open, setOpen ] = useState(false)


    return (
        <div>
            <Wrapper open={open} onClick = {() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </Wrapper>
            <RightNav open={open} />

        </div>
    )
}

export default Burger
