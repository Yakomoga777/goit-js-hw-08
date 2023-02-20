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
// import lodash from 'lodash';
// // import vimeo, { Player } from '@vimeo/player';
// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');

// const player = new Player(iframe);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const play = player.on('play', function (data) {
//   // console.log(seconds);

//   console.log('play - ', localStorage.getItem('Obj'));
//   console.log('play PARSE - ', string);

//   console.log('play - ', data);
// });

// // player.on('pause', function (data) {
// //   // console.log(seconds);
// //   console.log('pause', data);
// // });

// player.on('pause', function (data) {
//   // console.log(seconds);
//   localStorage.setItem(
//     'Obj',
//     JSON.stringify({
//       seconds: data.seconds,
//       percent: data.percent,
//       duration: data.duration,
//     })
//   );
//   JSON.parse(
//     localStorage.getItem(
//       'Obj',
//       JSON.stringify({
//         seconds: data.seconds,
//         percent: data.percent,
//         duration: data.duration,
//       })
//     )
//   );
//   console.log('pause - ', localStorage.getItem('Obj'));
//   console.log('pause - ', data);
//   console.log('pause - ', localStorage);
// });
