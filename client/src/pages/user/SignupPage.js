import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import * as api from '../../api/members';

const SignupBlock = styled.div`
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

const SignupPage = ({ history }) => {
  const [member, setMember] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });
  const { email, password, passwordConfirm, name } = member;
  const emailInput = useRef();

  const onChange = e => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // 유효성 검사 추가하기
    api
      .signup(member)
      .then(data => {
        if (data.success) {
          alert('회원가입 성공!');
          history.push('/');
        } else if (data.duplicate) {
          alert('이메일 중복!');
          emailInput.current.focus();
        }
      })
      .catch(err => alert('회원가입 실패!'));
  };
  return (
    <SignupBlock>
      <h2>회원가입</h2>
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
          placeholder="Enter your password"
        />
        <Input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          placeholder="Confirm your password"
        />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />
        <Button type="submit">가입하기</Button>
      </Form>
    </SignupBlock>
  );
};

export default SignupPage;
