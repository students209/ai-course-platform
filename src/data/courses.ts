import { Course } from '@/types/course';

export const courses: Course[] = [
  // ============ 科技学院 ============
  // OpenClaw 课程系列
  {
    id: 'tech-001',
    title: 'AI工具效率提升：ChatGPT实战应用',
    description: '如何使用ChatGPT提升工作效率？写作、编程、翻译、数据分析...解锁AI工具的10种用法。',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    category: 'tech',
    tags: ['AI', 'ChatGPT', '效率工具'],
    duration: '20分钟',
    lessons: 8,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: false,
    createdAt: '2026-03-24',
    views: 3456
  },
  {
    id: 'tech-002',
    title: 'OpenClaw入门：打造你的AI助手',
    description: '从零开始学习OpenClaw，了解AI Agent架构、技能系统、记忆管理等核心概念，快速上手打造专属AI助手。',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    category: 'tech',
    tags: ['OpenClaw', 'AI Agent', '入门'],
    duration: '25分钟',
    lessons: 10,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-24',
    views: 567
  },
  {
    id: 'tech-003',
    title: 'OpenClaw进阶：自定义技能开发',
    description: '深入学习OpenClaw技能系统，从零开发自定义技能，掌握技能生命周期、工具集成、MCP协议等高级特性。',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    category: 'tech',
    tags: ['OpenClaw', '技能开发', '进阶'],
    duration: '30分钟',
    lessons: 12,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: false,
    createdAt: '2026-03-25',
    views: 234
  },
  
  // ============ 保险学院 ============
  {
    id: 'insurance-001',
    title: '平安福2025条款深度解读',
    description: '全面解读平安福2025保险条款，包括保障范围、除外责任、理赔要点等核心内容，帮助你做出明智的投保决策。',
    coverImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
    category: 'insurance',
    tags: ['重疾险', '条款解读', '平安福'],
    duration: '15分钟',
    lessons: 5,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: false,
    createdAt: '2026-03-20',
    views: 1234
  },
  {
    id: 'insurance-002',
    title: '医疗险理赔实战指南',
    description: '从理赔申请到到账，手把手教你医疗险理赔全流程。包含常见拒赔原因及应对策略。',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
    category: 'insurance',
    tags: ['医疗险', '理赔', '实操指南'],
    duration: '20分钟',
    lessons: 8,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: false,
    createdAt: '2026-03-18',
    views: 892
  },
  {
    id: 'insurance-003',
    title: '保险入门：小白必知的基础知识',
    description: '什么是保险？重疾险、医疗险、意外险有什么区别？如何选择适合自己的保险？',
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    category: 'insurance',
    tags: ['入门', '基础知识', '保险科普'],
    duration: '10分钟',
    lessons: 3,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-15',
    views: 2567
  },
  
  // ============ 法律学院 ============
  {
    id: 'law-001',
    title: '劳动合同避坑指南',
    description: '签订劳动合同前必须注意的10个陷阱，保护你的合法权益不被侵犯。',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
    category: 'law',
    tags: ['劳动法', '合同', '权益保护'],
    duration: '12分钟',
    lessons: 4,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-22',
    views: 1567
  },
  {
    id: 'law-002',
    title: '房屋买卖合同审查要点',
    description: '买房是大事，合同审查不可马虎。本课程教你识别合同中的风险条款，保护你的购房权益。',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    category: 'law',
    tags: ['房产', '合同审查', '买房'],
    duration: '18分钟',
    lessons: 6,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: false,
    createdAt: '2026-03-19',
    views: 756
  },
  
  // ============ 医疗学院 ============
  {
    id: 'medical-001',
    title: '体检报告解读：看懂你的健康数据',
    description: '血常规、肝功能、肾功能...体检报告上的指标到底代表什么？本课程教你读懂体检报告。',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400',
    category: 'medical',
    tags: ['体检', '健康', '报告解读'],
    duration: '15分钟',
    lessons: 5,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-21',
    views: 1890
  },
  
  // ============ 教育学院 ============
  {
    id: 'education-001',
    title: '高效学习方法：费曼学习法',
    description: '诺贝尔物理学奖得主费曼的学习方法，帮助你用最短时间掌握新知识。',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
    category: 'education',
    tags: ['学习方法', '效率', '费曼'],
    duration: '10分钟',
    lessons: 3,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-23',
    views: 2234
  },
  
  // ============ 金融学院 ============
  {
    id: 'finance-001',
    title: '基金投资入门指南',
    description: '什么是基金？如何选择基金？定投还是一次性投入？新手必看的基金投资入门。',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
    category: 'finance',
    tags: ['基金', '投资', '理财入门'],
    duration: '12分钟',
    lessons: 4,
    openmaicUrl: 'https://open.maic.chat/classroom/NDhykLWoPn',
    openmaicId: 'NDhykLWoPn',
    isFree: true,
    createdAt: '2026-03-20',
    views: 1678
  }
];

// 获取热门课程
export function getPopularCourses(limit: number = 6): Course[] {
  return [...courses].sort((a, b) => b.views - a.views).slice(0, limit);
}

// 获取最新课程
export function getLatestCourses(limit: number = 6): Course[] {
  return [...courses]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

// 按分类获取课程
export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(course => course.category === category);
}

// 获取免费课程
export function getFreeCourses(limit: number = 4): Course[] {
  return courses.filter(course => course.isFree).slice(0, limit);
}

// 根据ID获取课程
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}