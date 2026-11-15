export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-12 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {/* 아바타 / 이니셜 */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-2xl font-bold text-zinc-700 shadow-inner dark:bg-zinc-800 dark:text-zinc-200">
          안
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight">안예원</h1>

        {/* 뱃지 / 역할 */}
        <span className="mt-2 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          Student · Vibe Coding
        </span>

        {/* 소개글 */}
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 링크 / 소셜 버튼 영역 (심플 스타일) */}
        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-zinc-900 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@example.com"
            className="flex items-center justify-center rounded-xl border border-zinc-200 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-850"
          >
            연락하기
          </a>
        </div>
      </div>
    </main>
  );
}
