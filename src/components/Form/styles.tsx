import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  max-width: 500px;
`;

export const FormHeader = styled.header`
  width: 400px;
`;

export const TransportRadios = styled.div``;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
