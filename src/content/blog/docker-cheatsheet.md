---
title: "Docker 常用命令总结"
excerpt: "把镜像、容器、网络和日志命令整理成一份日常可查的速记表。"
date: "2026-06-05"
readTime: "5 分钟阅读"
category: "工具"
tags: ["Docker", "Linux", "DevOps"]
cover: "/images/cover-docker.svg"
---

## 镜像命令

常用命令包括构建镜像、查看镜像列表和清理无用镜像。给镜像打上清晰标签，可以减少部署和回滚时的混乱。

```bash
docker build -t my-app:latest .
docker images
docker image prune
```

## 容器命令

开发时经常需要查看运行状态、进入容器和读取日志。把这些命令熟悉起来，可以节省大量排查时间。

```bash
docker ps
docker exec -it my-app sh
docker logs -f my-app
```

## 总结

Docker 命令不需要一次记住全部。围绕构建、运行、日志和清理这几类场景整理，就足够覆盖大多数日常使用。
