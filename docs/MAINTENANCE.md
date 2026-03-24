# 课程维护手册 v2.0

## 📚 课程结构说明

### 一个课程 = 多个章节

```
课程卡片
├── 第1集
├── 第2集
├── 第3集
└── ...
```

**示例**：OpenClaw入门教程
- 1个课程卡片
- 7集视频（7个OpenMAIC链接）
- 用户点击后可选择观看哪一集

---

## 🎯 快速添加课程

### 编辑文件

编辑 `src/data/courses.ts`

### 单集课程（1个视频）

```typescript
{
  id: 'tech-004',
  title: '课程标题',
  description: '课程描述',
  coverImage: 'https://images.unsplash.com/photo-xxx?w=400',
  category: 'tech',
  tags: ['标签1', '标签2'],
  totalDuration: '15分钟',
  chapters: [
    {
      id: 'tech-004-ch1',
      title: '第1集：课程标题',
      duration: '15分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID',
      openmaicId: 'YOUR_ID'
    }
  ],
  isFree: true,
  createdAt: '2026-03-24',
  views: 0
}
```

### 多集课程（多个视频）

```typescript
{
  id: 'tech-005',
  title: 'Python入门教程',
  description: '从零开始学习Python编程',
  coverImage: 'https://images.unsplash.com/photo-xxx?w=400',
  category: 'tech',
  tags: ['Python', '编程', '入门'],
  totalDuration: '2小时',
  chapters: [
    {
      id: 'tech-005-ch1',
      title: '第1集：Python简介与环境搭建',
      duration: '20分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/ID1',
      openmaicId: 'ID1'
    },
    {
      id: 'tech-005-ch2',
      title: '第2集：变量与数据类型',
      duration: '25分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/ID2',
      openmaicId: 'ID2'
    },
    {
      id: 'tech-005-ch3',
      title: '第3集：条件语句与循环',
      duration: '30分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/ID3',
      openmaicId: 'ID3'
    },
    // ... 更多章节
  ],
  isFree: false,
  createdAt: '2026-03-24',
  views: 0
}
```

---

## 📝 字段说明

### 课程字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | ✅ | 唯一ID，格式：`分类-序号` |
| title | string | ✅ | 课程标题 |
| description | string | ✅ | 课程描述 |
| coverImage | string | ✅ | 封面图片URL |
| category | string | ✅ | 分类ID |
| tags | string[] | ✅ | 标签数组 |
| totalDuration | string | ✅ | 总时长（如：1小时40分钟） |
| chapters | Chapter[] | ✅ | 章节数组 |
| isFree | boolean | ✅ | 是否免费 |
| createdAt | string | ✅ | 创建日期 |
| views | number | ✅ | 浏览量 |

### 章节字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | ✅ | 章节ID，格式：`课程ID-ch序号` |
| title | string | ✅ | 章节标题 |
| duration | string | ✅ | 时长 |
| openmaicUrl | string | ✅ | OpenMAIC完整链接 |
| openmaicId | string | ✅ | OpenMAIC ID |

---

## 🎨 ID命名规范

### 课程ID
- 格式：`分类-序号`
- 示例：
  - `tech-001` - 科技学院第1门课
  - `insurance-005` - 保险学院第5门课

### 章节ID
- 格式：`课程ID-ch序号`
- 示例：
  - `tech-001-ch1` - 第1集
  - `tech-001-ch2` - 第2集
  - `tech-001-ch7` - 第7集

---

## 🔧 完整示例：添加新课程

### 示例：添加"OpenClaw MCP协议"课程

```typescript
// 在 src/data/courses.ts 的 courses 数组中添加

{
  id: 'tech-004',
  title: 'OpenClaw MCP协议实战',
  description: '学习MCP协议在OpenClaw中的应用，掌握工具标准化集成方法。',
  coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
  category: 'tech',
  tags: ['OpenClaw', 'MCP', '进阶'],
  totalDuration: '45分钟',
  chapters: [
    {
      id: 'tech-004-ch1',
      title: '第1集：MCP协议概述',
      duration: '15分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID_1',
      openmaicId: 'YOUR_ID_1'
    },
    {
      id: 'tech-004-ch2',
      title: '第2集：配置MCP服务器',
      duration: '15分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID_2',
      openmaicId: 'YOUR_ID_2'
    },
    {
      id: 'tech-004-ch3',
      title: '第3集：实战：接入外部API',
      duration: '15分钟',
      openmaicUrl: 'https://open.maic.chat/classroom/YOUR_ID_3',
      openmaicId: 'YOUR_ID_3'
    }
  ],
  isFree: false,
  createdAt: '2026-03-25',
  views: 0
}
```

---

## 🖼️ 封面图片

### 推荐：Unsplash
```
格式：https://images.unsplash.com/photo-XXX?w=400
```

### 分类关键词
| 分类 | 搜索关键词 |
|------|-----------|
| tech | coding, computer, AI, technology |
| insurance | document, protection, business |
| law | law, justice, contract |
| medical | health, medical, doctor |
| education | learning, books, study |
| finance | finance, money, investment |

---

## 📺 视频播放功能

### 支持的功能
- ✅ **全屏播放**：用户可点击全屏按钮
- ✅ **章节切换**：点击目录切换不同章节
- ✅ **防查看源码**：禁用右键、F12等快捷键

### 全屏提示
播放器右下角显示"支持全屏播放"提示

---

## 🚀 更新流程

```bash
# 1. 编辑课程数据
vim src/data/courses.ts

# 2. 本地测试
npm run dev
# 访问 http://localhost:3000

# 3. 构建验证
npm run build

# 4. 提交推送
git add .
git commit -m "feat: 添加OpenClaw MCP协议课程"
git push

# 5. Vercel自动部署
# 等待1-2分钟
```

---

## 📊 当前课程统计

| 分类 | 课程数 | 总集数 |
|------|--------|--------|
| 科技学院 | 3 | 11集 |
| 保险学院 | 3 | 3集 |
| 法律学院 | 1 | 1集 |
| 医疗学院 | 1 | 1集 |
| 教育学院 | 1 | 1集 |
| 金融学院 | 1 | 1集 |
| **合计** | **10** | **18集** |

---

## ❓ 常见问题

### Q: 如何添加单集课程？
A: chapters 数组只放一个元素即可

### Q: 如何调整章节顺序？
A: 修改 chapters 数组的顺序

### Q: 如何删除章节？
A: 删除 chapters 数组中对应的元素

### Q: OpenMAIC ID 如何获取？
A: 从 OpenMAIC 生成的课程链接中提取，如 `https://open.maic.chat/classroom/NDhykLWoPn` 的 ID 是 `NDhykLWoPn`

---

## 📞 文件位置

```
/Users/alpha/Documents/learn/openclaw_project/ai-course-platform/
├── src/data/courses.ts        # 课程数据
├── src/types/course.ts        # 类型定义
└── docs/MAINTENANCE.md        # 本手册
```