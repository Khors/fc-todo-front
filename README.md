# FC Todo Frontend

## Опис
Цей репозиторій містить клієнтську частину застосунку **Task Management**, створену на основі **Angular**. Сервер за посиланням https://github.com/Khors/fc-todo-back

## Вимоги
- **Node.js** для запуску.
- **Angular CLI** для роботи з проєктом (опціонально).

## Інструкції з встановлення

1. Клонувати репозиторій:
    ```
    git clone git@github.com:Khors/fc-todo-front.git
    ```
2. Перейти в папку репозиторія:
    ```
    cd fc-todo-front
    ```
3. Встановити залежності:
    ```
    npm install
    ```

## Команди для запуску

- Запуск у режимі розробки:
    ```
    npm run start
    ```
    **Примітка:** Додаток буде доступний за адресою `http://localhost:4200`.

- Збірка для продакшн:
    ```
    npm run build
    ```

## Конфігурація
1. У файлі `src/environments/environment.ts` можна налаштувати URL API:
    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:8080', // URL вашого API
    };
    ```

2. Для зміни параметрів у продакшн використовуйте `src/environments/environment.prod.ts`.

## Технічна інформація
- **Node.js версія:** Переконайтеся, що у вас встановлена версія Node.js (мінімум 14.x).
- **Angular CLI:** Для роботи з проєктом можна встановити CLI:
    ```
    npm install -g @angular/cli
    ```

## Автор
Dmytro Burkovskyi
