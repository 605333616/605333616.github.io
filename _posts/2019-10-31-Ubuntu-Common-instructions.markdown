---
layout: post
title:  "Ubuntu 常用指令"
date:   2019-10-31 11:57:44 +0800
categories: jekyll update
---
 <h1># 查看端口占用，Netstat介绍</h1>  
 1. 查看以连接的服务端口<br/>
       netstat -a 
 2. 查看所有的服务端口<br/>
      netstat -ap  
 3. 查看单一端口可结合grep命令<br/>
      netstat -ap|grep 80亦可 lsof -i:80 , netstat -anl | grep 80
 4. 查看程序名的pid<br/>
      ps aux | grep 程序名

<h1># 结束文件，kill介绍</h1>  
 1. 能杀死大多程序的指令<br/>
    kill -9 'pid'

<h1># 改变文件权限，chmod介绍</h1>
能进行遍历 例如：chmod -r 777 文件名

1. 查看文件权限的命令：ls -l xxx.xxx （xxx.xxx是文件名）<br/>
r 表示文件可以被读（read）<br/>
w 表示文件可以被写（write）<br/>
x 表示文件可以被执行（如果它是程序的话）<br/>
(-) 表示相应的权限还没有被授予<br/>

2. chmod o+w xxx.xxx
表示给其他人授予写xxx.xxx这个文件的权限<br/>
chmod go-rw xxx.xxx<br/>
表示删除xxx.xxx中组群和其他人的读和写的权限<br/>
其中：rwx也可以用数字来代替<br/>
r ------------4<br/>
w -----------2<br/>
x ------------1<br/>
'-' ------------0<br/>
行动：<br/>
'+' 表示添加权限<br/>
'-' 表示删除权限<br/>
'=' 表示使之成为唯一的权限<br/>
-rw------- (600) 只有所有者才有读和写的权限<br/>
-rw-r--r-- (644) 只有所有者才有读和写的权限，组群和其他人只有读的权限<br/>
-rwx------ (700) 只有所有者才有读，写，执行的权限<br/>
-rwxr-xr-x (755) 只有所有者才有读，写，执行的权限，组群和其他人只有读和执行的权限<br/>
-rwx--x--x (711) 只有所有者才有读，写，执行的权限，组群和其他人只有执行的权限<br/>
-rw-rw-rw- (666) 每个人都有读写的权限<br/>
-rwxrwxrwx (777) 每个人都有读写和执行的权限<br/>


