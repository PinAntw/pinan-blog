// data/projects.ts
export const projects = [
    {
      title: 'Predicting HTMLB Championship Winners',
      summary: '本專案為台大林軒田機器學習期末專案，利用機器學習方法，預測HTMLB（棒球模擬資料）的贏家隊伍。我們透過Data imputation，Feature Selection等方法，'
      +'利用GBDT, SVM, MLP, Logistic Regression完成預測，Kaggle排行前20%成績。',
      image: '',
      repoUrl: 'https://github.com/PinAntw/htMLBprediction-MachineLearnig-NTU.git',
      badges: ['ML','scikit-learn'],
    },
    {
      title: '公司打卡活動系統',
      summary: '本專案為台大分散式系統期末專案，完成了一個基於 FastAPI 和 Google Cloud Platform (GCP) 建立的分散式系統應用程式，'+
      '實現用戶管理、活動組別管理、打卡功能以及排行榜的功能，也有使用locust執行測試腳本，進行流量偵測。該系統已將前端和後端完全容器化，並通過 GCP Cloud Run 安裝和使用。',
      image: '',
      repoUrl: 'https://github.com/PinAntw/termproject-Distributed_System-NTU.git',
      badges: ['Backend', 'Cloud'],
    },
    {
        title: '卡片翻牌Android APP',
        summary: '本專案為成大軟體設計期末專案，使用Kotlin撰寫出Set翻牌遊戲',
        image: '',
        repoUrl: 'https://github.com/PinAntw/SetCard_Game_AndroidAPP.git',
        badges: ['Kotlin', 'AndroidAPP'],
      },
    {
    title: 'Monstersweeper ExcelVBA專案',
    summary: '本專案利用Excel VBA語法，可以在Excel上面遊玩掃地雷，以及經過團隊設計的RPG版本踩地雷。',
    image: '',
    repoUrl: 'https://github.com/PinAntw/MonsterSweeper_VBAproject.git',
    badges: ['ExcelVBA'],
    },
    {
      title: '茶與農產品介紹前端作品',
      summary: '一個基於Next框架開發的前端作品，部署在vercel平台',
      image: '',
      repoUrl: 'https://taichapu.vercel.app/',
      badges: ['Frontend'],
      },
  ];
  