# Accordion

Используется для отображение дополнительной информации на клик по заголовку. На повторный клик происходит закрытие.

## Свойства:

#### Accordion

| Свойство          | Тип TS                   | required | default | Описание                                             |
| ----------------- | ------------------------ | -------- | ------- | ---------------------------------------------------- |
| initiallyExpanded | boolean                  | ✗        | false   | состояние аккордеона, по умолчанию false             |
| title             | string                   | ✓        | -       | заголовок аккордеона                                 |
| onToggle          | (state: boolean) => void | ✗        | noop    | коллбэк, который будет вызван при клике на заголовке |
| expanded          | boolean                  | ✗        | -       | Пропса для управления аккордеоном извне              |

## Использование:

- Аккордеон { title="title", initiallyExpanded=true }

```js
<Accordion title="title" initiallyExpanded>
  Description
</Accordion>
```
