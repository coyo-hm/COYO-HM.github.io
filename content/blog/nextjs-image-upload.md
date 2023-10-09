---
date: "2023-02-10"
title: "NextJS 블로그 배포 시 이미지 경로 설정"
tags: ["NextJS", "TypeScript"]
description: "NextJS 블로그 배포 시에 이미지 경로 설정하기"
published: false
---

NextJS 블로그 생성 시에 NextJS `<Image/>` tag 사용 시에 경로를 반드시 설정 해주어야 배포할 수 있다.

`next.config.js`

```javascript
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["블로그 주소"],
    loader: "imgix",
    path: "블로그 주소",
  },
};
```

# 참조

- [NextJS/Image Docs](https://nextjs.org/docs/api-reference/next/image#loader-configuration)
