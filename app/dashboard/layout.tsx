export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 工作区顶部标题 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">工作区</h1>
        <p className="text-muted-foreground mt-2">管理你的所有视频平台内容</p>
      </div>

      {/* 工作区统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">总视频数</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">本月上传</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">总播放量</h3>
          <p className="text-3xl font-bold mt-2">12.5k</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
        {children}
      </div>
    </div>
  )
} 