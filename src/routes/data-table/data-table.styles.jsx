import styled from 'styled-components';

export const DataTableContainer = styled.div`
 
`

export const DataTableHeader = styled.div`
  background: #203243;
  width: 100%;
  & h1 {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: #fff;
    letter-spacing: -.04em;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Quicksand, sans-serif;
    font-size: 4rem;
    line-height: 1.2;
    width: fit-content;
    margin: auto;
    padding-top: 70px;
    }
    & span {
    color: #46b8a5;
    }
    & p {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    margin: auto;
    text-align: center;
    padding-top: 20px;
    }
`

export const HeaderImage = styled.img`  
width: 59%;
`
export const ImageContainer = styled.div`  
`


export const DataTableContent = styled.div`
& h1 {
    font-size: 2.2rem;
    line-height: 1.2;
    width: fit-content;
    margin: auto;
    padding-top: 70px;
}
& p {
    font-size: 1.7rem;
    line-height: 1.2;
    width: fit-content;
    margin: auto;
    padding: 35px 0;
}

`