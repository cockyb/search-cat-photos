# 고양이 사진 검색 사이트
프로그래머스 과제관에서 제공하는 [과제](https://programmers.co.kr/skill_check_assignments/4#_=_)입니다. 프로그래머스 과제관에서는 웹 vscode를 이용해 과제 제출이 끝나면 리팩토링이 불가능합니다. 제출 이후에도 지속적인 리팩토링을 위해 생성한 프로젝트입니다. 이용하고 싶으신 분은 main 브랜치만 클론하는 것을 권장합니다.

### 설치전 구성 사항
- Node v14 이상의 런타임 환경(npm 포함)
- 해당 프로젝트는 webpack 번들러 세팅이 되어 있습니다. (webpack은 프로그래머스 과제의 요구사항이 아닙니다.)

### 프로젝트 설치
```bash
yarn
```
package.json에 명시된 package들을 설치하는 절차입니다.

### 실행
- 과제의 요구사항은 아니지만 webpack 세팅이 되어있습니다. 
```bash
yarn dev
```
webpack-dev-server를 실행합니다. 브라우저에서 [http://loacalhost:5000](http://loacalhost:5000)을 여세요. 페이지는 프로젝트 수정이 있다면 리로드 됩니다.


### 빌드
```bash
yarn build
```
build 스크립트를 통해 빌드를 진행합니다. 산출물은 dist 디렉토리에 bundle.js파일로 번들링 됩니다.

### 테스트

### 더 알아보기
- 요구사항에 따라 [문제]()들을 해결해 나가시면 됩니다.
- 웹팩에 대한 이해를 위해서 [웹팩 공식문서](https://webpack.js.org/)를 참고해 주세요.
- 테스팅 라이브러리 [jest](https://jestjs.io/)에 대해 알아보기