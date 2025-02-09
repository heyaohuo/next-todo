const Footer = () => {
    return (
      <footer className="bg-background/80 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 第一列 - 关于我们 */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">关于我们</h3>
              <p className="text-muted-foreground text-sm">
                AI FOR AE 致力于为用户提供最优质的人工智能服务和解决方案。
              </p>
            </div>
  
            {/* 第二列 - 快速链接 */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="/products" className="text-muted-foreground hover:text-primary text-sm">产品</a></li>
                <li><a href="/pricing" className="text-muted-foreground hover:text-primary text-sm">价格</a></li>
                <li><a href="/blogs" className="text-muted-foreground hover:text-primary text-sm">博客</a></li>
              </ul>
            </div>
  
            {/* 第三列 - 支持 */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">支持</h3>
              <ul className="space-y-2">
                <li><a href="/help" className="text-muted-foreground hover:text-primary text-sm">帮助中心</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary text-sm">联系我们</a></li>
                <li><a href="/faq" className="text-muted-foreground hover:text-primary text-sm">常见问题</a></li>
              </ul>
            </div>
  
            {/* 第四列 - 联系方式 */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">联系方式</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>邮箱: contact@aiforae.com</li>
                <li>电话: (86) 123-4567</li>
                <li>地址: 中国上海市</li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AI FOR AE. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer