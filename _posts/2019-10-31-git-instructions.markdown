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

  git reset --hard HEAD^ 退回上一个版本  

  git reset --hard <版本id> 可在版本回退后，在进入在现版本之后的版本  

  git diff HEAD -- <文件名> 可以查看工作区和版本库最新的区别  

  git checkout -- file 可以丢弃工作区的修改,实际是用版本库的版本替换到工作区  

  git restet HEAD <文件名> 可以撤销add暂存区  

  git rm <文件名> 删除文件(注意：没被添加到版本库的文件无法恢复)  

# 远程仓库
  ssh-keygen -t rsa -C "你的github邮箱" id_rsa是私匙，id——rsa.pub是公匙,在github的Add SSH Key上粘贴id_rsa.pub内容

  git remote add origin <你要推送的远程库> 添加远程库，origin为添加远程库的名字

