Ролик для hero — положите **один** из поддерживаемых файлов сюда (`public/videos/`).

В первую очередь ищется имя в духе экспорта без «особых» символов в пути, например:

- `my-portfoliopublicvideosIMG_HeroPage.mp4`

Дальше по порядку: `imgheropage.mp4`, `IMGHeroPage.mp4`, `myportfoliopublicvideosimgheropage.mp4`, запасной `IMG_HeroPage.mp4`.

**Если система выгружает ролик только под одним длинным именем** (например без слэшей в пути), переименуйте файл на диске ИЛИ в `.env` укажите только имя файла:

```
VITE_HERO_VIDEO=mylongfilename.mp4
```

Опционально WebM для меньшего веса (добавьте второй `<source>` в код или оставьте только mp4):

```
ffmpeg -i imgheropage.mp4 -c:v libvpx-vp9 -crf 35 imgheropage.webm
```

Без подходящего файла показывается градиент-заглушка.
