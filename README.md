<!-- 
# React_Study02
React 공부용 프로젝트

2023.06

//2023.06.28
롯데면세점 프로젝트시 LG CNS 에서 협력업체 교육을 들어야해서 들어간 사이트에서 React 강의 영상이 있길래 들어봄.

SingleX 배움마당 동영상 강의 (Feat. React 기본)

[ 1강 ] [ 리액트와 기본구조 ]
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

[ 2강 ] [ props, state, 컴포넌트 라이프 사이클 ]
    - React 의 컴포넌트와  state, 그리고 props
    - 컴포넌트 들은 보통 확장자 jsx 라고 한다. 일반 스크립트 파일은 확장자를 js 로 해서 구분해서 볼 수 있게끔한다.
    - jsx, js 확장자 둘 다 구동하는데에는 이상이 없다.
    - Greeting.jsx
    - import React from 'react'
    - export default class Greeting extends React.Component {
    	render() {
        	return (<div>안녕하세요!</div>)
    	}
    } 

    - props
    - 컴포넌트에 파라미터를 넘기고 싶을때 사용
//2023.06.29
    - 정적인 String 은 "" 로 감싸고, 변수나 숫자인 경우에는 {} 로 감싼다.

	- props 는 읽기 전용이다.
	- ㄴ 바껴도 React 는 바뀐지 모릅니다.

	- 여러 컴포넌트들 조합해서 합성해보기

//2023.07.05
	- this.props.children 을 이용하면 컴포넌트의 모든 요소에 접근이 가능하다.

	- state
	- 컴포넌트는 state 라는 개념으로 변수를 저장할 수 있다.
	- class component 의 경우 setState 함수를 통해 자신의 상태가 변경 되었음을 알리고, 이를 통해 변경된 부분을 다시 랜더링한다.

	- constructor 를 정의해야합니다.
	- props 를 받고, super(props) 를 호출해주어야 합니다.
	- this.state 로 컴포넌트에서 쓸 state 를 정의합니다.

	- state 를 직접 바꾸지 마세요.
	- react 는 setState 함수가 호출되어야만 state 의 변경을 처리합니다.

	- state 가 같을때에도 재렌더링이 되는 현상이 있다.
	- React.Component 대신 React.PureComponent 를 사용하면된다.
	- PureComponent 내에선 state 와 props 를 얕은 비교를 하여 값이 달라졌을 경우에만 렌더링이 되도록 미리 처리 되어있습니다.
	- PureComponent 에는 shouldComponentUpdate 가 구현이 되어있다고 보면 된다.

// 2023.07.06
	- component 는 function component 와 class component 두 가지 유형이 있다.
	- function component 최적화하기
	- 함수 컴포넌트의 경우  memoization 을 지원합니다. React 컴포넌트를 순수함수 형태로 작성할 수 있기 때문이죠.

	- function component 가 class component 보다 더 익숙하고 보기 편하다.
	- 다만 function component 에서는 class component 보다 제약사항이 많았는데, 최근에는 react hook 이나 다른 요소들로 인하여
	- 그 부분이 많이 해소가 되었다. (Feat. class component 의 State 는 function component 에서는 useState 로 사용할 수 있다.) 

	- 꼭 필요한 경우가 아니면 state 사용은 자제하고, 상위 컴포넌트에서 내려 받아서 사용해라.
	- 정말 특별한 경우가 아니면 위에서 받은 props 를 state 에 넣고 사용하지 마라.
	- ㄴ props 변경에 따른 state 갱신을 빼먹으면 나중에 디버깅이 골치아파진다.

	- [ Tips ]
	- function component 를 적극 활용해라.
	- ㄴ 'this' keyword 사용에서 해방된다.
	- ㄴ 코드가 간결해진다.
	- ㄴ function component 를 쓸 경우 props 를 통째로 받지말고 object destucturing 문법으로 쪼개서 받으면 편하다.
	- ㄴ (props), {props.currentRow} => ({ currentRow }), { currentRow } 
	- ㄴ this 없이 바로 사용가능
	
// 2023.07.16
[ 3강 ] [ ES6, TypeScript, React 특징 ]
	- CSS Module
	- ㄴ CSS 를 모듈화하여 사용하는 방식, [css file name].module.css 형식으로 이름을 지어서 씀.
	- 이후 컴포넌트에서 style 에 연결해서 사용

	- TypeScript
	- JavaScript + Type
	- VSCode 와 TypeScript 가 호환이 좋다.
	- JavaScript 보다 타이핑을 쫌 해야되서 손이 좀 더 많이 가 적응하기 힘들 수도 있지만 나중에 유지보수도 좋고, 런타임 에러로 잡을 것을 컴파일 단계에서 잡을 수 있어서 좋다.

[ 4강 ] [ 빌드센터의 리액트 활용법 ]
	- create-react-app 기반의 앱인 경우 npm run build 의 결과물(build 아래 생성된 파일들)을 웹서버에 배포하면 끝.
	- 참고 : netlify

https://blog.roto...
-->