# 课程维护手册

## 📚 快速添加课程

### 方式1：编辑 courses.ts 文件

编辑 `src/data/courses.ts`，在 `courses` 数组中添加新课程：

```typescript
{
  id: 'tech-002',                    // 唯一ID，格式：分类-序号
  title: 'OpenClaw入门教程',          // 课程标题
  description: '从零开始学习OpenClaw，掌握AI Agent开发技能',  // 课程描述
  coverImage: 'https://xxx.jpg',      // 封面图片URL
  category: 'tech',                   // 分类：insurance/law/medical/education/finance/tech
  tags: ['OpenClaw', 'AI', 'Agent'],  // 标签数组
  duration: '30分钟',                 // 课程时长
  lessons: 10,                        // 课时数
  openmaicUrl: 'https://open.maic.chat/classroom/xxx',  // OpenMAIC链接
  openmaicId: 'xxx',                  // OpenMAIC ID（链接最后一段）
  isFree: true,                       // 是否免费
  createdAt: '2026-03-24',            // 创建日期
  views: 0                            // 初始浏览量
}
```

### 方式2：使用脚本批量添加（推荐）

创建 `scripts/add-course.ts`：

```typescript
// 运行：npx ts-node scripts/add-course.ts

const courses = [
  {
    id: 'tech-002',
    title: 'OpenClaw基础入门',
    // ...
  }
];

console.log(JSON.stringify(courses, null, 2));
```

---

## 📂 文件结构

```
src/data/
└── courses.ts          # 所有课程数据

src/types/
└── course.ts           # 类型定义

src/app/
├── course/[id]/page.tsx    # 课程详情页
└── category/[category]/page.tsx  # 分类页面
```

---

## 🎯 分类维护

### 现有分类

| ID | 名称 | 图标 | 说明 |
|-----|------|------|------|
| insurance | 保险学院 | 🛡️ | 保险条款、理赔 |
| law | 法律学院 | ⚖️ | 合同、法律常识 |
| medical | 医疗学院 | 🏥 | 健康科普 |
| education | 教育学院 | 📚 | 家庭教育 |
| finance | 金融学院 | 💰 | 理财投资 |
| tech | 科技学院 | 💻 | AI工具、效率 |

### 添加新分类

编辑 `src/types/course.ts`：

```typescript
export type CourseCategory = 
  | 'insurance' 
  | 'law' 
  | 'medical' 
  | 'education'
  | 'finance'
  | 'tech'
  | 'new-category';  // 添加新分类

export const CATEGORIES: CategoryInfo[] = [
  // ... 现有分类
  {
    id: 'new-category',
    name: '新分类名称',
    icon: '🎯',
    description: '分类描述',
    color: 'bg-pink-500'  // Tailwind 颜色类
  }
];
```

---

## 🔧 课程数据字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | ✅ | 唯一标识，格式：`分类-序号` |
| title | string | ✅ | 课程标题 |
| description | string | ✅ | 课程描述（建议50-100字） |
| coverImage | string | ✅ | 封面图片URL |
| category | string | ✅ | 分类ID |
| tags | string[] | ✅ | 标签（建议2-5个） |
| duration | string | ✅ | 时长（如：15分钟） |
| lessons | number | ✅ | 课时数 |
| openmaicUrl | string | ✅ | OpenMAIC完整链接 |
| openmaicId | string | ✅ | OpenMAIC ID |
| isFree | boolean | ✅ | 是否免费 |
| createdAt | string | ✅ | 创建日期（YYYY-MM-DD） |
| views | number | ✅ | 浏览量（初始为0） |

---

## 📝 完整示例：添加 OpenClaw 课程

```typescript
// src/data/courses.ts

export const courses: Course[] = [
  // ... 现有课程
  
  // OpenClaw 入门课程
  {
    id: 'tech-002',
    title: 'OpenClaw入门：打造你的AI助手',
    description: '从零开始学习OpenClaw，了解AI Agent架构、技能系统、记忆管理等核心概念，快速上手打造专属AI助手。',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    category: 'tech',
    tags: ['OpenClaw', 'AI Agent', '入门'],
    duration: '25分钟',
    lessons: 8,
    openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID_HERE',
    openmaicId: 'YOUR_ID_HERE',
    isFree: true,
    createdAt: '2026-03-24',
    views: 0
  },
  
  // OpenClaw 进阶课程
  {
    id: 'tech-003',
    title: 'OpenClaw进阶：自定义技能开发',
    description: '深入学习OpenClaw技能系统，从零开发自定义技能，掌握技能生命周期、工具集成等高级特性。',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    category: 'tech',
    tags: ['OpenClaw', '技能开发', '进阶'],
    duration: '30分钟',
    lessons: 12,
    openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID_HERE',
    openmaicId: 'YOUR_ID_HERE',
    isFree: false,
    createdAt: '2026-03-25',
    views: 0
  },
];
```

---

## 🖼️ 封面图片获取

### 推荐：Unsplash API
```typescript
// 格式：https://images.unsplash.com/photo-XXX?w=400
// w=400 表示宽度400px
```

### 分类封面推荐关键词
| 分类 | 关键词 |
|------|--------|
| insurance | insurance, document, protection |
| law | law, justice, contract |
| medical | medical, health, doctor |
| education | education, learning, books |
| finance | finance, money, investment |
| tech | technology, computer, coding |

---

## 🚀 更新流程

### 1. 本地测试
```bash
cd /Users/alpha/Documents/learn/openclaw_project/ai-course-platform
npm run dev
# 访问 http://localhost:3000 预览
```

### 2. 构建验证
```bash
npm run build
# 确保没有错误
```

### 3. 提交代码
```bash
git add .
git commit -m "feat: 添加OpenClaw入门课程"
git push
```

### 4. 自动部署
- Vercel 会自动检测 GitHub 推送
- 无需手动操作，等待 1-2 分钟即可

---

## 📊 课程运营建议

### 课程命名规范
- 格式：`[主题] + [类型]`
- 示例：
  - ✅ OpenClaw入门教程
  - ✅ 保险条款解读指南
  - ❌ OpenClaw课程1
  - ❌ 保险相关内容

### 描述规范
- 长度：50-100字
- 包含：课程价值 + 目标人群 + 核心内容

### 标签规范
- 数量：2-5个
- 格式：关键词、不含特殊字符
- 示例：`['OpenClaw', 'AI Agent', '入门']`

---

## 🔍 常见问题

### Q: 课程不显示？
A: 检查 `id` 是否唯一，`category` 是否正确

### Q: 封面图片不显示？
A: 确保图片 URL 可访问，建议使用 HTTPS

### Q: OpenMAIC 链接不加载？
A: 检查 `openmaicUrl` 是否正确，确认链接可公开访问

---

## 📞 维护联系

- 项目路径：`/Users/alpha/Documents/learn/openclaw_project/ai-course-platform`
- 数据文件：`src/data/courses.ts`
- 类型定义：`src/types/course.ts`