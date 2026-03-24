export interface Course {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: CourseCategory;
  tags: string[];
  duration: string;
  lessons: number;
  openmaicUrl: string;
  openmaicId: string;
  isFree: boolean;
  createdAt: string;
  views: number;
}

export type CourseCategory = 
  | 'insurance' 
  | 'law' 
  | 'medical' 
  | 'education'
  | 'finance'
  | 'tech';

export interface CategoryInfo {
  id: CourseCategory;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'insurance',
    name: '保险学院',
    icon: '🛡️',
    description: '保险条款解读、理赔实战指南',
    color: 'bg-blue-500'
  },
  {
    id: 'law',
    name: '法律学院',
    icon: '⚖️',
    description: '合同审查、法律常识科普',
    color: 'bg-purple-500'
  },
  {
    id: 'medical',
    name: '医疗学院',
    icon: '🏥',
    description: '健康科普、就医指南',
    color: 'bg-green-500'
  },
  {
    id: 'education',
    name: '教育学院',
    icon: '📚',
    description: '家庭教育、学习方法',
    color: 'bg-orange-500'
  },
  {
    id: 'finance',
    name: '金融学院',
    icon: '💰',
    description: '理财知识、投资入门',
    color: 'bg-yellow-500'
  },
  {
    id: 'tech',
    name: '科技学院',
    icon: '💻',
    description: 'AI工具使用、效率提升',
    color: 'bg-cyan-500'
  }
];