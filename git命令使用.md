# git使用命令

### 1.常用推拉项目

```
1.git add .

2.git commit -m'提交信息'

3.git pull(拉取别人最新代码,如果有冲突,解决一下冲突)

4.git push (如果不行写全git push origin +要推送的分支名)
```

### 2.查看分支

`git branch 可以查看分支名`

### 3.创建分支

```
git branch +分支名
创建并切换分支  git checkout -b +分支名  (-b是branch的简写)
```

### 4.切换分支

`git checkout +要切换的分支名`

### 5.拉取远程分支到本地

**如果用git branch查看本地分支并没有远程上面的分支可使用以下命令将远程分支拉取到本地进行开发**

`git checkout -b origin/develop(这个develop即远程分支名)`

### 6.合并分支

现有A B两分支 要把B分支合并到A分支

首先线切换到A分支 可用命令 `git checkout A `

然后将B分支合并到A分支 `git merge B`

### 7.`git pull` 常见问题解决

git 在pull或者合并分支的时候有时会遇到这种情况。

```
Please enter a commit message to explain why this merge is necessary,
especially if it merges an updated upstream into a topic branch.
```

```
按键盘左上角"Esc"
输入":wq",注意是冒号+wq,按回车键即可
```

### 8.查看日志

```
git log 命令 显示从最近到最远的提交日志
```

### 9.将本地还原的代码强制推送到远程仓库

```
git push -f(不建议使用)
```

### 10.`git` 回退代码版本

```
1. 查看所有的历史版本，获取你git的某个历史版本的id， git log
2. 回退本地代码库：git reset --hard ID
3. 推送到远程服务器：git push -f -u origin master
4. 重新拉代码：git pull
```



