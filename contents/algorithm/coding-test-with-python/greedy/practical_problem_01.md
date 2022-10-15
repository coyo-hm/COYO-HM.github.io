---
date: '2022-10-13'
title: '[이코테] 그리디 알고리즘 실전문제2 : 큰 수의 법칙'
categories: ['Algorithm', 'Algorithm/Problem', 'Algorithm/Greedy-Algorithm']
summary: '큰 수의 법칙'
thumbnail: '../thumbnail.jpg'
---

## 문제 설명

> 동빈이의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다. 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특징이다. 배열의 크기 N, 숫자가 더해지는 횟수 M, 그리고 K가 주어질 때 동빈이의 큰 수의 법칙에 따른 결과를 출력하시오.

## 내 풀이

```python
N, M, K = map(int, input().split())
numbers = list(map(int, input().split()))

maxN = max(numbers)
result = 0

if(numbers.count(maxN) > 1 and numbers[K] != maxN):
  result = maxN * M

else:
  secondMax = max(filter(lambda n: n != maxN, numbers))
  result = maxN * (M // (K + 1) * K + M % (K + 1)) + secondMax * (M // (K + 1))

print(result)
```

> [시간] 13:15 / 30:00
