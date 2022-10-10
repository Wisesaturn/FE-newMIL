import { Button } from '@/Components/Button';
import React, { useState } from 'react';
import { Input } from '@/Components/Form';
import axios from 'axios';
import { SignUpFormContainer } from './style';
import SignUpFormProps from './types';

const SignUpForm = ({ select }: SignUpFormProps) => {
  const [values, setValues] = useState({
    userId: '',
    email: '',
    name: '',
    password: '',
    studentId: '',
    identity: '',
    company: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setValues({
      ...values,
      [target.id]: target.value,
    });
  };

  const signUpFunc = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
      userId: `${values.userId}`,
      password: `${values.password}`,
      email: `${values.email}`,
      name: `${values.name}`,
      studentId: `${values.studentId}`,
      identity: `${values.identity}`,
      company: `${values.company}`,
    });
  };
  return (
    <>
      {select && (
        <SignUpFormContainer>
          <Input
            onChange={handleChange}
            value={values.userId}
            label="아이디"
            id="userId"
            type="text"
            placehd="example"
            autoFocus
            required
          />
          <Input
            onChange={handleChange}
            value={values.password}
            label="비밀번호"
            id="password"
            type="password"
            placehd="********"
            min="6"
            required
          />
          <Input
            label="이메일"
            onChange={handleChange}
            value={values.email}
            id="email"
            type="email"
            placehd="example@ajou.ac.kr"
            required
          />
          <Input
            label="이름"
            onChange={handleChange}
            value={values.name}
            id="name"
            type="text"
            placehd="김태석"
            required
          />
          <Input
            label="학번"
            onChange={handleChange}
            value={values.studentId}
            id="studentId"
            type="text"
            placehd="2021XXXXX"
            required
          />
          <Button type="submit" onClick={() => signUpFunc()}>
            회원가입
          </Button>
          <Button type="button" url="/">
            뒤로가기
          </Button>
        </SignUpFormContainer>
      )}

      {!select && (
        <SignUpFormContainer>
          <Input
            onChange={handleChange}
            value={values.userId}
            label="아이디"
            id="userId"
            type="text"
            placehd="example"
            autoFocus
            required
          />
          <Input
            onChange={handleChange}
            value={values.password}
            label="비밀번호"
            id="password"
            type="password"
            placehd="********"
            min="6"
            required
          />
          <Input
            label="이메일"
            onChange={handleChange}
            value={values.email}
            id="email"
            type="email"
            placehd="example@ajou.ac.kr"
            required
          />
          <Input
            label="이름"
            onChange={handleChange}
            value={values.name}
            id="name"
            type="text"
            placehd="김태석"
            required
          />
          <Input
            label="학번"
            onChange={handleChange}
            value={values.studentId}
            id="studentId"
            type="text"
            placehd="2021XXXXX"
            required
          />
          <Input
            label="회사"
            onChange={handleChange}
            value={values.company}
            id="company"
            type="text"
            placehd="미디어인더스트리"
            required
          />
          <Button type="submit" onClick={() => signUpFunc()}>
            회원가입
          </Button>
          <Button type="button" url="/">
            뒤로가기
          </Button>
        </SignUpFormContainer>
      )}
    </>
  );
};

export default SignUpForm;
