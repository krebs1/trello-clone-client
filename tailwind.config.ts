import type {Config} from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      aspectRatio: {
        '1/2': '1 / 2'
      },
      colors: {
        'list-bg': '#101204',
        'card-bg': '#22272B',
        'text-light': '#dadade',
        'text-subtitle': '#B6C2CF'
      }
    }
  },
  plugins: [],
}
export default config
