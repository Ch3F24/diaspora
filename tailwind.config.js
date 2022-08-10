module.exports = {

    content: [
        './resources/views/**/*.blade.php',
        // './resources/views/front/**/*.blade.php',
        './resources/js/components/*.vue',
        // './resources/js/components/**/*.vue',
        './resources/js/*.js'
    ],
    // mode: 'jit',
    theme: {
        extend: {
            colors: {
                'midnight': '#001228',
                'roman': '#ff6460'
            },
            fontSize: {
              'diaspo': '19px'
            },
            fontFamily: {
                sans: ['Helvetica','sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [
        // require('flowbite/plugin')
    ],
}
