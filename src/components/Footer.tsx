import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎓</span>
              <span className="font-bold text-xl">AI课程平台</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              基于 OpenMAIC 生成的垂直领域 AI 课程平台，提供保险、法律、医疗、教育等多领域优质课程。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">首页</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">全部课程</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">关于我们</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">课程分类</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/category/insurance" className="hover:text-white transition-colors">
                  🛡️ 保险学院
                </Link>
              </li>
              <li>
                <Link href="/category/law" className="hover:text-white transition-colors">
                  ⚖️ 法律学院
                </Link>
              </li>
              <li>
                <Link href="/category/medical" className="hover:text-white transition-colors">
                  🏥 医疗学院
                </Link>
              </li>
              <li>
                <Link href="/category/tech" className="hover:text-white transition-colors">
                  💻 科技学院
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 AI课程平台. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}