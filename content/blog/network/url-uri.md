---
date: "2022-09-15"
title: "URI와 URL"
tags: ["Network"]
description: ""
published: false
---

# URI

> URI(Uniform Resource Identifier)
>
> 특정 리소스를 식별하는 <span className="yellow">통합 자원 식별자</span>를 의미한다.<br/>
> 웹 기술에서 사용하는 모든 리소스(논리적 또는 물리적 리소스)를 식별하는 고유한 문자열 시퀀스이다.

- Uniform : 리소스를 식별하는 통일된 방식
- Resource : URI로 식별 가능한 모든 자원
- Identifier : 다른 항목과 구분하기 위해 필요한 고유한 정보

## URI의 구조

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

1. `scheme`: 사용할 프로토콜을 뜻하며 웹에서는 http 또는 https를 사용
2. `user`, `password`: (서버에 있는) 데이터에 접근하기 위한 사용자의 이름과 비밀번호
3. `host`와 `port`: 접근할 대상(서버)의 호스트명과 포트번호
4. `path`: 접근할 대상(서버)의 경로에 대한 상세 정보
5. `query`: 접근할 대상에 전달하는 추가적인 정보(parameter)
6. `fragment`: 메인 리소스 내에 존재하는 서브 리소스에 접근할 때 이를 식별하기 위한 정보

# URL

> URL(Uniform Resource Locator)
>
> 흔히 웹 주소라고 말하는 것이며, 컴퓨터 네트워크 상에서 리소스의 위치를 알려주기 위한 규약이다.<br/>
> URI의 속하는 부분 집합이다.

# URI VS. URL

<aside>

- URI는 식별하고, URL은 위치를 가르킨다.
- URI의 속하는 부분 집합이다.

</aside>
