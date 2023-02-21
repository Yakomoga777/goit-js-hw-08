/*
*1. Ознайомся з документацією бібліотеки Vimeo плеєра.
*2. Додай бібліотеку як залежність проекту через npm.
3. Ініціалізуй плеєр у файлі скрипта як це описано 
   в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
5. Зберігай час відтворення у локальне сховище. 
   Нехай ключем для сховища буде рядок "videoplayer-current-time".
6. Під час перезавантаження сторінки скористайся методом 
   setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
7. Додай до проекту бібліотеку lodash.throttle і
   зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
*/

import lodash from 'lodash';
// // import vimeo, { Player } from '@vimeo/player';
//*Ініціалізація плеєєра
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlaySetCrntTime = function (data) {
  //   data is an object containing properties specific to that event
  localStorage.setItem('videoplayer-current-time', data);
  const savedData = localStorage.getItem('videoplayer-current-time');
  const parsedData = JSON.parse(savedData);
  //   console.log(data);
  console.log('parsedData -', parsedData);
  return parsedData;
};
// const sec = onPlaySetCrntTime();
// console.log(sec);
player.on('timeupdate', onPlaySetCrntTime);
console.log(onPlaySetCrntTime());
