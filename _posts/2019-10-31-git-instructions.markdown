---
layout: post
title:  "git常用指令"
date:   2019-10-31 11:57:44 +0800
categories: jekyll update
---
1. [表明身份](#1)

2. [使用版本库](#2)

3. [版本的回退，以及回退后的前进](#3)

4. [分支](#4)



# 表明身份
<div id="1"></div>  
>```java
  git config --global user.name "<你的名字>"  
```
提交git名字

>```java
  git config --global user.email "<你的邮箱>" 
```
提交git邮箱

***

# 使用版本库 
<div id="2"></div> 
>```java
  git init  
```
初始化git库 


>```java
  git status 
```
查看git的更改信息，以及是否提交,也可查看冲突文件

>```java
  git add <文件名>   
```
提交更改的文件到暂存区

>```java
  git commit -m "<更改版本的介绍>" 
```
提交更改的文件到版本库

***

# 版本的回退，以及回退后的前进  
<div id="3"></div>
  >```java
  git log 
  ```
  >可以查看add提交的日志，也可以查看分支合并状况  
   
>```java
  git reset --hard HEAD^  
```
>退回上一个版本

>```java
  git reset --hard <版本id>   
```
>可在版本回退后，在进入在现版本之后的版本

>```java
  git diff HEAD -- <文件名>   
```
>可以查看工作区和版本库最新的区别

>```java
  git checkout -- file   
```
>可以丢弃工作区的修改,实际是用版本库的版本替换到工作区

>```java
  git restet HEAD <文件名>  
```
>可以撤销add暂存区 

>```java
  git rm <文件名>   
```  
>删除文件(注意：没被添加到版本库的文件无法恢复)

***
# 远程仓库
<div id="4"></div>
>```java
  ssh-keygen -t rsa -C "你的github邮箱" 
```
>id_rsa是私匙，id_rsa.pub是公匙,在github的Add SSH Key上粘贴id_rsa.pub内容

>```java
  git remote add origin <你要推送的远程库> 
```
>添加远程库，origin为添加远程库的名字

>```java
  git push -u origin master 
```
>把当前分支master推送到origin远程分支上 -u把远程分支与当前分支关联起来之后可省略

>```java
  git clone <你要克隆的远程库> 
```
>克隆一个远程库,git://前缀可使用ssh匙

>```java
  git pull 
```
>获取远程库的更新

***
# 分支 
<div id="5"></div>
>```java
  git checkout -b <分支名> 
```
创建分支并切换到创建分支 -b表示创建并切换(注意：建议使用switch)

>```java
  git branch 
```
查看当前分支 

>```java
  git branch <分支名> 
```
创建分支

>```java
  git merge <分支名> 
```
合并指定分支到当前分支

>```java
  git switch -c <分支名> 
```
创建并切换分支

>```java
  git switch <分支名> 
```
切换到已有分支

>```java
  git branch -d <分支名> 
``` 
删除对应分支

>***
> bug处理分支  
  >>```java
  git stash 
  ```
  新建分支储存工作区
  >>```java
  git stash apply 
  ```
  恢复被stash存储的工作区
  >>```java
  git stash drop
  ```
 删除stash工作区的内容
  >>```java
  git stash pop
  ```
 恢复被stash工作区存储的内容,并删除stash工作区
  >>```java
  git stash list
  ```
 查看被stash储存的内容

>>***

  >```java
  git cherry-pick
  ```
   复制一个特定的提交到当前分支

  >```java
  git remote
  ```
   查看分支

  >```java
  git remote -v
  ```
   显示更详细的信息

  >```java
  git push origin <分支名>
  ```
   推送相应分支到远程库

  >```java
  git rebase 
  ```
   取消push pull所造成的历史分岔
