---
title: Git常用操作
date: 2018-11-01 16:42:29
categories: 前端相关
tags: [Git, 前端工具]
---

## 仓库

- 在当前目录新建一个Git代码库
`git init`
- 新建一个目录，将其初始化为Git代码库
`git init [project]`
- 下载一个项目
`git clone [url]`

<!-- more -->

## 配置

- 显示当前的Git配置
`git config --list`
- 设置提交代码时的用户信息
`git config [--global] user.name "[name]"`
`git config [--global] user.email "[email address]"`

## 文件操作

- 添加指定文件到暂存区
`git add [file]`
- 添加指定目录到暂存区，包括子目录
`git add [dir]`
- 添加当前目录的所有文件到暂存区
`git add .`
- 删除工作区文件，并且将这次删除放入暂存区
`git rm [file]`

## 代码提交

- 提交暂存区到仓库区
`git commit -m [message]`
- 提交暂存区的指定文件到仓库区
`git commit [file] -m [message]`

## 分支

- 本地所有分支
`git branch`
- 远程所有分支
`git branch -r`
- 本地所有分支和远程所有分支
`git branch -a`
- 新建一个分支
`git branch [branch]`
- 新建一个分支，并且换到该分支
`git checkout -b [branch]`
- 切换回主分支
`git checkout master`
- 删除分支
`git branch -d [branch]`
- 删除远程分支
`push origin --delete [branch]`
`git branch -dr [remote/branch]`
- 合并指定分支到当前分支
`git merge [branch]`

## 更新与合并

- 更新本地仓库至最新
`git pull`
- 提交本地所有改动到远程仓库(默认master分支)
`git push`
- 提交到远程指定分支
`git push origin [branch]`
- 本地已有项目与远程仓库连接
`git remote add origin [远程仓库地址]`
- 首次将本地代码提交到远程
`git push -u origin master`

## 撤销

- 恢复暂存区的指定文件到工作区
`git checkout [file]`
- 恢复暂存区的所有文件到工作区
`git checkout .`
- 重置暂存区与工作区，与上一次commit保持一致
`git reset --hard`

## 查看信息

- 查看有变更的文件
`git status`
- 查看当前分支的版本历史
`git log`
- 查看暂存区和工作区的差异
`git diff`
