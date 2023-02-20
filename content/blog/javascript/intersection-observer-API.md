---
date: "2022-02-13"
title: "Intersection Observer API"
tags: ["JavaScript"]
description: ""
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

> Intersection Observer API
> 타겟 요소와 상위 요소 또는 최상위 document의 viewport 사이의 intersection(교차 범위) 내의 변화를 비동기적으로 관찰하는 방법
>
> Intersection Observer API 는 그들이 감시하고자 하는 요소가 다른 요소의 viewport에 들어가거나 나갈 때 또는 요청한 부분만큼 두 요소의 <span className="yellow">교차 부분이 변경될 때 마다 실행될 콜백 함수</span>를 등록할 수 있게 한다.
>
> ✔️ 정확히 몇 픽셀 겹쳤는지 알려주는 것이 아닌 N% 정도로 상호작용일 일어났을 경우 발생

```tsx
const observer = new IntersectionObserver(callback, options); // 관찰자 초기화
// callback과 options 두 가지 인수를 전달 받는다.

observer.observe(element); // 관찰 대상(element) 등록
```

# Callback

> Intersection Observer API Callback을 생성 조건
>
> - target 요소와 root 요소 (기기의 뷰포트나 설정 요소)가 교차할 경우
> - observer가 최초로 타겟을 관측하도록 요청받을 때마다.

callback은 entries와 observer를 두가지 인자로 받는다.

```tsx
const callback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {};
```

## entries

: `IntersectionObserverEntry` 의 배열로 `IntersectionObserverEntry`은 다음과 같은 속성들을 포함하고 있다.

```tsx
interface IntersectionObserverEntry {
  readonly boundingClientRect: DOMRectReadOnly;
  readonly intersectionRatio: number;
  readonly intersectionRect: DOMRectReadOnly;
  readonly isIntersecting: boolean;
  readonly rootBounds: DOMRectReadOnly | null;
  readonly target: Element;
  readonly time: DOMHighResTimeStamp;
}
```

- `boundingClientRect` :
- `intersectionRatio` :
- `intersectionRect` :
- `isIntersecting` :
- `rootBounds` :
- `target` :
- `time` :

## observer

# Options

```tsx
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

## `root`

- viewport
- target의 부모 요소야 한다.
- 만일 `document`의 루트 요소(기본값)를 기준으로 하기 위해서는 `null` 값 선언

## `rootMargin`

- `root` 가 가지는 `margin`, 기본값은 0

## `threshold`

- target이 얼만큼 보여졌을 때 observer가 콜백을 실행할 건지 설정하는 option, 기본값은 0
  만일 target이 50% 만큼 요소가 보여졌을때 탐지하고 싶다면, 값을 0.5로 설정한다. 혹은 25% 단위로 실행되게 하고 싶다면, `[0, 0.25, 0.5, 0.75, 1]` 과 같은 배열을 설정
- 기본값 0은 target이 1px이라도 보일때 콜백이 실행된다.
