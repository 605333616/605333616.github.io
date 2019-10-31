---
layout: post
title:  "git常用指令"
date:   2019-10-31 11:57:44 +0800
categories: jekyll update
---
# 表明身份  
  git config --global user.name "你的名字"  
  git config --global user.email "你的邮箱"  
# 使用版本库  
  git init 初始化git库  
  git status 查看git的更改信息，以及是否提交  
  git add <文件名> 提交更改的文件  
  git commit -m "<更改版本的介绍>"  
# 版本的回退，以及回退后的前进  
  git log 可以查看add提交的日志