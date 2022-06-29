# more-cdn

自建 cdn 服务器，包含常用的js库文件

不推荐使用第三方 cdn，不能保证可用性

- https://www.bootcdn.cn/

- https://cdnjs.com/

## 使用方式

1、直接使用(不推荐)

将域名https://cdnjs.cloudflare.com 替换为 https://mouday.github.io/more-cdn 即可，文件目录完全一致

```html
<!-- 公共cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.1/axios.min.js"></script>

<!-- 替换为more-cdn -->
<script src="https://mouday.github.io/more-cdn/ajax/libs/axios/0.18.1/axios.min.js"></script>
```

2、部署到自己的服务器使用(推荐)

```bash
# 下载到本地服务器
$ git clone https://github.com/mouday/more-cdn.git
```

```html
<script src="https://cdn.domain.com/ajax/libs/axios/0.18.1/axios.min.js"></script>
```

## 下载新的库

```bash
$ node download.js https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.15.6/index.js

# 保存路径：ajax/libs/element-ui/2.15.6/index.js
```

> 注意：该库的文件只加不减，位置不能移动，以免影响其他库的使用
