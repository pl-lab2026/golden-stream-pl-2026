import { useState } from 'react'
import { Button } from '../ui/button'

const initialForm = {
  name: '',
  phone: '',
  role: '',
  interests: '',
  time: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '제출 중입니다...' })
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzASGznabb9uNtJj6Kj-4JjCv8ijUzDjAYBcxZogUKWEmsXBOddfoaIYTu1u7exLUJH/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setStatus({ state: 'success', message: '접수되었습니다. 곧 연락드리겠습니다.' })
      setForm(initialForm)
    } catch (err) {
      setStatus({
        state: 'error',
        message: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      })
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          당신의 자산 경영, 지금 시작하십시오.
        </h2>
        <p className="mt-3 text-slate-300">
          상담 신청을 남겨주시면, 1차 유선 인터뷰 후 대면 미팅 일정을 잡아드립니다.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card md:p-8">
          <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm text-slate-200">성함</label>
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-gold focus:outline-none"
                placeholder="홍길동"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-200">연락처</label>
              <input
                required
                value={form.phone}
                onChange={handleChange('phone')}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-gold focus:outline-none"
                placeholder="010-1234-5678"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-200">직업군</label>
              <select
                required
                value={form.role}
                onChange={handleChange('role')}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-gold focus:outline-none"
              >
                <option value="">선택해주세요</option>
                <option value="사업가">사업가</option>
                <option value="전문직">전문직</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-200">상담 희망 시간</label>
              <input
                value={form.time}
                onChange={handleChange('time')}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-gold focus:outline-none"
                placeholder="예: 평일 14~16시 선호"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm text-slate-200">주요 관심사</label>
              <textarea
                value={form.interests}
                onChange={handleChange('interests')}
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-gold focus:outline-none"
                placeholder="예: 법인 잉여금 운용, 글로벌 ETF 배분, 승계/증여 플랜 등"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full rounded-xl md:w-auto"
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? '전송 중...' : '상담 신청 보내기'}
              </Button>
              <div className="text-sm text-slate-300">
                입력 정보는 상담 목적 외 사용하지 않습니다. 안전하게 전달됩니다.
              </div>
            </div>
          </form>

          {status.state !== 'idle' && (
            <div
              className={`mt-4 text-sm ${
                status.state === 'success'
                  ? 'text-emerald-300'
                  : status.state === 'error'
                    ? 'text-red-300'
                    : 'text-slate-200'
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

