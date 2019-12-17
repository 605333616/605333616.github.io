---
layout: post
title:  "逻辑门"
date:   2019-11-08 11:52:44 +0800
categories: jekyll update
---
逻辑门是集成电路的基本组件，也是cup运算的基础，此文章不会深入的讲解逻辑门，
只会浅显的介绍一下基础的逻辑原件，以及cup如何依靠逻辑门运行的原理。

***
## 基础逻辑门
### 与门
与门的电路图
![与门的电路图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E4%B8%8E%E9%97%A8%E7%94%B5%E8%B7%AF%E5%9B%BE.png)
与门逻辑门图  
![与门逻辑门图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E4%B8%8E%E9%97%A8%E9%80%BB%E8%BE%91%E9%97%A8%E5%9B%BE.png)
电路信号 

|电信号|0    |1    |
|:---:|:---:|:---:|
|0    |0    |0    |
|1    |0    |1    |

### 或门
或门的电路图
![或门的电路图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E6%88%96%E9%97%A8%E7%94%B5%E8%B7%AF%E5%9B%BE.png)
或门逻辑门图  
![或门逻辑门图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E6%88%96%E9%97%A8%E9%80%BB%E8%BE%91%E5%9B%BE.png)  
电路信号 

|电信号|0    |1    |
|:---:|:---:|:---:|
|0    |0    |1    |
|1    |1    |1    |

### 与非门
异或与门电路图  
![异或与门电路图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%BC%82%E4%B8%8E%E9%97%A8%E7%94%B5%E8%B7%AF%E5%9B%BE.png)  
异或与门逻辑图  
![异或与门逻辑图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%BC%82%E4%B8%8E%E9%97%A8%E9%80%BB%E8%BE%91%E5%9B%BE.png)  
电路信号

|电信号|0    |1    |
|:---:|:---:|:---:|
|0    |1    |1    |
|1    |1    |0    |

### 或非门
异或门电路图  
![异或门电路图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%BC%82%E6%88%96%E9%97%A8%E7%94%B5%E8%B7%AF%E5%9B%BE.png)  
异或门逻辑图  
![异或门逻辑图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%BC%82%E6%88%96%E9%97%A8%E9%80%BB%E8%BE%91%E5%9B%BE.png)  
电路信号

|电信号|0    |1    |
|:---:|:---:|:---:|
|0    |1    |0    |
|1    |0    |0    |

### 反向器
反向器电路图  
![反向器电路图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%8F%8D%E6%8E%A5%E7%94%B5%E8%B7%AF%E5%9B%BE.png)  
反向器逻辑图  
![反向器逻辑图](https://raw.githubusercontent.com/605333616/Gallery/master/LogicGate/%E5%8F%8D%E6%8E%A5%E9%80%BB%E8%BE%91%E9%97%A8.png)  
电路信号

|电信号|转换  |
|:---:|:---:|
|0    |1    |
|1    |0    |