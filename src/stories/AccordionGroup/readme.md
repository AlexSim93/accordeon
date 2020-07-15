# AccordionGroup

Используется для создания группы аккордеонов. Одновременно может быть открыт только один аккордеон. При открытии аккордеона, все остальные будут закрыты

## Свойства:

#### AccordionGroup

| Свойство             | Тип TS                                            | required | default Описание |
| -------------------- | ------------------------------------------------- | -------- | ---------------- |
| initiallyExpanded    | number                                            | ✗        | -                | индекс аккордеона, который следует раскрыть изначально |
| forceExpanded        | number                                            | ✗        | -                | Пропса которая позволяет раскрыть аккордеон |
| content              | {id: string; title: string; description: string;} | ✓        | -                | Данные которые необходимо поместить в Accordion |
| DescriptionComponent | React.FunctionComponent                           | ✓        | -                | Компонент в который будет обернуто поле description из пропсы content |

## Использование:

- Аккордеон { initiallyExpanded=0, content=[
  { id: "1", title: "accordion 1", description: "description 1" },
  { id: "2", title: "accordion 2", description: "description 2" },
  ], DescriptionComponent=Paragraph}

```js
<AccordionGroup
  content={[
    { id: "1", title: "accordion 1", description: "description 1" },
    { id: "2", title: "accordion 2", description: "description 2" },
  ]}
  initiallyExpanded={1}
  DescriptionComponent={Paragraph}
/>
```
