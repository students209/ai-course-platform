# 部署指南

## 🚀 快速部署到 Vercel

### 方式1：通过 Vercel 网站（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 登录或注册账号

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 授权 GitHub
   - 选择 `students209/ai-course-platform` 仓库

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **部署**
   - 点击 "Deploy"
   - 等待 1-2 分钟
   - 部署成功！

### 方式2：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署到生产环境
cd /Users/alpha/Documents/learn/openclaw_project/ai-course-platform
vercel --prod
```

---

## 📦 项目信息

| 项目 | 信息 |
|------|------|
| GitHub | https://github.com/students209/ai-course-platform |
| 本地路径 | `/Users/alpha/Documents/learn/openclaw_project/ai-course-platform` |
| 框架 | Next.js 14 |
| 部署平台 | Vercel |

---

## 🔄 更新部署

### 自动部署
- 推送到 GitHub 后，Vercel 会自动重新部署
- 无需手动操作

```bash
cd /Users/alpha/Documents/learn/openclaw_project/ai-course-platform
git add .
git commit -m "update: 课程更新"
git push origin master
# Vercel 自动部署，等待 1-2 分钟
```

### 手动部署
```bash
vercel --prod
```

---

## 🌐 预期域名

部署成功后，Vercel 会分配一个域名：
- 默认域名：`ai-course-platform.vercel.app`
- 或自定义域名（需在 Vercel 设置）

---

## ✅ 部署检查清单

- [ ] GitHub 仓库已创建
- [ ] Vercel 账号已登录
- [ ] 项目已导入 Vercel
- [ ] 部署成功
- [ ] 网站可访问

---

## 🛠️ 常见问题

### Q: 部署失败？
A: 检查 `npm run build` 是否本地可以成功

### Q: 页面空白？
A: 检查浏览器控制台是否有错误

### Q: 课程数据不显示？
A: 检查 `src/data/courses.ts` 格式是否正确

---

## 📞 相关链接

- GitHub: https://github.com/students209/ai-course-platform
- Vercel Dashboard: https://vercel.com
- 维护手册: `docs/MAINTENANCE.md`