export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">자산관리연구소</div>
            {/* <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              본 사이트는 금융 상담 신청을 위한 랜딩 페이지입니다.
            </div> */}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Goldenstream. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

