# panda-ci/cd

### travis

使用travis 自动化测试、持续集成发布到gh-pages, 访问地址：https://hsian.github.io/panda-ci/build/

### 1.自动化测试

测试分为单元测试和跨浏览器测试，参考 https://www.jianshu.com/p/f9aa74d3066d

本例子只实现了单元测试用例，而且由于基于react-scripts不能手动配置测试覆盖率

### 2.持续集成

travis在每次push后会触发一些生命周期时间，可以在 `after_success` 部署项目到gh-pages,

参考：https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db （需梯子）

详细见：./.travis.yml配置文件

### 3.待研究问题

- 使用gh-pages包手动部署
- 增加eslint代码检测
- 使用travis部署到远程服务器

### 4.注意

react-scripts打包后的index.html引用的静态资源要改为相对路径，如`/static/`改为`./static/`