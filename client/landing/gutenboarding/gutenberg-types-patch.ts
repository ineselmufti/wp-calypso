declare module '@wordpress/compose' {
	type breakpoint = 'huge' | 'wide' | 'large' | 'medium' | 'small' | 'mobile';
	type operator = '>=' | '<';
	export function useViewportMatch( viewport: breakpoint, operator?: operator ): boolean;
}

declare module '@wordpress/i18n' {
	function sprintf( format: string, ...args: any[] ): string;
}

export {};
