# react-dockerizing/Dockerfile

# # base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
# FROM node:18 AS build



# # 컨테이너 내부 작업 디렉토리 설정
# WORKDIR /app

# # app dependencies
# # 컨테이너 내부로 package.json 파일들을 복사
# COPY package*.json ./

# # package.json 및 package-lock.json 파일에 명시된 의존성 패키지들을 설치
# RUN npm install

# # 호스트 머신의 현재 디렉토리 파일들을 컨테이너 내부로 전부 복사
# COPY . .

# # npm build
# RUN npm run build

# prod environment
# FROM nginx:1.25.2

# # 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
# COPY --from=build /app/build /usr/share/nginx/html

# # 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
# RUN rm /etc/nginx/conf.d/default.conf

# # custom 설정파일을 컨테이너 내부로 복사한다.
# COPY nginx/nginx.conf /etc/nginx/conf.d

# # 컨테이너의 80번 포트를 열어준다.
# EXPOSE 80

# # nginx 서버를 실행하고 백그라운드로 동작하도록 한다.
# CMD ["nginx", "-g", "daemon off;"]



# 1단계: 노드.js를 사용하여 React 앱 빌드
FROM node:18 AS build

# 2단계: Nginx를 사용하여 React 앱 제공
FROM nginx:1.25.2

# 컨테이너 내부에 /app 디렉토리를 만듭니다.
RUN mkdir /app
WORKDIR /app

# 호스트의 React 앱 결과물을 컨테이너 내부의 /app 디렉토리로 복사합니다.
COPY ./build /app

# Nginx의 기본 설정 파일을 삭제
RUN rm -rf /etc/nginx/conf.d/default.conf
# 컨테이너 내부의 Nginx 설정 파일을 복사
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY ./build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# # 2단계: Nginx를 사용하여 React 앱 제공
# FROM nginx:1.25.2

# RUN mkdir /app
# WORKDIR /app
# COPY ./build .

# # Nginx의 기본 설정 파일을 삭제
# RUN rm -rf /etc/nginx/conf.d/default.conf
# # 컨테이너 내부의 Nginx 설정 파일을 복사
# COPY nginx/nginx.conf /etc/nginx/conf.d

# # 첫 번째 단계에서 빌드한 React 앱 빌드 결과물을 두 번째 단계로 복사
# COPY --from=build /app /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]