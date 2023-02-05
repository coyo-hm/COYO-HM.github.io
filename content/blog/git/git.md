---
date: "2022-01-13"
title: "Git 내용정리"
tags: ["Git"]
description: "git 초기 설정, git 커밋 메세지 수정"
published: false
# thumbnail: './add_table_of_contents_in_post.png'
---

# Git 초기 설정

## 초기 사용자 설정

```bash
git config --global user.name "사용자 이름"
git config --global user.email 사용자 이메일
```

> `git config --list`

# Git commit

## Git commit 메세지 수정

```bash
git commit --amend -m "메세지 내용"
```
