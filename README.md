# 环境安装指南
## NVM 安装
``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
## Node.js 16 安装
```
nvm install 16
nvm use 16
```
## 启动开发服务器
```
npm run dev
```

## meituan 图片下载

```shell
curl -L -o "file/banner/slide-3.jpg" -H 'Referer: http://localhost:8080/' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 YaBrowser/25.6.0.0 Safari/537.36' "https://nocode.meituan.com/photo/search?keyword=糖水,店铺环境&width=1920&height=1080"
```
