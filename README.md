# Vue-Books-List 小專案

## 成品展示網址，可以直接體驗！
https://richlii.github.io/Vue-Books-List/

## 專案架構
- 開發環境使用 Vue-CLI
- 使用 Tailwind 為 CSS 框架
- 使用 Vue-Router 做頁面上的切換，分為三個頁面
- 使用 Vue3 CompositionAPI
---
## 頁面
- **列表頁面** 

  列出所有書本的作者及書名，使用 CSS 做出 Hover 動畫 (手機版沒有)，右上角可以新增書本

  ![image](/assets/p1.png)
- **書本獨立頁面** 

  這個頁面顯示書名、作者及備註，點擊右上角可以修改書本內容

  ![image](/assets/p2.png)
- **新增書本頁面** 

  新增書本頁面

  ![image](/assets/p3.png)
---
## 邏輯、流程
### 主要頁面 Views
- 進入首頁（列表頁面）後，在 Vue 掛載完成後會先 GET API 去拿所有的書本資料，排序後將他渲染到頁面上

- 書本獨立本頁面是使用每本書的 ID 當網址，若輸入不對的編號會導向 404 頁面

- **修改完成** 會重新加載本頁

- **新增書本** 成功後會導向首頁

- 書本頁中可以修改書本資料，也可刪除書本，也都會有提示框顯示，提升 UI / UX

  ![image](/assets/p4.png)
  ![image](/assets/p5.png)


### 子元件 Components
- 列表上每一本書都是一個 Component，所有的資訊與功能都封裝在這個 Component 裡面
- Header 及輸入匡也都是 Component，若有重複使用的 tempelate 都會封裝成 Component，透過 Props 與 emits 去做參數上的變動

---
## 使用技術、套件
### axios
- 拿來發送 API 的套件，若是需要初始化某些資料，需要在 onMounted 這個生命週期當中使用，這樣才能正確的將資料渲染到畫面上。
- 預設傳送資料的格式是 JSON，若是後端 API 需要其他格式資料就必須再作轉換
- 若是有一些跨域上的驗證或是 TOKEN 的傳送，可以調整他 HEADER 後的參數
### Qs
- 很多後端預設的資料格式會是一個序列化的字串格時，這時候用 Qs 就可以很方便的把它序列化成指定的格式
- 此專案中，新增書本時有用上 Qs 去序列化資料
### prettier-plugin-tailwindcss
- 直接用下方指令安裝完就可以使用了，超方便！

  ```
  npm install -D prettier prettier-plugin-tailwindcss
  ```
- 可以幫你排序 Tailwind 的 Class，讓整個專案閱讀及維護上更方便

---

## 安裝說明

### 安裝開發環境
```
npm install --legacy-peer-dev
```

### 執行開發伺服器
```
npm run serve
```

### 打包
```
npm run build
```

