import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  img {
    width: 250px;
    margin-right: 40px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
    line-height: 28px;
  }
`;

const AboutPage = () => {
  return (
    <Contents>
      <Content>
        <img
          src={process.env.PUBLIC_URL + 'resources/img/main-tasks.png'}
          alt="checklist"
        />
        <div className="inner-texts">
          <h2>Make Your Checklist</h2>
          <p>해야할 일들을 체크리스트로 만들어 보세요.</p>
          <p>기한일을 설정해 일의 효율성을 높일 수 있습니다.</p>
        </div>
      </Content>
      <hr />
      <Content>
        <img
          src={process.env.PUBLIC_URL + 'resources/img/main-team.png'}
          alt="team-work"
        />
        <div className="inner-texts">
          <h2>Share with Team</h2>
          <p>팀원들과 체크리스트를 공유하세요.</p>
          <p>체크리스트에 팀원들을 배정할 수 있습니다.</p>
        </div>
      </Content>
    </Contents>
  );
};

export default AboutPage;
