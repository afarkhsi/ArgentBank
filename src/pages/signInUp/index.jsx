import SignInModal from '../../components/SignInModal/SignInModal';
import styled from 'styled-components';

const SignInContainer = styled.div`
  flex: 1;
`;
const SignIn = () => {
  return (
    <SignInContainer className="SignIn-Container">
      <SignInModal />
    </SignInContainer>
  );
};

export default SignIn;
