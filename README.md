П.1 Текущая локальная версия app.js
1. Находит один div с классом .block
2. Каждую секунду меняется цвет красный на зеленый и соответствующий текст

П.2 Первая удаленная (внешняя версия)
1. Устанавливает для всех блоков красный цвет

П.3 Текущая удаленная (внешняя версия)
1. Добавляет для div с классом .block счетчик
2. Каждую секунду меняется цвет на красный (ошибка) и увеличивается число до 100 (имитация загрузки)


Конфликт возникает, если:
1. Мы хотим одну ветку слить с другой или pull-request
2. Когда мы делаем git pull с ветки, т.к. выполняются команды git fetch и git merge
3. Когда мы работаем одновременно с тем же файлом что и другой разработчик