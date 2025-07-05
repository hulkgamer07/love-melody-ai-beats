
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				love: {
					50: '#fef7ff',
					100: '#fdeeff',
					200: '#f9ddff',
					300: '#f3bfff',
					400: '#eb91ff',
					500: '#df5eff',
					600: '#d336f7',
					700: '#b721db',
					800: '#971eb3',
					900: '#7a1d92',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'love-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '1'
					}
				},
				'float-hearts': {
					'0%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(-100px) translateX(20px) rotate(15deg)',
						opacity: '0'
					}
				},
				'gradient-shift': {
					'0%, 100%': { 
						background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #786fa6 100%)'
					},
					'50%': { 
						background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ff6b9d 100%)'
					}
				}
			},
			animation: {
				'love-pulse': 'love-pulse 2s ease-in-out infinite',
				'float-hearts': 'float-hearts 4s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
