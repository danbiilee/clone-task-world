# React와 Node.js로 만드는 Taskworld


## 📌 React 


## 📌 Node.js를 이용한 서버 구축

### 1. 리액트와 서버 연동

#### ◽ 프로젝트 디렉터리 구조 변경
서버를 개발하기 전에, React와 Node.js Express 서버를 동시에 실행시키기 위해 클라이언트단과 서버단의 디렉터리를 분리하고 package.json의 scripts 설정을 다시 해준다.

먼저 루트에 `client`와 `server` 디렉터리를 새롭게 생성 후 `client` 디렉터리로 기존에 작업했던 코드들을 전부 이동시킨다. 

최종적으로 프로젝트 루트 구조는 아래와 같이 변경된다. 

```
📦clone-task-world
 ┣ 📂client
 ┣ 📂server
 ┃ 📜.gitignore
 ┃ 📜package.json
 ┃ 📜yarn.lock
 ┗ 📜README.md
```

#### ◽ 패키지 설치 및 package.json 설정

서버 개발을 위한 패키지를 설치한다. 

- `express`: 웹 서버를 구축할 수 있는 Node.js 기반의 프레임워크.
- `mongoose` 
  - MongoDB기반 ODM(Objet Data Mapping) 라이브러리. 
  - `ODM`은 DB와 객체지향 프로그래밍 언어 사이에 호환되지 않는 데이터를 변환하는 프로그래밍 기법으로, **MongoDB에 있는 데이터를 JS 객체로** 사용할 수 있도록 해준다. 
- `body-parser`
  - POST Request의 본문을 해석해주는 미들웨어.
  - 보통 **폼 데이터나 AJAX요청**의 데이터를 처리한다. 
  - express에도 `body-parser`가 내장되어 있으나, 내장된 `body-parser`는 JSON과 URL-encoded 형식의 본문 외에 Raw, Text 형식의 본문은 해석할 수 없다. 

```js
$ yarn add express mongoose body-parser
```

그리고 서버 실행을 위한 패키지를 설치한다. 

- `nodemon`: 코드 변경시 자동으로 서버를 재시작해주는 패키지.
- `concurrently`:

`--dev`: 패키지를 devDependencies 에 추가해주는 명령어 

```js
$ yarn add nodemon concurrently --dev
```