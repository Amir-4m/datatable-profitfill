import styled from 'styled-components';

export const BaseButton = styled.button`
  color: #fff;
  text-align: center;
  letter-spacing: -.02em;
  border-radius: 0.75rem;
  flex-direction: row;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  transition: background-color .3s cubic-bezier(.6, .6, 0, 1);
  &:hover {
    background-color: #000;
    border: 1px solid #000;
   }
`
export const GreenButton = styled(BaseButton)`
  color: #fff;
  background-color: #18a68e;
  border: 1px solid #18a68e;
`
export const WhiteButton = styled(BaseButton)`
  color: #000;
  background-color: #fff;
`


export const BlackButton = styled(BaseButton)`
  background-color: #000;
  transition: background-color .3s;
  &:hover {
    color: #fff;
    background-color: #18a68e;
    border: 1px solid #18a68e;
   }
`
