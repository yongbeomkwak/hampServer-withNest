# Hamp 개인 서버 프로젝트

## 0. Before Installation

- 노드 설치
- 타입스크립트 설치

- Mysql
  mysql.server start : 서버 시작
  mysql.server stop : 서버 종료

## 1.Installation

### nest cli 설치하자

```bash
npm install -g @nestjs/cli
```

### 프로젝트 생성

```bash
nest n
```

### 클래스 유효성 확인을 위한 패키지

```bash
npm i class-validator class-transformer
```

- 예시

  ```ts
  import { isString } from "class-validator";
  @IsString();
  ```

### DTO 타입을 변환시키고 사용할 수 있게 해주는 패키지

```bash
npm i @nestjs/mapped-types
```

### 스웨거 설치

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

### mysql 설치
```bash
yarn add @nestjs/typeorm typeorm mysql2
```

## 2.구조

### 0. Module

- 가장 상위에 있음
- 프로젝트에서 사용하는 모든것을 미리 정의
- import 역시 이 곳에서
- 생성 명령어
  > nest g mo

### 1. Controller

- express의 router 같은 역할

  - url을 당담
  - 해당 url에 관한 함수를 실행 담당

- 생성 명령어
  > nest g co

### 2. Service

- 맵핑된 컨틀롤러의 실제 동작 내용

- 생성 명령어
  > nest g s

## 2022.11.10

- [스웨거 적용 및 테스트](https://jhyeok.com/nestjs-swagger/)
- 모바일 접속 방법
  - 같은 와이파이에 접속한 후
  - 해당 명령어를 입력하여 ip주소를 알아낸 후 해당 ip:port로 접속

```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

## 2022.11.26

- app.module.ts

  - sqlite 사용을 위한 imports 설정

- user.entity.ts

  - 엔티티 생성
  - 옵션

    ```typescript
    @Entity - 해당 클래스는 DB user 테이블과 매핑시킬 때 사용

    @Unique - 유니크 컬럼을 설정할 때 사용(배열 형태로 원하는 컬럼 값을 지정하면 된다)

    @PrimaryGeneratedColumn - uuid 값을 지정하면 해당 컬럼은 uuid 타입으로 설정이 되며, Auto Increment 타입으로 설정

    Auto_Increment : @PrimaryGeneratedColumn()

    UUID: @PrimaryGeneratedColumn('uuid')


    @Column - 해당 클래스 속성과 DB user 테이블 컬럼과 매핑시킬 때 사용

    @CreateDateColumn - 데이터가 생성되는 시간을 기록할 때 사용

    @UpdateDateColumn - 데이터가 수정되는 시간을 기록할 때 사용

    @DeleteDateColumn - 데이터가 삭제되는 시간을 기록할 때 사용(실제 삭제되지 않는다. 백업 서버가 없다면 해당 옵션을 사용!!)

    ```

---

### 파이프라인

#### Pipes 사용법

- 사용방법은 3가지 방법이 있습니다.

  1. Global-Level

  2. Handler-Level

  3. Parameter-Level

내장 파이프

Nest는 즉시 사용할 수 있는 8개의 파이프와 함께 제공됩니다.

1.  ValidationPipe
2.  ParseIntPipe
3.  ParseFloatPipe
4.  ParseBoolPipe
5.  ParseArrayPipe
6.  ParseUUIDPipe
7.  ParseEnumPipe
8.  DefaultValuePipe

- @nestjs/common패키지에서 내 보냅니다.

- Global Pipe는 애플리케이션 전체에 적용되는 Pipe입니다. main.ts 파일에 설정합니다.

- [글로벌 파이프라인 옵션](https://docs.nestjs.com/techniques/validation)

## 2022.11.27

- Repositoy 생성 및 userModule에 드ퟝ록

[전체적인 참조](https://any-ting.tistory.com/113)

[프로젝트 구조 및 TS 문법](https://github.com/yongbeomkwak/LearningTS)
