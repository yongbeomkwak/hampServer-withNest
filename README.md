# Hamp 개인 서버 프로젝트

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

> [전체적인 참조](https://any-ting.tistory.com/113)
