---
date: "2022-09-01"
title: "Immutability"
tags: ["JavaScript"]
description: "Immutability"
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

### Immutability

> Immutability(변경불가성)는 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴

- JavaScript의 모든 `obejcts`와 `arrays`는 모두 기본적으로 변경 가능(mutable) 하다.
  ```jsx
  const obj = { a: 1, b: 2 };
  // still the same object outside, but the contents have changed
  obj.b = 3;

  const arr = ["a", "b"];
  // In the same way, we can change the contents of this array
  arr.push("c");
  arr[1] = "d";
  ```
  이를 mutating the object or array(object나 array를 변환)라고 부른다. 메모리에서 똑같은 object나 array를 참조하기에 같은 값을 참조하는 다른 object나 array를 변화하면 기존의 object나 array에서도 새로운 값이 호출된다.
  ⇒ 값을 변경하지 않고(Immutably) 업데이트하려면 코드가 기존 object/array의 복사본을 만든다음 복사본을 수정해야 한다.
  ```jsx
  const obj = {
    a: {
      // To safely update obj.a.c, we have to copy each piece
      c: 3,
    },
    b: 2,
  };

  const obj2 = {
    // copy obj
    ...obj,
    // overwrite a
    a: {
      // copy obj.a
      ...obj.a,
      // overwrite c
      c: 42,
    },
  };

  const arr = ["a", "b"];
  // Create a new copy of arr, with "c" appended to the end
  const arr2 = arr.concat("c");

  // or, we can make a copy of the original array:
  const arr3 = arr.slice();
  // and mutate the copy:
  arr3.push("c");
  ```

## Map

---

## List

---
