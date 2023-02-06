---
date: "2022-09-13"
title: "Socket 통신"
tags: ["Network"]
description: " 프로세스가 데이터를 주고 받는 창구 역할을 한다. 떨어져 있는 두 호스트가 서로 데이터를 주고 받도록 연결해주는 구조체"
published: true
# thumbnail: './add_table_of_contents_in_post.png'
---

# 개념

> <strong>Socket</strong>
>
> 프로세스가 데이터를 주고 받는 창구 역할을 한다. 떨어져 있는 두 호스트가 서로 데이터를 주고 받도록 연결해주는 구조체이다.
> 소켓을 통해 데이터 통로가 생성된다.
>
> - 소켓은 역할에 따라 서버 소켓, 클라이언트 소켓으로 구분된다.

> **소켓 통신**
> 클라이언트와 서버 양쪽에서 서로에게 데이터 전달을 하는 방식으리 양방향 통신
> 서버와 클라이언트 양방향 연결이 이루어지는 통신으로, 서버 또한 클라이언트에게 요청을 보낼 수 있다.

- 스트리밍이나 실시간 채팅 등 실시간으로 데이터를 주고 받아야 하는 경우 Connection을 자주 맺고 끊는 HTTP 통신보다 소켓 통신이 더 적합하다.
- 소켓 통신은 계속해서 Connection을 들고 있기 때문에 HTTP 통신에 비해 많은 자원이 소모된다.

# 참조

- [https://kotlinworld.com/75](https://kotlinworld.com/75)
- [https://helloworld-88.tistory.com/215](https://helloworld-88.tistory.com/215)
- [https://itstudy402.tistory.com/13](https://itstudy402.tistory.com/13)
