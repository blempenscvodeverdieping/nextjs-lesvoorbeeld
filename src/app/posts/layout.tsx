export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <div>
      <header className="mb-4 bg-gray-800 p-4">
        <h1>Posts</h1>
        <p>This is the posts layout.</p>
        <p>Posts layout is a parent layout for all posts.</p>
      </header>
      <div className="flex gap-4">
        <div className="w-1/4">
          <ul>
            <li>
              <a href="/posts/category/html">HTML</a>
            </li>
            <li>
              <a href="/posts/category/php">PHP</a>
            </li>
          </ul>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}