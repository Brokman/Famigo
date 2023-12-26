
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const famigo: CustomThemeConfig = {
    name: 'famigo',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8e3553 
		"--color-primary-50": "238 225 229", // #eee1e5
		"--color-primary-100": "232 215 221", // #e8d7dd
		"--color-primary-200": "227 205 212", // #e3cdd4
		"--color-primary-300": "210 174 186", // #d2aeba
		"--color-primary-400": "176 114 135", // #b07287
		"--color-primary-500": "142 53 83", // #8e3553
		"--color-primary-600": "128 48 75", // #80304b
		"--color-primary-700": "107 40 62", // #6b283e
		"--color-primary-800": "85 32 50", // #552032
		"--color-primary-900": "70 26 41", // #461a29
		// secondary | #ec8e6d 
		"--color-secondary-50": "252 238 233", // #fceee9
		"--color-secondary-100": "251 232 226", // #fbe8e2
		"--color-secondary-200": "250 227 219", // #fae3db
		"--color-secondary-300": "247 210 197", // #f7d2c5
		"--color-secondary-400": "242 176 153", // #f2b099
		"--color-secondary-500": "236 142 109", // #ec8e6d
		"--color-secondary-600": "212 128 98", // #d48062
		"--color-secondary-700": "177 107 82", // #b16b52
		"--color-secondary-800": "142 85 65", // #8e5541
		"--color-secondary-900": "116 70 53", // #744635
		// tertiary | #c19436 
		"--color-tertiary-50": "246 239 225", // #f6efe1
		"--color-tertiary-100": "243 234 215", // #f3ead7
		"--color-tertiary-200": "240 228 205", // #f0e4cd
		"--color-tertiary-300": "230 212 175", // #e6d4af
		"--color-tertiary-400": "212 180 114", // #d4b472
		"--color-tertiary-500": "193 148 54", // #c19436
		"--color-tertiary-600": "174 133 49", // #ae8531
		"--color-tertiary-700": "145 111 41", // #916f29
		"--color-tertiary-800": "116 89 32", // #745920
		"--color-tertiary-900": "95 73 26", // #5f491a
		// success | #57e389 
		"--color-success-50": "230 251 237", // #e6fbed
		"--color-success-100": "221 249 231", // #ddf9e7
		"--color-success-200": "213 248 226", // #d5f8e2
		"--color-success-300": "188 244 208", // #bcf4d0
		"--color-success-400": "137 235 172", // #89ebac
		"--color-success-500": "87 227 137", // #57e389
		"--color-success-600": "78 204 123", // #4ecc7b
		"--color-success-700": "65 170 103", // #41aa67
		"--color-success-800": "52 136 82", // #348852
		"--color-success-900": "43 111 67", // #2b6f43
		// warning | #f6d32d 
		"--color-warning-50": "254 248 224", // #fef8e0
		"--color-warning-100": "253 246 213", // #fdf6d5
		"--color-warning-200": "253 244 203", // #fdf4cb
		"--color-warning-300": "251 237 171", // #fbedab
		"--color-warning-400": "249 224 108", // #f9e06c
		"--color-warning-500": "246 211 45", // #f6d32d
		"--color-warning-600": "221 190 41", // #ddbe29
		"--color-warning-700": "185 158 34", // #b99e22
		"--color-warning-800": "148 127 27", // #947f1b
		"--color-warning-900": "121 103 22", // #796716
		// error | #f66151 
		"--color-error-50": "254 231 229", // #fee7e5
		"--color-error-100": "253 223 220", // #fddfdc
		"--color-error-200": "253 216 212", // #fdd8d4
		"--color-error-300": "251 192 185", // #fbc0b9
		"--color-error-400": "249 144 133", // #f99085
		"--color-error-500": "246 97 81", // #f66151
		"--color-error-600": "221 87 73", // #dd5749
		"--color-error-700": "185 73 61", // #b9493d
		"--color-error-800": "148 58 49", // #943a31
		"--color-error-900": "121 48 40", // #793028
		// surface | #2870a7 
		"--color-surface-50": "223 234 242", // #dfeaf2
		"--color-surface-100": "212 226 237", // #d4e2ed
		"--color-surface-200": "201 219 233", // #c9dbe9
		"--color-surface-300": "169 198 220", // #a9c6dc
		"--color-surface-400": "105 155 193", // #699bc1
		"--color-surface-500": "40 112 167", // #2870a7
		"--color-surface-600": "36 101 150", // #246596
		"--color-surface-700": "30 84 125", // #1e547d
		"--color-surface-800": "24 67 100", // #184364
		"--color-surface-900": "20 55 82", // #143752
		
	}
}