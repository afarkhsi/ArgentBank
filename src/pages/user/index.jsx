import styled from 'styled-components';
import AmountCard from '../../components/AmountCard/AmoutCard';

const UserContainer = styled.div``;

const UserPage = () => {
  return (
    <UserContainer className="bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <AmountCard />
    </UserContainer>
  );
};

export default UserPage;
