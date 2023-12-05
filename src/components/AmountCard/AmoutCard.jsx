import styled from 'styled-components';
import './style.css';

const AmoutCardContainer = styled.section``;
const AmoutCardWrapper = styled.div``;
const AmoutCardContentWrapper = styled.article``;
const AmoutCardTitle = styled.h3``;
const AmoutCardValue = styled.span``;
const AmoutCardDescription = styled.span``;
const AmoutCardViewButtonWrapper = styled.article``;
const AmoutCardViewButton = styled.button``;

const AmountCard = () => {
  return (
    <AmoutCardContainer>
      <AmoutCardWrapper className="account">
        <AmoutCardContentWrapper className="account-content-wrapper">
          <AmoutCardTitle className="account-title">
            Argent Bank Checking (x8349)
          </AmoutCardTitle>
          <AmoutCardValue className="account-amount">$2,082.79</AmoutCardValue>
          <AmoutCardDescription className="account-amount-description">
            Available Balance
          </AmoutCardDescription>
        </AmoutCardContentWrapper>
        <AmoutCardViewButtonWrapper className="account-content-wrapper cta">
          <AmoutCardViewButton className="transaction-button">
            View transactions
          </AmoutCardViewButton>
        </AmoutCardViewButtonWrapper>
      </AmoutCardWrapper>

      <AmoutCardWrapper className="account">
        <AmoutCardContentWrapper className="account-content-wrapper">
          <AmoutCardTitle className="account-title">
            Argent Bank Savings (x6712)
          </AmoutCardTitle>
          <AmoutCardValue className="account-amount">$10,928.42</AmoutCardValue>
          <AmoutCardDescription className="account-amount-description">
            Available Balance
          </AmoutCardDescription>
        </AmoutCardContentWrapper>
        <AmoutCardViewButtonWrapper className="account-content-wrapper cta">
          <AmoutCardViewButton className="transaction-button">
            View transactions
          </AmoutCardViewButton>
        </AmoutCardViewButtonWrapper>
      </AmoutCardWrapper>

      <AmoutCardWrapper className="account">
        <AmoutCardContentWrapper className="account-content-wrapper">
          <AmoutCardTitle className="account-title">
            Argent Bank Credit Card (x8349)
          </AmoutCardTitle>
          <AmoutCardValue className="account-amount">$184.30</AmoutCardValue>
          <AmoutCardDescription className="account-amount-description">
            Current Balance
          </AmoutCardDescription>
        </AmoutCardContentWrapper>
        <AmoutCardViewButtonWrapper className="account-content-wrapper cta">
          <AmoutCardViewButton className="transaction-button">
            View transactions
          </AmoutCardViewButton>
        </AmoutCardViewButtonWrapper>
      </AmoutCardWrapper>
    </AmoutCardContainer>
  );
};

export default AmountCard;
