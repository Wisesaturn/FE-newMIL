import styled from 'styled-components';
import theme from '@/Styles/theme';
import { IDCheckBoxContainer } from '@/Components/Form/LoginForm/style';
import { LoginContainer } from '@/Pages/Login/style';

export const InfoFormContainer = styled.form`
  ${theme.common.flexCenterColumn};
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  ${theme.common.flexCenter};
  width: 100%;
  button {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
      margin-left: 1rem;
    }
  }
`;

export const CheckBoxContainer = styled(IDCheckBoxContainer)`
  padding-bottom: 1rem;
  align-self: end;
`;

export const SignUpContainer = styled(LoginContainer)`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
`;

export const InfoContainer = styled.article`
  border: 1px solid white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;

  text-align: justify;
  background-color: white;
`;

export const Title = styled.h2`
  align-self: baseline;
  padding-bottom: 1rem;
`;
