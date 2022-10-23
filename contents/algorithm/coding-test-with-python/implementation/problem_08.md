---
date: '2022-10-19'
title: '[이코테] 구현 문제 8 : 문자열 재정렬'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Implementation']
summary: '문자열 재정렬'
thumbnail: '../thumbnail.jpg'
---

<p>이 글은 "이것이 코딩 테스트이다."를 읽고 공부한 기록입니다.</p>

## 내 풀이

```python
S = list(input())
result = []
num = 0
for i in S:
  if "0" <= i <= "9":
    num += int(i)
  else:
    result.append(i)
result.sort()
print("".join(result) + str(num))
```

> [시간] 6:45 / 20:00
