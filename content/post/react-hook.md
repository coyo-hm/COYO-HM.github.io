---
date: "2023-02-23"
title: "React Hook"
tags: ["React"]
description: ""
published: false
---

# Hook

> “Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수”
>
> - React Docs Hook

- Hook은 class 안에서 동작하지 않는다.
- Hook은 컴포넌트 혹은 커스텀 훅의 최상위 상단에만 호출할 수 있으며, 반복문(loops)이나 조건문(conditions) 안에서 호출할 수 없다.
  만일 반복문이나 조건문 안에서 호출하고 싶다면, 새 컴포넌트를 생성하고 state를 해당 컴포넌트로 옮긴다.

## Hook을 사용하는 이유

- 상태 관련 로직을 추상화하여 컴포넌트 사이의 상태 로직의 재사용성을 높일 수 있다.
- 생명 주기 메서드 기반이 아닌 유사 동작을 기반으로 컴포넌트를 작은 함수로 쪼개어 로직 추적 및 테스트 등을 보다 더 용이하게 할 수 있다.

# State Hooks

> `state`를 선언하고 업데이트 하는 Hook

<aside>
💡 `state`

컴포넌트가 기억하고 있는 정보

</aside>

## `useState`

```jsx
const [state, setState] = useState(initialState);
```

> 변수 선언을 위한 Hook으로 바로바로 업데이트 할 수 있다.
>
> ```jsx
> function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
> ```
>
> 함수 컴포넌트가 다시 렌더링 되어도 그대로 유지되는 `state`와 `state` 값을 업데이트할 수 있는 함수를 반환한다.
>
> 인자로 첫 번째 렌더링에서 사용되는 초기 `state` (어떤 타입이든 가능)를 받는다.
>
> class의 `this.setState`와 거의 유사하지만 이전 `state`와 새로운 `state`를 합치지 않는다.

```jsx
import React, { useState } from "react";

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### `setState`

> `Dispatch<SetStateAction<state의 type>>`
> state를 다른 값으로 업데이트 되는데 사용되며 리렌더링을 유발한다.

<aside>
💡 리렌더링을 유발하는 함수는 updater function

React는 updater function들을 queue에 넣고 컴포넌트를 리렌더한다.

리렌더링이 발생하는 동안, React는 prev state 들을 queue에 있는 updater function을 적용하여 next state를 계산한다.

</aside>

- nextState를 그냥 넣을 수도 있지만 prevState를 함수 형태로 넣어서 상태를 변경시킬 수도 있다.
  만일 함수 형태로 nextState를 넘겨주는 경우, prevState만을 유일한 argument로 사용하며 nextState를 반환하는 함수여야한다.

  ```jsx
  const [name, setName] = useState("Prev Name");

  useEffect(
    () =>
      setName((prevState) =>
        prevState === "Prev Name" ? "Next Name" : "Different Name"
      ),
    [setName]
  );
  ```

- 리렌더링 이후에 state의 값이 업데이트 되는 것이기에 만일 setState 함수를 호출한 후 바로 state를 읽어보면 아직 값이 업데이트 되지 않은 것을 알 수 있다.

## `useReducer`

> reducer 함수의 로직으로 state를 선언하고 업데이트 하는 Hook

# Context Hooks

<aside>
💡 context

props를 넘겨받지 않고 정보(변수 등등)들을 먼 부모 컴포넌트로 부터 받는 것

얼마나 깊이 자식 컴포넌트가 있는지 관계 없다.

</aside>

## `useContext`

> context를 읽고 구독하는 Hook

# Ref Hooks

<aside>
💡 Refs

Refs는 DOM node 나 timeout ID와 같은 렌더링에 사용되지 않는 `state`와는 다른 정보들을 컴포넌트가 보유할 수 있도록 한다.

</aside>

- refs가 제공하는 정보는 state와는 다른 정보이기에 refs의 변화를 react가 알지못하고 컴포넌트 리렌더링이 발생하지 않는다.
- Refs는 Browser APIs와 같은 non-React system 등과 일해야할 때 매우 유용하다.

## `useRef`

> ref를 정의하고 어떤 value 등 가능하다. 다만 주로 DOM node 로 자주 쓰인다.

## `useImperativeHandle`

> ref를 컴포넌트에 노출시킬 때 사용된다. 아주 드물게 사용된다.

# Effect Hooks

<aside>
💡 Effects는 컴포넌트를 외부의 시스템(네트워크, 브라우저 DOM, 애니메이션, 다른 UI 라이브러리로 만들어진 위젯과 리액트 코드로 작성되지 않은 것)들과 연결하고 동기화하도록 한다.

</aside>

## `useEffect`

> 함수 컴포넌트 내에서 Side Effects를 수행할 수 있게 해주는 Hook
>
> <aside>
> 💡 Side Effects
> React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업으로 다른 컴포넌트에 영향을 주거나 렌더링 과정에서는 구현할 수 없는 작업
>
> </aside>
>
> class의 `componentDidMount`나 `componentDidUpdate`, `componentWillUnmount`와 같은 목적으로 하나의 API로 통합된 것이다.
>
> - 기본적으로 React는 첫번째 렌더링을 포함하여 매 렌더링 이후에 effects를 실행한다.

```jsx
// React가 DOM으로 업데이트한 뒤에 문서의 타이틀을 바꾸는 컴포넌트
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## `useLayoutEffect`

## `useInsertionEffect`

# Performance Hooks

## `useMemo`

## `useCallback`

# Other Hooks

## `useDebugValue`

> React DevTools가 표시하는 label을 커스텀 하는 Hook

## `useId`

> 컴포넌트와 고유한 ID를 연결할 때 사용하는 Hook으로 주로 API와 연결할 때 사용

## `useSyncExternalStore`

> 컴포넌트가 외부 저장소를 구독하게 하는 Hook

# 참조

- [리액트 공식 문서 Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [리액트 공식 문서 Beta Hook](https://beta.reactjs.org/reference/react)
