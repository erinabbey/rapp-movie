   
    import styled from 'styled-components'
    import {NavLink as Link} from 'react-router-dom'
    import {FaPizzaSlice} from  'react-icons/fa'


    // nhu cai head, bao boc bar, link, p chua trong no
   export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weigth: 700;

    `;
// thang lz nay hien thi cai deo gi do ma click vao thi chuyen di dau do
    export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
    &:hover{
        color: #ff5400;
        text-decoration: none;
    }
    `;
// icon di chung voi menu ngay tren dau no, thay doi kich thuoc man hinh thi p va icon khong thay doi vi tri
    export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
    `;
// cai nay la show icon
    export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
    
    `;