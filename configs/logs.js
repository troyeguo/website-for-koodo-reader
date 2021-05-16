const changeLogs = [
  {
    date: "2021.5.16",
    version: "1.2.6",
    new: [
      "增加对Djvu和Markdown格式的支持",
      "网页版支持阅读mobi、azw3和txt格式，目前还只能查看，无法记录阅读位置，添加笔记书摘，修改样式",
      "完善同步功能，增加同步指导",
      "当mobi和azw3文件中包含的图片过多时，将不再进行格式转换，而是以网页版的方式打开，只能查看",
      "图书默认以上次的窗口大小打开，您可以前往设置开启窗口自动最大化功能",
      "新增软件字体设置",
      "启动页现在会随黑夜模式变化",
      "UI细节优化",
    ],
    fix: [
      "修复webdav上传的bug",
      "修复更改阅读器窗口大小时，图书消失的bug",
      "修复未导入图书时，无法双击打开图书的bug",
      "修复更改阅读选项后，阅读器窗口意外退出的bug",
    ],
  },
  {
    date: "2021.4.18",
    version: "1.2.5",
    new: [
      "新增黑夜模式和主题色设置，前往设置开启",
      "阅读选项新增段落间距、斜体，下划线，文字阴影",
      "搜索引擎新增 Yandex 和 Yahoo",
      "新增不接收更新提示的设置",
      "PDF文件不再使用图书首页作为封面",
      "打开图书后，主窗口可被最小化",
      "UI细节优化",
      "分章算法优化",
    ],
    fix: [
      "修复部分低配置电脑上退出阅读后无法操作软件的bug",
      "修复打开图书时闪屏的bug",
      "修复双击打开pdf,mobi,azw3,txt文件后图书名为file的bug",
      "修复双击打开图书软件最小化的bug",
      "修复部分低配置电脑上退出阅读后软件白屏的bug",
      "修复退出阅读后无法保存窗口大小的bug",
      "修复添加到书架弹窗不显示的bug",
      "修复选择边缘位置的文字时，弹窗超出边界的bug",
    ],
  },
  {
    date: "2021.4.11",
    version: "1.2.4",
    new: [
      "支持保存自定义的文字和背景颜色",
      "增加手动同步按钮，不再支持自动同步",
      "Windows增加zip和7z格式安装包，macOS增加arm版安装包，Linux增加snap、deb和rpm格式安装包",
      "支持批量导入mobi,azw3,txt格式电子书",
      "当窗口宽度小于780px时，双页模式自动切换为单页模式",
      "增加文字对齐选项，左对齐，右对齐，两端对齐",
      "阅读器弹窗增加关闭按钮",
      "打开图书时自动隐藏主窗口",
      "新增文件图标，将Koodo设为默认打开方式后，图标才会生效",
      "阅读器弹窗新增全文搜索，网上搜索和朗读文字选项，设置中选择默认搜索引擎",
      "优化dropbox和webdav上传速度",
      "macOS支持双击打开图书",
      "卸载Koodo会默认删除所有数据",
      "UI细节优化",
      "分章算法优化",
    ],
    fix: [
      "修复单页和滚动模式下，弹窗位置的问题",
      "修复部分中文pdf无法正常显示的问题",
      "修复记忆窗口大小时，进入全屏无法退出全屏的问题",
      "修复大体积的pdf文件无法打开的问题",
      "修复pdf文件无法记忆窗口大小的问题",
      "修复主窗口图书弹窗的位置问题",
    ],
  },
  {
    date: "2021.3.14",
    version: "1.2.3",
    new: [
      "支持收起侧边栏",
      "听书功能支持修改语速和声音",
      "新增俄语翻译，感谢 vanja-san 提供翻译",
      "支持通过Docker部署，感谢 yanickxia 提交的PR",
      "图书菜单新增显示书架位置",
      "支持将Koodo Reader设为图书的默认打开方式",
      "支持设置文字之间的间距",
      "支持自定义缩放比例",
      "支持记忆上次打开图书窗口的大小和位置，前往设置开启",
      "支持同时打开多个Koodo Reader",
      "分章算法优化",
      "UI细节优化",
    ],
    fix: [
      "修复清空图书后笔记书摘保留的bug",
      "修复搜索包含大写字母的英文时没有搜索结果的bug",
      "修复macOS的图标问题",
      "修复听书功能中断的bug",
    ],
  },
  {
    date: "2021.2.12",
    version: "1.2.2",
    new: [
      "这是一个紧急修复的版本 1.2.2，紧急修复部分设备打开图书白屏的问题",
      "下面是1.2.1的更新日志",
      "支持修改数据的存储位置，仅客户端支持",
      "新增多端同步功能，仅客户端支持，需要在多台电脑上将数据存储位置修改为网盘中的同一文件夹，并开启从存储位置同步功能。",
      "视图选项新增封面模式",
      "增加对win7系统的支持",
      "支持固定两边的菜单栏",
      "UI细节优化",
      "优化分章算法",
      "新增文字加粗选项",
      "去除我的书签标签页",
      "支持取消网盘的授权",
      "增大页面的缩放比例",
    ],
    fix: [
      "修复部分设备打开图书白屏的bug",
      "修复笔记书摘无法删除的bug",
      "修复导入图书失败后，加载动画不消失的bug",
      "修复点击图书中部分链接时，弹窗提示的bug",
      "修复部分图书文件名和文件类型识别的bug",
      "修复esc键退出全屏，无法再次进入全屏的bug",
      "最后祝大家春节快乐",
    ],
  },
  {
    date: "2021.2.12",
    version: "1.2.1",
    new: [
      "支持修改数据的存储位置，仅客户端支持",
      "新增多端同步功能，仅客户端支持，需要在多台电脑上将数据存储位置修改为网盘中的同一文件夹，并开启从存储位置同步功能。",
      "视图选项新增封面模式",
      "增加对win7系统的支持",
      "支持固定两边的菜单栏",
      "UI细节优化",
      "优化分章算法",
      "新增文字加粗选项",
      "去除我的书签标签页",
      "支持取消网盘的授权",
    ],
    fix: [
      "修复笔记书摘无法删除的bug",
      "修复导入图书失败后，加载动画不消失的bug",
      "修复点击图书中部分链接时，弹窗提示的bug",
      "修复部分图书文件名和文件类型识别的bug",
      "修复esc键退出全屏，无法再次进入全屏的bug",
      "最后祝大家春节快乐",
    ],
  },
  {
    date: "2021.1.24",
    version: "1.2.0",
    new: [
      "新增webdav备份方式，仅客户端支持",
      "支持导入mobi,azw3文件中的图片，暂不支持漫画等图片较多的文件，容易导致软件崩溃",
      "UI细节优化，增加一些动画效果",
      "支持修改页面边距",
      "支持分别设置页眉页脚的显示",
      "针对竖屏显示进行优化",
      "页眉页脚和仿真背景的设置放到阅读选项中",
      "客户端打开的图书自动最大化",
    ],
    fix: [
      "修复设置笔记书摘排序后，图书消失的bug",
      "修复设置页面缩放比例时，页面自动刷新的bug",
    ],
  },
  {
    date: "2020.12.27",
    version: "1.1.9",
    new: [
      "图书增加按阅读进度和作者名排序",
      "笔记和书摘增加按书名排序",
      "支持自定义阅读背景色和文字颜色",
      "优化图书分章算法",
      "客户端支持同时打开多本图书",
      "客户端支持图书窗口大小",
      "阅读器新增换页按钮，位于左右下角",
      "增加一些交互动画",
      "windows提供便携版安装包，后续更新请到官网下载",
      "支持自定义安装目录",
    ],
    fix: [
      "修复txt文件导入乱码问题",
      "修复听书功能的bug",
      "修复清空图书时，笔记书摘未删除的问题",
      "修复缩放比例过大时，页面从单页模式变成双页模式",
      "修复部分图书无法记录阅读进度的问题",
      "修复自动打开上次阅读图书和双击图书打开的冲突问题",
    ],
  },
  {
    date: "2020.11.21",
    version: "1.1.8",
    new: [
      "增加对 azw3 格式的支持，仅客户端支持，暂不支持图片功能",
      "新增回收站功能，删除的图书会被临时移至回收站中，回收站的图书仍然可以恢复，清空回收站才会永久删除图书",
      "windows上支持使用 Koodo Reader 直接打开epub, pdf, mobi, azw3和txt文件，打开方式选择Koodo Reader，打开的文件会自动添加到书库中",
      "增加按阅读时长排序功能",
      "笔记的下方会显示原文的内容",
      "单页模式的缩放比例增加到200%，去除两边的切换章节按钮，您仍然可以使用进度栏中的箭头切换章节",
      "支持拖拽图书添加到我的喜欢和回收站",
      "使用内嵌字体设置移至阅读选项中",
      "优化mobi和txt图书的解析和分章算法",
      "图书封面左上角新增阅读进度",
    ],
    fix: [
      "修复国际化失效的问题",
      "修复自动打开图书的bug",
      "修复页数不更新的问题",
      "修复点击目录跳转浏览器的问题",
    ],
  },
  {
    version: "1.1.7",
    versionTag: "1-1-7",
    date: "18 October, 2020",
    new: [
      "增加对pdf格式的支持，暂不支持笔记，书签等功能",
      "增加对mobi格式的支持，仅客户端支持，暂不支持图片功能",
      "增加对txt格式的支持，仅客户端支持",
      "使用 React Router 重构代码",
      "进一步减少内存占用",
      "设置新增是否默认展开所有目录",
      "网页版支持同时打开多本图书",
      "客户端打开图书时，窗口自动最大化",
    ],
    fix: [
      "修复多级目录无法展开的问题",
      "修复字体，字体大小换章失效的问题",
      "修复进度条无法跳转的问题",
      "修复英文界面的排版问题",
    ],
  },
  {
    version: "1.1.6",
    versionTag: "1-1-6",
    date: "29 September, 2020",
    fix: [
      "解除之前的书籍大小和数量限制",
      "修复书签页崩溃的问题",
      "修复触控模式下的一些bug，点击边缘唤出菜单，再点击图书，退出菜单",
    ],
    new: [
      "减少内存占用，提升首屏打开速度，优化多文件导入体验",
      "滚动模式新增连续滚动和分章滚动",
      "单页模式下支持调节页面的缩放比例",
      "我的书架现在移动到全部图书的顶部",
      "支持删除书架和标签",
      "新增本次阅读时间，本章剩余时间",
      "页眉，页脚现在会显示当前页数，书名和章节名，如不需要，请前往设置关闭",
      "支持关闭图书的仿真背景，请前往设置关闭",
      "支持缩放、旋转、保存书中的图片",
    ],
  },
  {
    version: "1.1.5",
    versionTag: "1-1-5",
    date: "13 September, 2020",
    fix: [
      "修复滚动模式下的一些bug",
      "修复备份恢复时的崩溃问题",
      "客户端启动时的性能优化",
    ],
    new: [
      "新增听书功能",
      "增加对触控屏的支持，请前往设置->开启触控模式，阅读时双击页面唤出菜单，再双击退出，上下左右滑动控制翻页",
      "单页模式新增滚动阅读功能",
      "支持搜索笔记和书摘",
      "支持给笔记和书摘添加标签",
      "新增下划线标记功能",
      "支持收起多级目录",
      "支持自动打开上次阅读的图书，请前往设置->自动打开上次阅读的图书",
      "支持控制是否使用内嵌字体，请前往设置->使用内嵌字体",
      "新增黑色阅读主题",
      "客户端新增启动动画",
    ],
  },
  {
    version: "1.1.4",
    versionTag: "1-1-4",
    date: "6 September, 2020",
    fix: ["修复图片错页显示的问题", "修复批量导入时，部分图书无法导入的问题"],
    new: [
      "支持全书搜索",
      "客户端版本支持使用本地字体",
      "单页模式新增滚动阅读功能",
      "新增对epub文件内置样式的支持",
      "字体支持任意大小的调节",
      "UI细节优化",
    ],
  },
  {
    version: "1.1.3",
    versionTag: "1-1-3",
    date: "23 August, 2020",
    fix: [
      "修复笔记，书摘，书签跳转位置不准确的问题",
      "修复删除书签导致阅读器崩溃的问题",
      "修复阅读进度为NaN的问题",
      "修复笔记弹窗超出阅读器范围的问题",
      "修复导入图书失败后，图书页面闪烁问题",
    ],
    new: [
      "现在您可以给喜爱的图书添加心形标记，并且可以在我的喜爱中找到所有标记过的图书",
      "添加书签之后，这一页的右上角会出现书签图标",
      "图书操作的UI优化",
    ],
  },
  {
    version: "1.1.2",
    versionTag: "1-1-2",
    date: "4 August, 2020",
    fix: [],
    new: [
      "新增高亮颜色选择功能",
      "新增从笔记和书摘直接跳转到原书位置的功能",
      "新增多级目录功能",
      "新增图片预览功能",
      "笔记现在可以编辑了，书摘也可以添加笔记，笔记和书摘在文中都会以高亮显示",
      "增加对繁体中文的支持，您可以点击顶部语言按钮，自由切换语言",
      "增加翻译功能，使用百度翻译的API",
      "删除最近阅读标签页，最近阅读和添加的图书会自动显示在全部图书的首位",
      "备份功能现在支持 OneDrive 啦",
    ],
  },
  {
    version: "1.1.1",
    versionTag: "1-1-1",
    date: "13 July, 2020",
    fix: [
      "修复卡片模式和列表模式图标和文字不居中对齐的问题",
      "修复ESC退出全屏后，无法在此进入全屏的问题",
      "修复删除按钮多处显示的问题",
    ],
    new: [],
  },
  {
    version: "1.1.0",
    versionTag: "1-1-0",
    date: "2 July, 2020",
    fix: [],
    new: [
      "现在 Koodo Reader 支持绑定 Dropbox 实现备份啦，更多网盘会在后续更新中支持",
      "书签，高亮，笔记和书摘支持删除啦",
      "支持批量添加图书",
    ],
  },
  {
    version: "1.0.9",
    versionTag: "1-0-9",
    date: "21 June, 2020",
    fix: [
      "修复字体调节bug",
      "修复语言切换无法保存的bug",
      "修复设置面板异常退出bug",
    ],
    new: [
      "代码重构，增加代码可读性，将源代码的xxx.js拆分为index.js, component.js,interface.js三个文件",
      "使用Google Font统一字体为Source Sans Pro",
    ],
  },
  {
    version: "1.0.8",
    versionTag: "1-0-8",
    date: "8 June, 2020",
    fix: [
      "修复logo字体问题",
      "修复高亮显示异常的问题",
      "字体选择替换为更加常用的字体，如宋体，黑体，Times New Roman",
    ],
    new: [
      "现在 Koodo Reader 支持英文啦！非中文操作系统会自动显示为英文界面",
      "Koodo Reader 官网正式上线啦！",
      "支持拖拽添加图书，把图书拖拽到导入图书的按钮上就可以实现添加图书",
    ],
  },
  {
    version: "1.0.7",
    versionTag: "1-0-7",
    date: "27 Apr, 2020",
    fix: [
      "修复备份恢复后白屏的问题",
      "删除多余的测试代码",
      "去除页边距设置选项",
      "部分选项标题加粗显示",
    ],
    new: ["整个项目使用Typescript重构", "原Javascript代码保存在Javascript分支"],
  },
];
module.exports = changeLogs;
