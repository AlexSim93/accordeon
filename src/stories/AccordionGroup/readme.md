# AccordionGroup

Используется для создания группы аккордеонов. Одновременно может быть открыт только один аккордеон. При открытии аккордеона, все остальные будут закрыты

## Свойства:

#### AccordionGroup

| Свойство             | Тип TS                                            | required | default   | Описание                                                              |
| -------------------- | ------------------------------------------------- | -------- | --------- | --------------------------------------------------------------------- |
| initiallyExpanded    | number                                            | ✗        | -1        | индекс аккордеона, который следует раскрыть изначально                |
| forceExpanded        | number                                            | ✗        | -         | Пропса которая позволяет раскрыть аккордеон                           |
| content              | {id: string; title: string; description: string;} | ✓        | -         | Данные которые необходимо поместить в Accordion                       |
| DescriptionComponent | React.FunctionComponent                           | ✓        | Paragraph | Компонент в который будет обернуто поле description из пропсы content |
| titleKey             | string                                            | ✓        | -         | ключ, по которому можно взять данные из content для заголовка         |
| descriptionKey       | string                                            | ✓        | -         | ключ, по которому можно взять данные из content для описания          |

## Использование:

- Группа аккордеонов { initiallyExpanded=0, content=[
  { id: "1", title: "accordion 1", description: "description 1" },
  { id: "2", title: "accordion 2", description: "description 2" },
  ], DescriptionComponent=Paragraph, titleKey="title"
  descriptionKey="description"}

```js
<AccordionGroup
  titleKey="title"
  descriptionKey="description"
  content={[
    { id: "1", title: "accordion 1", description: "description 1" },
    { id: "2", title: "accordion 2", description: "description 2" },
  ]}
  initiallyExpanded={1}
  DescriptionComponent={Paragraph}
/>
```
