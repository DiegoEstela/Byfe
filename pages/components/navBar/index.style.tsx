import styled from "styled-components";



export const Header = styled.header`
    position: relative;
    max-width: 1200px;
    margin: 20px auto;
    padding: 10px;
    background-color: #0070f3;
    box-sizing: border-box;
    box-shadow: inset 0 0 35px 5px rgb(0 0 0 / 41%), inset 0 20px 1px 1px #0070f3,9px 13px 13px -4px rgba(0,0,0,0.44);
    border-radius: 18px;
    margin-left: auto;
    margin-right: auto;
    display: block;

    @media (max-width: 900px) {
        display: inline-block;
        width: 100%;

    }
    `
export const Logo = styled.div`
    height : 70px;
    padding: 0 30px;
    line-height: 60px;
    background: transparent;
    box-sizing: border-box;
    text-align: center;
    float: left;
    font-weight: 700;
`
export const ClearFix = styled.div`
 clear: both;
`

export const Nav = styled.ul<{ active: boolean }>`
    margin: 0;
    float: right;   
    text-align: center;
    position: relative;
    width: 40rem;
    height: 5rem;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 900px) {
        display: none;
        
    }
`
export const Nav_li= styled.li`
    display: flex;
    line-height: 80px;
    height: 100%;
    font-size: 16px;
    display: inline-block;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    cursor: pointer;

    :hover {
        width: 100px;
        text-decoration: none;
        border-radius: 30px;
        box-shadow: inset 0 0 35px 5px rgb(0 0 0, 0.25), inset 0 20px 1px 1px #0070f3,0 -2px 1px 0 rgba(0,0,0,0.25);
        background-color: #0070f3;
    }
 
    
`




