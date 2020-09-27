# React와 Node.js로 만드는 Taskworld


## 📌 React 


## 📌 Node.js를 이용한 서버 구축

### 1. 리액트와 서버 연동

서버를 개발하기 전에, React와 Node.js Express 서버를 동시에 실행시키기 위해 클라이언트단과 서버단의 디렉터리를 분리하고 package.json의 scripts 설정을 다시 해준다.

#### ◽ 프로젝트 디렉터리 구조 변경

루트에 `client`와 `server` 디렉터리를 새롭게 생성 후 `client` 디렉터리로 기존에 작업했던 코드들을 전부 이동시킨다. 

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

#### ◽ package.json 설정

필요한 패키지들을 추가 후, `scripts` 설정을 수정한다. 

```js
{
  // ... 
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server/server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mongoose": "^5.10.7"
  },
  "devDependencies": {
    "concurrently": "^5.3.0",
    "nodemon": "^2.0.4"
  }
}
```
