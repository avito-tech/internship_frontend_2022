# Backend

Служит для инкапсуляции внешних запросов. Возвращает данные в удобном формате.

## Используемые технологии

* typescript v4
* express v4
* axios
* eslint

## API

- `/stories` - получение 100 самых новых новостей, отсортированных по дате. Возвращает массив Story
- `/story/:id` - получение информации о новости или комментарии. Возвращает story

## Интерфейс новости

```typescript
export interface Story {
  by?: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score?: number;
  time: number;
  title?: string;
  type: StoryTypes;
  url?: string;
  parent?: number;
  deleted?: boolean;
  text?: string;
  dead?: boolean;
}

export enum StoryTypes {
  STORY = "story",
  COMMENT = "comment",
}
```

## Запуск и установка

### `yarn`
Для установки пакетов

### `yarn dev`
Для запуска в dev среде введите

Проверить сервер можно будет по адресу [http://localhost:3001/ping](http://localhost:3001/ping)
