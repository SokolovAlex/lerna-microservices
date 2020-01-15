
import styled from 'styled-components';
import startImg from '../../images/brokerage.start.jpg';

export const MarketsInfoBlock = styled.div`
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    min-height: 256px;
    margin-bottom: 8px;
    background: url(${startImg}) center/cover no-repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


export const MarketsInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: #f3f3f3;
    padding: 0 16px;
`;

export const TotalBalance = styled.div`
`;

export const CurrencyToggle = styled.div`

`;

export const Currencies = styled.div`
    display: inline-flex;
    overflow-x: auto;
    max-width: 100%;
`;

export const Currency = styled.div<{active: boolean}>`
    cursor: pointer;
    padding: 0 16px;
    font-size: 18px;
    font-weight: 400;

    ${props => props.active && `
        border-bottom: 3px solid green;
    `}
`;
