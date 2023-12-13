# 从零搭建前后端NFT铸造网站

### 描述：本项目是针对Beginner和客户演示的网站页面Mint NFT的Demo版本

### 项目截图
![钱包未链接](/public/images/WX20231213-093741@2x.png)
![钱包已链接](/public/images/WX20231213-093754@2x.png)

### 项目结构
- 合约部分
  - 部署环境：测试网 Seplla
  - 钱包：MetaMask钱包
  - 合约需要通过编译并且Verified通过
- 前端部分
  - create-react-app脚手架
  
### 技术框架
- Solidity 0.8.20以上版本
- hardhat
- infura
- chakra ui 一个高可用的React UI库
- vercel 前端云部署
- 静态资源在项目中直接按需下载
  
### 项目在线体验
[在线体验](https://full-mint-website-cyptojunes-projects.vercel.app/)  

### 项目启动
- 合约部分
   1. 合约清除缓存
    ```
     npx hardhat clean
    ```
   2. 合约编译
    ```
     npx hardhat compile
    ```
   3. 合约部署
    ```
    npx hardhat run --network sepolia scripts/deployRoboPunksNFT.js
    ``` 
   4. 合约verify(有三种方法)
   -  hardhat脚本verified
   -  在线remix verified
   -  etherscan verified
  
- 网站前端部分
  
  1. 下载安装依赖
    ```
    npm install
    ```
   2. 本地启动
   ```
   npm run start
   ```
   3. 项目编译
   ```
   npm run build
   ```
### 业务规则说明
- 规则规定每个钱包最多mint三个NFT,可以按需更改
- 本项目的合约地址:0x3304F3F0033dcE9D4c6a53A59266eD2aE75D1617
- ABI文件在 /src/RoboPunksNFT.json

