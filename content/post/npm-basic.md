---
date: "2023-02-06"
title: "npm 정리"
tags: ["npm"]
description: ""
published: false
---

# NPM

<aside>
    <code>npx</code>
    
    npm 5.2+ 버전의 패키지 실행 도구
</aside>

## package 삭제하기

```bash
npm uninstall package-name
```

### Dev Dependency Package 삭제하기

```bash
npm uninstall -D package-name
#또는
npm uninstall --save-dev package-name
```

### Global Package 삭제하기

```bash
npm uninstall -g package-name
```

## `package.json`에 있는 항목 모두 업데이트 하기

```bash
npx npm-check-updates -u
npm install
```
