https://fontawesome.com/

https://icomoon.io/

при выгрузке из фигмы выделить иконку, перейди в object и нажать outline strock(ctrl+shift+o), потом экспортировать в формате svg, также удалить цвета иконок.
потом очищаем цвет иконок. font name=icons, class=\_icon-

создание иконочного шрифта подходит для простых одноцветных иконок

100 – Thin || Hairline
200 – Extra Light || Ultra Light || Thin
300 – Light
400 – Normal || Regular
500 – Medium
600 – Semi Bold || Demi Bold
700 – Bold
800 – Extra Bold || Ultra Bold || Heavy
900 – Black || Heavy
Roboto-Regular.woff2 == имя шрифта должно быть в таком формате
https://transfonter.org/

@mixin font($fname, $fstyle, $fweight, $furl) {
    @font-face {
      font-family: $fname;
      font-style: $fstyle;
      font-weight: $fweight;
      src: url($furl) format('woff2');
}
}
@include font('roboto-x', normal, 400, '../assets/fonts/roboto-regular-webfont.woff2');
@include font('roboto-x', italic, 400, '../assets/fonts/roboto-italic-webfont.woff2');
@include font('roboto-x', normal, 700, '../assets/fonts/roboto-bold-webfont.woff2');
@include font('roboto-x', italic, 700, '../assets/fonts/roboto-bolditalic-webfont.woff2');
