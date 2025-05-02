import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx는 조건부 클래스 병합
 * twMerge는 클래스 충돌 해결 (마지막에 지정된 클래스가 우선되도록 병합)
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(...inputs));
}
