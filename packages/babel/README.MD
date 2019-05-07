# frontend build

## babel

### @babel/cli

1. prepare
```
git clone https://github.com/zeng-ge/frontend-build
cd packages/babel
yarn install
```
2. comand options
    ```
    babel src --out-dir build --verbose --sourcemaps inline --watch --presets=@babel/preset-env --plugins=@babel/plugin-proposal-class-properties --env-name sit --minified --extensions .js,.jsx
    ```
    - --config-file
    - --out-dir
    - --out-file
    - --presets
    - --plugins
    - --env-name        [NODE_ENV|BABEL_ENV|--env-name]
        ```
        "sit": "NODE_ENV=sit babel src --out-file build.js",
        "uat": "BABEL_ENV=uat babel src --out-file build.js"
        "prod": "babel src --out-file build.js --env-name prod"
        —env-name指定env，如—env-name prod，则会找到babel.config.js里面的prod对应的presets和plugins
        env对应的配置会与顶层的配置合并
        如
        {
        	presets: [ [‘@babel/env-presets’] ],
        	plugins: [],
        	env: {
        		sit: {
        			presets: [],这里就算什么也不写，也会有@babel/env-presets
        		}
        	}
        }
        ```
    - --source-maps     [true|false|inline|botah]
    - --compact         [true|false|auto]
    - --minified
        ```
        const getUser = () => {
            return { name: 'sky' } 
        }
        compact结果：var getUser=function getUser(){return{name:'sky'};};	//去掉了空格，换行，添加分号
        minified结果： var getUser=function getUser(){return{name:"sky"}};        //少了一个分号，单引号变成了双引号
        ```
    - --extensions
        ```
            .js,.jsx
        ```
    - --watch
    - --verbose
3. target
    
