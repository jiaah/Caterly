import clsx from 'clsx';

const HERO_POINT_COLOR = '#F8B37D';
const HERO_POINT_CLASS = `text-[${HERO_POINT_COLOR}] drop-shadow`;

export const HERO_CONTENT = [
	{
		title: 'NO MSG !',
		description: (
			<>
				오늘도 열심히 일한 당신에게
				<br />
				<span className={HERO_POINT_CLASS}>건강한 집밥</span>을 선물하세요.
			</>
		),
	},
	{
		title: '맞춤형 출장뷔페',
		description: (
			<>
				교회, 성당 각종 <span className={HERO_POINT_CLASS}>행사·모임</span>
				<br />
				<span className="text-sm my-2">*경주, 울산, 대구, 부산 배달</span>
			</>
		),
	},
	{
		title: '위탁급식 전문업체',
		description: (
			<div className="flex flex-col gap-2">
				<p>
					<span className={HERO_POINT_CLASS}>기업, 공장, 복지시설</span>{' '}
					중·석·야식 제공
				</p>
				<p className="text-base">*경주 전지역 배달</p>
				<a
					role="button"
					href={`tel:+82-54-745-0999`}
					className={clsx(
						`self-start border border-[${HERO_POINT_COLOR}] rounded-md px-8 py-2 text-sm font-normal`,
						HERO_POINT_CLASS,
					)}
				>
					전화로 상담하기
				</a>
			</div>
		),
	},
	{
		title: '한식뷔페 식당',
		description: (
			<>
				매일 달라지는 <span className={HERO_POINT_CLASS}>20여 가지 메뉴</span>
				<br />
				당신을 위한 <span className={HERO_POINT_CLASS}>8,800원</span>의 행복
			</>
		),
	},
];
