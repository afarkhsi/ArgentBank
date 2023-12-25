import styled from 'styled-components';
import './style.css';

const AmoutCardWrapper = styled.div``;
const AmoutCardContentWrapper = styled.article``;
const AmoutCardTitle = styled.h3``;
const AmoutCardValue = styled.span``;
const AmoutCardDescription = styled.span``;
const AmoutCardViewButtonWrapper = styled.article``;
const AmoutCardViewButton = styled.button``;

// AMOUNT ACCOUNT COMPONENT
const AmountCard = ({ title, value, description }) => {
  return (
    <AmoutCardWrapper className="account">
      <AmoutCardContentWrapper className="account-content-wrapper">
        <AmoutCardTitle className="account-title">{title}</AmoutCardTitle>
        <AmoutCardValue className="account-amount">{value}</AmoutCardValue>
        <AmoutCardDescription className="account-amount-description">
          {description}
        </AmoutCardDescription>
      </AmoutCardContentWrapper>
      <AmoutCardViewButtonWrapper className="account-content-wrapper cta">
        <AmoutCardViewButton className="transaction-button">
          View transactions
        </AmoutCardViewButton>
      </AmoutCardViewButtonWrapper>
    </AmoutCardWrapper>
  );
};

export default AmountCard;
