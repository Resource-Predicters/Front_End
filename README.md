<h1 align="center"> 원자재 Ai 가격예측서비스 프로젝트 프론트엔드 💻 </h1>

## 🛠️ 기술 스택

**Front Tool** <br/>
<img src="https://img.shields.io/badge/React.js-61DAFB?style=round&logo=React&logoColor=white" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=round&logo=Axios&logoColor=white" /> <img src="https://img.shields.io/badge/Redux-764ABC?style=round&logo=Redux&logoColor=white" /> 

**Design Library** <br/>
<img src="https://img.shields.io/badge/Mui-007FFF?style=round&logo=Mui&logoColor=white" /> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=round&logo=Bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Apexcharts-00A4FF?style=round" /> 

**Cooperation Tool** <br/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=round&logo=Slack&logoColor=white" /> <img src="https://img.shields.io/badge/Notion-000000?style=round&logo=Notion&logoColor=white" /> <img src="https://img.shields.io/badge/Discord-5865F2?style=round&logo=Discord&logoColor=white" /> <img src="https://img.shields.io/badge/GoogleDrive-4285F4?style=round&logo=GoogleDrive&logoColor=white" /> 
<img src="https://img.shields.io/badge/Git-F05032?style=round&logo=Git&logoColor=white" /> <img src="https://img.shields.io/badge/Github-181717?style=round&logo=Github&logoColor=white" />



## 🤹🏻 기술 스택 선정 이유
- React :
    - React는 가상 DOM을 사용하여 별도의 디버깅없이 변경사항만 업데이트 주므로 성능 향상이 가능합니다.
    - React는 컴포넌트 기반으로 코드의 재사용성이 높고 유지보수가 용이합니다. 
    - React는 관련 자료들이 많고, 다양한 라이브러리, 패키지 등을 가지고 있어 개발에 많은 도움이 됩니다. 
- axios :
    - Axios는 HTTP요청을 보내고, 데이터를 서버로 보내거나 가져오는 작업을 쉽게 수행할 수 있습니다.
- Redux :
    - Redux는 상태관리를 쉽게 해주고, props를 쓰지않고 컴포넌트 간의 데이터를 공유하거나 상태를 전달하는데 용이합니다.
  


## 📌 프로젝트 목표

리액트를 기본으로 외부 데이터를 불러와 원자재별 차트 현황을 한 눈에 확인할 수 있습니다. 또한 상세보기를 통해 원자재별 상세 차트와 관련 뉴스를 확인할 수 있습니다.
불러온 외부 가격데이터를 AI가 학습하여 미래 가격을 예측하여 결과값을 차트로 확인할 수 있는 웹서비스를 제공합니다. 



## 📄 UI/UX 설계도
<center>
    <h4>메뉴 구조도</h4>
    <img src="img/메뉴 구성도 (1).jpg" />
</center>

<br/>

<center>
    <h4>원자재 현황차트</h4>
    <img src="img/화면설계도(웹) 1024_page-0001.jpg" />
</center>

<br/>

<center>
    <h4>상세정보 페이지</h4>
    <img src="img/화면설계도(웹) 1024_page-0002.jpg" />
</center>

<br/>

<center>
    <h4>가격예측 페이지</h4>
    <img src="img/화면설계도(웹) 1024_page-0003.jpg" />
</center>

<br/>

<center>
    <h4>로그인 페이지</h4>
    <img src="img/화면설계도(웹) 1024_page-0004.jpg" />
</center>

<br/>

<center>
    <h4>회원가입 페이지</h4>
    <img src="img/화면설계도(웹) 1024_page-0005.jpg" />
</center>

<br/>

<center>
    <h4>Flow Chart</h4>
    <img src="img/FlowChart.jpg" />
</center>

<br/>

## 🎥 시연영상

<br/>

## 🔍 Overview

### 1. 원자재 현황 페이지

<center>
    <img src="./img/메인1025.JPG" />
</center>
<p>👉원자재 가격에 대한 추이를 한 눈에 볼 수 있도록 Axios로 가져온 원자재 원천데이터를 불러와</p>
<p>Apexcharts 라이브러리를 사용하여 니켈, 리튬, 철스크랩, 코발트의 총 4개의 차트로 현황 내역을 제공합니다.</p>

<br/>

### 2. 상세 정보 페이지

<center>
    <img src="./img/상세1025.JPG" />
</center>
<p>👉드롭박스 버튼으로 원자재 종류와 원하는 기간을 선택하면</p>
<p>해당 자재 차트와 관련 뉴스 기사를 제공합니다.</p>

<br>

### 3. AI 가격예측 페이지

<center>
    <img src="./img/예측.JPG" />
</center>
<p>👉현재 일자 기준으로 AI모델을 적용한 7일 단위의 결과값을 차트로 제공합니다.</p>

<br/>

### 4. 사용자 회원 가입 및 로그인 페이지

<center>
    <img src="./img/로그인1025.JPG" />
    <img src="./img/회원가입1025.JPG" />
</center>
<p>👉JWT Token 방식 기반으로 해당 ID의 고유 Token을 인증하여 로그인 성공실패를 좌우합니다.</p>
<p>새로운 사용자라면 회원가입을 통해 사용자로 등록될 수 있습니다.</p>

<br/>
