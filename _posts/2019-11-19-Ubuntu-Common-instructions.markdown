---
layout: post
title:  "Ubuntu 常用指令"
date:   2019-11-19 11:57:44 +0800
categories: jekyll update
---
<div style="z-index:999;display: block; position: fixed; left: 220px; top: 150px;">
  <div class="content">
  <div><h4 style="margin-left:25px">目录</h4></div>
  <ol>
  <li>
  <a href="#a1">查看端口占用，Netstat介绍</a><br/>
  </li>
  <li>
  <a href="#a2">结束文件，kill介绍</a><br/>
  </li>
  <li>
  <a href="#a3">改变文件权限，chmod介绍</a><br/>
  </li>
  </ol>
  </div>
</div>

<div id="a1"></div>
# 查看端口占用，Netstat介绍    
 1. 查看以连接的服务端口  
```
       netstat -a  
```

 2. 查看所有的服务端口  
```
      netstat -ap  
```

 3. 查看单一端口可结合grep命令  
```
      netstat -ap|grep 80亦可 lsof -i:80 , netstat -anl | grep 80
```

 4. 查看程序名的pid  
```
      ps aux | grep 程序名
```

 5. 查看80端口是被哪个服务使用着  
```
      netstat -tunlp | grep :80  
```

<div id="a2"></div>
# 结束文件，kill介绍    
 1. 能杀死大多程序的指令  
```
    kill -9 'pid'
```

<div id="a3"></div>
# 改变文件权限，chmod介绍  
能进行遍历 例如：chmod -r 777 文件名

1. 查看文件权限的命令：ls -l xxx.xxx （xxx.xxx是文件名）  
```
r 表示文件可以被读（read）  
w 表示文件可以被写（write）  
x 表示文件可以被执行（如果它是程序的话）  
(-) 表示相应的权限还没有被授予  
```

2. chmod o+w xxx.xxx
```
表示给其他人授予写xxx.xxx这个文件的权限  
chmod go-rw xxx.xxx  
表示删除xxx.xxx中组群和其他人的读和写的权限  
其中：rwx也可以用数字来代替  
r ------------4  
w ------------2  
x ------------1  
- ------------0  
```
行动：  
```
'+' 表示添加权限  
'-' 表示删除权限  
'=' 表示使之成为唯一的权限  
-rw------- (600) 只有所有者才有读和写的权限  
-rw-r--r-- (644) 只有所有者才有读和写的权限，组群和其他人只有读的权限  
-rwx------ (700) 只有所有者才有读，写，执行的权限  
-rwxr-xr-x (755) 只有所有者才有读，写，执行的权限，组群和其他人只有读和执行的权限  
-rwx--x--x (711) 只有所有者才有读，写，执行的权限，组群和其他人只有执行的权限  
-rw-rw-rw- (666) 每个人都有读写的权限  
-rwxrwxrwx (777) 每个人都有读写和执行的权限  
```

