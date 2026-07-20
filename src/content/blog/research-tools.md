---
# src/content/blog/research-tools.md
featured: true
featuredOrder: 1
# 科研工具
title: "科研工具"
excerpt: "记录计算机科研、AI 工具、文献阅读和大模型应用学习过程中用到的资源。"
date: "2026-07-13"
readTime: "8 分钟阅读"
category: "工具"
tags: ["科研工具", "AI", "文献阅读", "效率"]
cover: "/images/cover-blog.svg"
---

本文主要记录主包在计算机科研、AI 工具、文献阅读和大模型应用学习过程中使用到的一些资源。

内容会持续补充和更新，欢迎收藏、交流，也欢迎给代码仓库点个 Star。

**目录**

1. [关于主包](#关于主包)
2. [开发工具](#开发工具)
3. [AI 工具](#ai-工具)
4. [文献阅读与管理](#文献阅读与管理)
5. [文献翻译](#文献翻译)
6. [论文与期刊检索](#论文与期刊检索)
7. [灵感源泉](#灵感源泉)
8. [联系方式](#联系方式)
9. [最后](#最后)

## 关于主包

### 个人代码仓库

GitHub：

[https://github.com/yongganjack](https://github.com/yongganjack)

主包是重邮 26 级计算机研究生，最近正在完成师兄安排的暑期基础任务，主要与**大模型应用**相关。

目前的学习任务包括搭建一个可以简单使用的 **Agent**，后续会不定期更新学习记录和项目代码。

欢迎大家给仓库点个 **Star**，感谢支持。

学习路线：

[2026 全栈编程学习路线汇总：AI/Java/Go/前端（保姆级） - 编程导航 | 2026 年最新企业级编程实战项目教程](https://www.codefather.cn/course/codestudy)

## 开发工具
### 开发工具介绍：
|工具类别|使用工具|主要用途|
|---|---|---|
|开发环境|PyCharm、IntelliJ IDEA|用于 Python、Java 项目的代码编写、调试和运行|
|编程环境|Python、Node.js、JDK|提供 Python、前端及 Java 项目的运行环境|
|数据库|MySQL|用于数据存储、查询和管理|
|数据库管理|Navicat Premium|用于连接数据库及进行可视化管理|
|环境管理|Anaconda|用于管理 Python 环境和项目依赖|

### 软件安装包

通过网盘分享的文件：软件包

链接: https://pan.baidu.com/s/1G-NdXeKeTGJDckD_Y8HG_Q?pwd=g2wp 提取码: g2wp

--来自百度网盘超级会员v4的分享

## AI 工具

### ChatGPT 网页版

国内镜像：

[https://share.zhangsan.cool/home](https://share.zhangsan.cool/home)

### API 中转站

[https://yansd666.com/](https://yansd666.com/)

[https://tokeness.io/](https://tokeness.io/)

### 群友自建中转站

想推广自建中转站的朋友，欢迎联系主包。免费帮忙打广，只需保障站点稳定、服务质量可靠即可。

[https://api.xianjiji.top/](https://api.xianjiji.top/)

站主抖音号：67731896211

本站主要提供 GPT5.6、5.5、5.4 等模型接口服务，主打超低倍率（0.2）、稳定调用，适合学习、开发、测试及日常 AI 使用需求。

> 使用第三方镜像站或中转站时，请注意账号、隐私和 API Key 安全，不要上传敏感数据、未公开论文或个人隐私信息。

### Claude、Codex 安装、配置教程

[https://yansd.apifox.cn/](https://yansd.apifox.cn/)

### Claude + Codex 科研工作流

[Claude + Codex 科研工作流](https://scns0lqndbfr.feishu.cn/wiki/BtlowBjnYiFmXkkXHj2cJnbmnBf?from=from_copylink)

### Codex 的使用 BUG

1. 五思而后行（重新连接五次后才开始思考）

解决方案：将以下提示词发给 Codex：

```text
你先找一下本机的网络端口是什么（HTTP_PROXY 和 HTTPS_PROXY）
在 Codex 的 .env 中写入 HTTP_PROXY 和 HTTPS_PROXY
```

2. 高频持续读写磁盘（损害固态硬盘使用寿命）

解决方案：将以下提示词发给 Codex：

```text
核查 ~/codex/logs_2.sqlite 是否因 TRACE 日志高频持续写入磁盘；
若存在该问题，先执行数据备份，再通过 SQLite 触发器拦截 logs 表的 INSERT 写入操作，
随后对 WAL 文件执行检查点与截断处理，最后通过采样校验 MAX(id) 与 WAL 文件大小均不再持续增长。
最后总结问题根源，以及你的解决结果。
然后告诉我这个问题存在了多久？对我的本机磁盘造成什么级别的寿命影响？
请你实际调研和统计，最后量化一下。
```

### cc-switch

用于管理和切换 Claude Code、Codex 等工具的相关配置。

GitHub 地址：

[https://github.com/farion1231/cc-switch/tree/main](https://github.com/farion1231/cc-switch/tree/main)

### Claude、Codex Skills

后续可以根据实际使用情况，补充常用 Skill、配置方法和使用示例。

## 文献阅读与管理

### Zotero

Zotero 是一款常用的文献管理工具，可以用于：

- 收集和管理论文；
- 保存论文元数据；
- 插入和管理参考文献；
- 对文献进行分类和添加标签；
- 配合浏览器插件快速保存网页和论文；
- 配合其他插件进行翻译、阅读和笔记整理。

官方网站：

[https://www.zotero.org](https://www.zotero.org/)

### AI 阅读文献提示词

可以使用 AI Prompt 帮助完成以下任务：

- 用大白话解释论文内容；
- 拆解论文摘要；
- 解释专业术语；
- 逐步分析数学公式；
- 理解算法流程；
- 总结论文创新点；
- 分析论文实验是否可靠；
- 生成组会或导师汇报内容。

相关内容：

[AI 阅读文献提示词](https://scns0lqndbfr.feishu.cn/wiki/Qt4dwyy2NiA8D8klPPKcV9plnSf?from=from_copylink)

## 文献翻译

### PDF 翻译工具教程

视频标题：

**《2026 最新免费开源 PDF 翻译神器，保姆级教程》**

哔哩哔哩链接：

[https://www.bilibili.com/video/BV1ue516mEAZ?vd_source=8b39ddd3d518f2f54af5fb1073499559](https://www.bilibili.com/video/BV1ue516mEAZ?vd_source=8b39ddd3d518f2f54af5fb1073499559)

## 论文与期刊检索

### Google Scholar

谷歌学术可以用于检索论文、查看引用次数和查找相关研究。

[https://scholar.google.com/](https://scholar.google.com/)

### ACM Digital Library

主要收录计算机科学及相关领域的论文、会议和期刊资源。

[https://dl.acm.org](https://dl.acm.org/)

### IEEE Xplore

主要用于检索 IEEE 旗下的期刊、会议论文和技术标准。

[https://ieeexplore.ieee.org/Xplore/home.jsp](https://ieeexplore.ieee.org/Xplore/home.jsp)

### Sci-Hub

[https://sci-hub.kvnp.top/](https://sci-hub.kvnp.top/)

> 建议优先通过学校图书馆、论文作者主页、机构知识库、开放获取平台或邮件联系作者等合规方式获取论文全文。

## 灵感源泉

科研遇到瓶颈时，可以适当休息一下，放松大脑。

### 江小白（果立方）系列

- 江小白白葡萄味 + 水溶 C 柠檬味
- 江小白白葡萄味 + 水溶 C 血橙味
- 江小白蜜桃味 + 水溶 C 柠檬味
- 江小白蜜桃味 + 水溶 C 血橙味

### RIO 强爽

- 茉莉青提味
- 白桃味
- 巨峰葡萄味

### 西域春奶啤

- 白桃味
- 原味

### 其他

- 菠萝啤
- 中国劲酒 + 乌苏啤酒（谨慎饮用）

> 温馨提示：饮酒请适量，不建议在实验、写代码或处理重要任务时饮酒。未成年人请勿饮酒。

## 联系方式

有好用的科研工具、AI 工具、学习资料或有趣的想法，欢迎私信交流。

- 抖音：1730105952
- GitHub：[https://github.com/yongganjack](https://github.com/yongganjack)

也欢迎大家分享自己的科研工作流、Agent 项目经验和大模型应用工具。

## 最后

本文会持续更新以下内容：

- 大模型应用学习记录；
- Agent 搭建过程；
- Claude 和 Codex 使用技巧；
- 文献阅读工具；
- AI 阅读论文 Prompt；
- 科研效率工具；
- 实用代码与项目资源。

欢迎收藏本文，也欢迎给主包的 GitHub 仓库点个 Star。

[https://github.com/yongganjack](https://github.com/yongganjack)
