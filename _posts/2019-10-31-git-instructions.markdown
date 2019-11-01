---
layout: post
title:  "git常用指令"
date:   2019-10-31 11:57:44 +0800
categories: jekyll update
---
1. [表明身份](#1)

2. [使用版本库](#2)

3. [版本的回退，以及回退后的前进](#3)

4. [远程仓库](#4)

5. [分支](#5)


<div id="1"></div> 

# 表明身份
```
  #提交git名字
  git config --global user.name "<你的名字>"  

  #提交git邮箱
  git config --global user.email "<你的邮箱>" 
```

***

<div id="2"></div> 

# 使用版本库 
```
  #初始化git库 
  git init  

  #查看git的更改信息，以及是否提交,也可查看冲突文件
  git status 
  
  #提交更改的文件到暂存区
  git add <文件名>  

  #提交更改的文件到版本库
  git commit -m "<更改版本的介绍>" 
```
***

 <div id="3"></div>

# 版本的回退，以及回退后的前进  
  ```
  #可以查看add提交的日志，也可以查看分支合并状况
  git log 
    
  #退回上一个版本
  git reset --hard HEAD^  
  
  #可在版本回退后，在进入在现版本之后的版本
  git reset --hard <版本id>   
  
  #可以查看工作区和版本库最新的区别
  git diff HEAD -- <文件名>   
  
  #可以丢弃工作区的修改,实际是用版本库的版本替换到工作区
  git checkout -- file   
  
  #可以撤销add暂存区
  git restet HEAD <文件名>  

  #删除文件(注意：没被添加到版本库的文件无法恢复)
  git rm <文件名>   

```  

***

<div id="4"></div>

# 远程仓库
```
  #id_rsa是私匙，id_rsa.pub是公匙,在github的Add SSH Key上粘贴id_rsa.pub内容
  ssh-keygen -t rsa -C "你的github邮箱" 

  #添加远程库，origin为添加远程库的名字
  git remote add origin <你要推送的远程库> 

  #把当前分支master推送到origin远程分支上 -u把远程分支与当前分支关联起来之后可省略
  git push -u origin master 

  #克隆一个远程库,git://前缀可使用ssh匙
  git clone <你要克隆的远程库> 

  #获取远程库的更新
  git pull 
```
***

<div id="5"></div>

# 分支 
```
  #创建分支并切换到创建分支 -b表示创建并切换(注意：建议使用switch)
  git checkout -b <分支名> 

  #查看当前分支
  git branch 

  #创建分支
  git branch <分支名> 

  #合并指定分支到当前分支
  git merge <分支名> 

  #创建并切换分支
  git switch -c <分支名> 

  #切换到已有分支
  git switch <分支名> 

  #删除对应分支
  git branch -d <分支名> 


  #bug处理分支-------------------------------------------------------------
  #新建分支储存工作区
  git stash 

  #恢复被stash存储的工作区
  git stash apply 

  #删除stash工作区的内容
  git stash drop

  #恢复被stash工作区存储的内容,并删除stash工作区
  git stash pop

  #查看被stash储存的内容
  git stash list
  #-------------------------------------------------------------------------

  #复制一个特定的提交到当前分支
  git cherry-pick

  #查看分支
  git remote

  #显示更详细的信息
  git remote -v

  #推送相应分支到远程库
  git push origin <分支名>

  #取消push pull所造成的历史分岔
  git rebase 

   
  ```