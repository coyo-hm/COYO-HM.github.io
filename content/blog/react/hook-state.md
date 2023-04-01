---
date: "2023-02-24"
title: "React Hook: State Hook"
tags: ["React"]
description: "useState, useReducer 정리"
published: true
---

# ****State Hooks****

> `state`를 선언하고 업데이트 하는 Hook
>

<aside>
💡 `state`

컴포넌트가 기억하고 있는 정보

</aside>

## `useState`

```jsx
const [state, setState] = useState(initialState)
```

> 변수 선언을 위한 Hook으로 바로바로 업데이트 할 수 있다.
>
>
> ```jsx
> function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
> ```
>
> 함수 컴포넌트가 다시 렌더링 되어도 그대로 유지되는 `state`와 `state` 값을 업데이트할 수 있는 함수를 반환한다.
>
- 하나의 `useState`당 하나의 `state`만을 관리한다.
- 인자로 첫 번째 렌더링에서 사용되는 초기 `state` (어떤 타입이든 가능)를 받으며 첫 번째 이후 렌더링 시에는 해당 값은 무시된다.

  만일 초기 state가 고비용 계산일 경우, 초기 렌더링 시에만 실행될 함수를 대신 제공할 수 있다.

  다만 초기 함수 값은 리렌더링을 발생 시키면 안된다.

    ```jsx
    const [state, setState] = useState(() => {
      const initialState = someExpensiveComputation(props);
      return initialState;
    });
    ```

- class의 `this.setState`와 거의 유사하지만 이전 `state`와 새로운 `state`를 합치지 않는다.

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### `setState`

> `Dispatch<SetStateAction<state의 type>>`
state를 다른 값으로 업데이트 되는데 사용되며 리렌더링을 유발한다.
: 새 `state` 값을 받아 컴포넌트 리렌더링을 queue에 등록한다.
⇒ 다음 리렌더링 시에 반환값이 새로 받은 `state`
>

<aside>
💡 리렌더링을 유발하는 함수는 updater function

React는 updater function들을 queue에 넣고 컴포넌트를 리렌더한다.

리렌더링이 발생하는 동안, React는 prev state 들을 queue에 있는 updater function을 적용하여 next state를 계산한다.

</aside>

- nextState를 그냥 넣을 수도 있지만 prevState를 함수 형태로 넣어서 상태를 변경시킬 수도 있다.

  만일 함수 형태로 nextState를 넘겨주는 경우, prevState만을 유일한 argument로 사용하며 nextState를 반환하는 함수여야한다.

    ```jsx
    const [name, setName] = useState('Prev Name');
    
      useEffect(
        () => setName((prevState) => (prevState === 'Prev Name' ? 'Next Name' : 'Different Name')),
        [setName]
      );
    ```

- 리렌더링 이후에 state의 값이 업데이트 되는 것이기에 만일 setState 함수를 호출한 후 바로 state를 읽어보면 아직 값이 업데이트 되지 않은 것을 알 수 있다.
- `setState` 함수의 경우 함수 동일성이 안정적이고 리렌더링 시에도 변경되지 않기에 `useEffect`나 `useCallback`의 의존성 목록에 해당 함수를 포함하지 않아도 된다.
- object를 update 할 경우, 직접적으로 변경하면 안되고 `setState` 함수를 이용해야 한다.

  ❌ 직접적인 변경 : React 가 변화를 인지하지 못하고 리렌더링 발생 x

    ```jsx
    form.firstName = "Taylor";
    ```

  ⭕ `setState` 함수 사용

    ```jsx
    setForm({
      ...form,
      firstName: 'Taylor'
    });
    ```


### 

컴포넌트의 key 값을 바꿀 경우, React는 다른 컴포넌트라 생각하고 재생ㅅ

## `useReducer`

> reducer 함수의 로직으로 state를 선언하고 업데이트 하는 Hook
>

# 참조

- [리액트 공식 문서 Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [리액트 공식 문서 Beta Hook](https://beta.reactjs.org/reference/react)
- [리액트 공식 문서 Beta useState](https://react.dev/reference/react/useState)
- [리액트 공식 문서 Beta useState](https://react.dev/reference/react/useState)