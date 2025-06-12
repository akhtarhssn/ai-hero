import localFont from 'next/font/local';

export const vamosFont = localFont({
    src: '../../public/assets/fonts/vamos.otf', // Adjust path based on your file structure
    display: 'swap', // This is important for preventing layout shift
    // You can also add font weights and styles if you have multiple files for the same font:
    // src: [
    //   {
    //     path: '../public/assets/fonts/vamos-regular.woff2',
    //     weight: '400',
    //     style: 'normal',
    //   },
    //   {
    //     path: '../public/assets/fonts/vamos-bold.woff2',
    //     weight: '700',
    //     style: 'normal',
    //   },
    // ],
    variable: '--font-vamos', // Optional: if you want to use it as a CSS variable
});