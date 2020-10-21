import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import * as api from '../../api/members';

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button``;

const Input = styled.input``;

const LoginPage = ({ history }) => {
  const [member, setMember] = useState({
    email: '',
    password: '',
  });
  const { email, password } = member;
  const emailInput = useRef();
  const pwdInput = useRef();

  const onChange = e => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    api
      .login(member)
      .then(data => {
        if (!data.emailCheck) {
          alert('유효한 이메일이 아닙니다.');
          emailInput.current.focus();
        } else {
          if (!data.pwdCheck) {
            alert('유효한 비밀번호가 아닙니다.');
            pwdInput.current.focus();
          } else window.location.href = '/ws';
        }
      })
      .catch(err => alert('로그인 실패!'));
  };

  return (
    <LoginBlock>
      <h2>로그인</h2>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          ref={emailInput}
          placeholder="Enter your email"
          autoFocus
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          ref={pwdInput}
          placeholder="Enter your password"
        />
        <Button type="submit">로그인</Button>
      </Form>
    </LoginBlock>
  );
};

export default LoginPage;
