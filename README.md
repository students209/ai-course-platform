# AI课程内容变现平台

基于 OpenMAIC 生成的垂直领域 AI 课程平台，支持保险、法律、医疗、教育等多个领域课程展示。

## 🚀 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **部署**: Vercel
- **课程生成**: OpenMAIC

## 📁 项目结构

```
ai-course-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 主布局
│   │   ├── page.tsx          # 首页
│   │   ├── globals.css       # 全局样式
│   │   ├── courses/
│   │   │   └── page.tsx      # 课程列表页
│   │   ├── category/[category]/
│   │   │   └── page.tsx      # 分类页面
│   │   └── course/[id]/
│   │       └── page.tsx      # 课程详情页（嵌入OpenMAIC）
│   ├── components/
│   │   ├── Header.tsx        # 头部导航
│   │   ├── Footer.tsx        # 页脚
│   │   ├── CategoryNav.tsx   # 分类导航
│   │   └── CourseCard.tsx    # 课程卡片
│   ├── data/
│   │   └── courses.ts        # 课程数据
│   └── types/
│       └── course.ts         # 类型定义
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 导出静态文件
npm run build
```

## 📦 部署到 Vercel

### 方式1：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel
```

### 方式2：GitHub 自动部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

## 🎨 页面说明

### 首页 (/)
- Hero 横幅
- 统计数据
- 课程分类导航
- 热门课程推荐
- 免费课程推荐
- 最新课程上线

### 课程列表 (/courses)
- 分类筛选
- 排序功能
- 课程卡片展示

### 分类页面 (/category/[category])
- 分类头部
- 该分类下所有课程

### 课程详情 (/course/[id])
- 面包屑导航
- OpenMAIC iframe 嵌入
- 课程信息
- 相关课程推荐

## 📝 添加新课程

编辑 `src/data/courses.ts`:

```typescript
{
  id: 'unique-id',
  title: '课程标题',
  description: '课程描述',
  coverImage: '封面图片URL',
  category: 'insurance', // 分类ID
  tags: ['标签1', '标签2'],
  duration: '15分钟',
  lessons: 5,
  openmaicUrl: 'https://open.maic.chat/classroom/xxx',
  openmaicId: 'xxx',
  isFree: true, // 是否免费
  createdAt: '2026-03-24',
  views: 0
}
```

## 📄 License

MIT