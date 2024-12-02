export function initSnowflakes(config = {}) {
    const main = document.querySelector('.main');

    const defaultConfig = {
        minSize: 5,
        maxSize: 15,
        color: '#ffffff80',
        fallSpeed: 5,
        generationInterval: 250
    };
    const finalConfig = { ...defaultConfig, ...config };

    function createSnowflake() {
        const snowflake = document.createElement('div');
        const size = Math.random() * (finalConfig.maxSize - finalConfig.minSize) + finalConfig.minSize;

        snowflake.classList.add('snowflake');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.backgroundColor = finalConfig.color;
        snowflake.style.left = `${Math.random() * 100}vw`;
        const animationDuration = finalConfig.fallSpeed + Math.random() * 2;
        snowflake.style.animationDuration = `${animationDuration}s`;

        main.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, animationDuration * 1000);
    }

    setInterval(createSnowflake, finalConfig.generationInterval);
}