import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: #76787A;
    padding-bottom: 5px;
`;

export const Span = styled.span`
    color: #76787A;
    padding-bottom: 5px;
    text-align: center;
    padding-bottom: 1.5em;
`;

export const Title = styled.h2`
    font-weight: normal;
    color: #2a2a29;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SpanMessageError = styled.span`
    text-align: center;
    font-size: 14px;
    color: #BC3633;
`;