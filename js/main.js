import { initSnowflakes } from './snowflakes.js';
import { initButtonBorders } from './buttonBorder.js';

// Инициализация снежинок
initSnowflakes({
    color: '#ffffff80',
    generationInterval: 300,
    fallSpeed: 7
});

// Инициализация анимации для кнопок
initButtonBorders();