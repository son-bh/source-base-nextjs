/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      borderColor: {
        selected: 'rgba(0, 0, 0, 0) rgb(35, 84, 230) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)',
      },
      backgroundImage: {
        'gradient-infor-payout': 'linear-gradient(180deg, #FFF 0%, #D3EFFF 100%)',
        'gradient-infor-usdt': 'linear-gradient(180deg, #FFF 0%, #EBFFF7 100%)',
        'gradient-infor-card': 'linear-gradient(180deg, #FFF 0%, #FFE8D3 100%)',
        'gradient-infor-momo': 'linear-gradient(180deg, #FFF 0%, #FFDDF4 100%)',
        'gradient-infor': 'linear-gradient(180deg, #FFF 0%, #DDFFF7 100%)',
        'gradient-banner': 'linear-gradient(98deg, #F7F9FC 4.07%, #D7FBFB 85.54%)',
        'gradient-contact': 'linear-gradient(105deg, #00D06A 2.89%, #29B7CC 103.04%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue':
          'radial-gradient(41.2% 53.72% at 98.16% 120.52%, rgba(0, 209, 255, 0.60) 0%, rgba(0, 209, 255, 0.00) 100%), linear-gradient(118deg, #0085FF 29.06%, #065AD7 78.14%)',
        'gradient-blue-600': 'linear-gradient(99deg, #142A74 -14.83%, #121F4B 39.35%, #142A74 98.17%)',
        'gradient-green': 'linear-gradient(98deg, #F7F9FC 4.07%, #D7FBFB 85.54%)',
        'gradient-green-200': 'linear-gradient(105deg, #00D06A 2.89%, #29B7CC 103.04%)',
        'gradient-green-300':'linear-gradient(180deg, #CDFDF4 0%, rgba(205, 253, 244, 0.00) 100%)',
        'gradient-blue-dark':'linear-gradient(103deg, #121F4B 63.15%, #7CCDBD 167.55%)',
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
};
