export default function HookSection() {
  return (
    <section
      id="hook"
      className="bg-white py-20 text-slate-900 dark:bg-white dark:text-slate-900 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          문제 제기
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          회사는 성장하는데, 개인 자산은 멈춰있지 않습니까?
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
          <p>
            본업에서는 누구보다 뛰어난 전문가이자 리더이신 당신. 하지만 바쁜 일정 속에 정작 대표님 본인의 자산은
            방치되고 있지는 않나요?
          </p>
          <p>
            불확실한 정보, 지인에 의한 가입, 주먹구구식 관리... 이제 개인 자산도 기업 경영처럼{' '}
            <span className="font-semibold text-slate-900">‘원칙’</span>과{' '}
            <span className="font-semibold text-slate-900">‘논리’</span>로 관리받아야 할 때입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

