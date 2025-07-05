import { Stylish } from 'next/font/google'

const todayFont = Stylish({
  weight: "400",
})

export default function Today() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className={`text-center mb-16 text-lg tracking-tighter leading-relaxed ${todayFont.className}`}>
        하나님의 말씀은 살았고 운동력이 있어<br />
        좌우에 날선 어떤 검보다도 예리하여<br />
        혼과 영과 및 관절과 골수를 찔러 쪼개기까지 하며<br />
        또 마음의 생각과 뜻을 감찰하나니<br />
        지으신 것이 하나라도 그 앞에 나타나지 않음이 없고<br />
        오직 만물이 우리를 상관하시는 자의<br />
        눈앞에 벌거벗은 것 같이 드러나느니라<br />
        <br />
        (히브리서 4:12, 13 KRV)
      </p>
    </div>
  )
}
