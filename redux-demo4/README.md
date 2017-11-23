> 使用装饰器的形式改写connect

 + 需要额外的自定义插件，终端运行npm run eject弹出个性化配置，该命令不可逆,根目录下多了config和script目录，还有package.json多了很多配置

 + 安装支持装饰器的插件transform-decorators-legacy

       $ npm install babel-plugin-transform-decorators-legacy --save-dev

 + 在package.json中的"babel"配置项中添加代码

        "plugins":["transform-decorators-legacy"]

 + 改写connect