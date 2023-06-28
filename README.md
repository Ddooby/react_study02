<!-- 
# React_Study02
React 공부용 프로젝트

2023.06
롯데면세점 프로젝트시 LG CNS 에서 협력업체 교육을 들어야해서 들어간 사이트에서 React 강의 영상이 있길래 들어봄.

SingleX 배움마당 동영상 강의 (Feat. React 기본)

[ 1강 ]
    - '모든 랜더링을 클라이언트 단에서 처리하자' 의 취지로 리액트가 대두되기 시작.
    - 컴포넌트 단위로 개발을 하게되면 각각의 의존성을 최소화 하게 되어 유지보수, 재사용성 등의 이점을 얻을 수가  있다.
    - React API 사이트에서 '리액트로 생각하기' 먼저 읽어보고 이해해봐라.

    [ 리액트 특징 ]
    - 선언적인 UI 프로그래밍
    - JSX 라는 문법을 통해 JS 소스 안에 xml 문법이 들어가있다.
    - JSX 덕분에 코드가 직관적이고, 예측가능하여 디버깅이 쉽다.
    - JSX 는 Babel 을 통하여 JS 파일로 변환된다.

    [ JSX 의 제약 ]
    - HTML 보다는 JS 에 가깝기 때문에, class 대신 className 을 써야한다.
    - HTML Attribute 들도 camel case 로 표기해야한다.
    - tabindex -> tabIndex, onchange -> onChange
    - 모든 태그는 닫아야 한다. 

    [ Learn Once, Write Anywhere ]
    - 상태에 기반한 UI 의 표현 방식이기 때문에 해당 표현 방식을 해석해서 그려주는 브릿지만 있다면 웹 플랫폼 이외에서도 랜더링이 가능
    - 대표적으로 React-Native 를 통한 Android, iOS, Desktop 등 네이티브 앱 개발

    [ React 는 Library 이다 ]
    - Vue 나 Angular 는 프레임워크 인데 반해, React 는 라이브러리이다.
    - 프레임워크는 라우팅을 비롯한 웹앱 개발에 필요한 대부분의 기능이 포함되어 있다.
    - React 는 view 를 그리는 부분만 담당하는 라이브러리이기 때문에 라우터를 비롯해 다양한 도구를 직접 선택해서 설치해야한다. (그래서 초기 진입장벽이 높다.)

    [ 실습 ]
    - 프로젝트 생성하고자하는 폴더로 cmd 이동 후, npx create-react-app (프로젝트이름) >> React 개발을 위한 여러 패키지들을 설치한다.
    - npm start >> 서버실행
    - localhost:3000 >> IE 에서는 잘 안된다. 크롬이나 파이어폭스 추천.

    [ Q&A ]
    - React Dev Tools 를 크롬에 설치를 하면 React 소스 디버깅이 가능하다.

[ 2강 ]
    - React 의 컴포넌트와  state, 그리고 props
    - Greeting.jsx
    - import React from 'react'
    - export default class Greeting extends React.Component {
      render() {
        return (<div>안녕하세요!</div>)
      }
    } 

    - props
    - 컴포넌트에 파라미터를 넘기고 싶을때 사용
-->