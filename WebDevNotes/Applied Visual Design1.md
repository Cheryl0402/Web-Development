# Applied Visual Design
## text-align
- Text is often a large part of web content. CSS has several options for how to align it with the text-align property.

- **text-align: justify;** causes all lines of text except the last line to meet the left and right edges of the line box.

- **text-align: center;** centers the text

- **text-align: right;** right-aligns the text

- And **text-align: left;** (the default) left-aligns the text.

## Adjust the width of an element
- You can specify the width of an element using the ==width== property in CSS. Values can be given in relative length units (such as em), absolute length units (such as px), or as a percentage of its containing parent element. 
- You can specify the ***height***of an element using the height property in CSS, similar to the width property. 

## Use the strong Tag to Make Text Bold
- To make text bold, you can use the ==**strong**== tag. This is often used to draw attention to text and symbolize that it is important. With the strong tag, the browser applies the CSS of ==**font-weight: bold**==;to the element.

## Use the u Tag to Underline Text
To underline text, you can use the ==**u**== tag. This is often used to signify that a section of text is important, or something to remember. With the u tag, the browser applies the CSS of ==**text-decoration: underline;**== to the element.

## Use the em Tag to Italicize Text
To emphasize text, you can use the ==**em**== tag. This displays text as italicized, as the browser applies the CSS of ==**font-style: italic**==; to the element.

## Use the s Tag to Strikethrough Text
To strikethrough text, which is when a horizontal line cuts across the characters, you can use the ==**s**== tag. It shows that a section of text is no longer valid. With the s tag, the browser applies the CSS of ==**text-decoration: line-through;**== to the element.

## Create a Horizontal Line Using the hr Element
You can use the ==**hr**== tag to add a horizontal line across the width of its containing element. This can be used to define a change in topic or to visually separate groups of content.

## Adjust the background-color Property of Text
- Instead of adjusting your overall background or the color of the text to make the foreground easily readable, you can add a background-color to the element holding the text you want to emphasize. This challenge uses ==**rgba()**== instead of hex codes or normal rgb().
- The RGB values can range from 0 to 255. The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear. ==**rgba()**== is great to use in this case, as it allows you to adjust the opacity. This means you don't have to completely block out the background.

## Add a box-shadow to a Card-like Element
The **box-shadow** property applies one or more shadows to an element.

The box-shadow property takes values for

- offset-x (how far to push the shadow horizontally from the element),
- offset-y (how far to push the shadow vertically from the element),
- blur-radius,
- spread-radius and
color, in that order.
The blur-radius and spread-radius values are optional.

Multiple box-shadows can be created by using commas to separate properties of each box-shadow element.
```
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

```

## Decrease the Opacity of an Element
- The opacity property in CSS is used to adjust the opacity, or conversely, the transparency for an item.
    - A value of 1 is opaque, which isn't transparent at all.
    - A value of 0.5 is half see-through.
    - A value of 0 is completely transparent.

## Use the text-transform Property to Make Text Uppercase
The text-transform property in CSS is used to change the appearance of text. It's a convenient way to make sure text on a webpage appears consistently, without having to change the text content of the actual HTML elements.

The following table shows how the different text-transformvalues change the example text "Transform me".

Value | Result
---|---
**lowercase** | 	"transform me"
**uppercase** |     "TRANSFORM ME"
**capitalize**|     "Transform Me"
**initial**|        Use the default value
**inherit**|        Use the text-transform value from the parent element
**none**| Default: Use the original text


## Set the font-size for Multiple Heading Elements
The **font-size** property is used to specify how large the text is in a given element. This rule can be used for multiple elements to create visual consistency of text on a page. In this challenge, you'll set the values for all h1 through h6 tags to balance the heading sizes.

## Set the font-weight for Multiple Heading Elements

## Set the line-height of Paragraphs
CSS offers the **line-height** property to change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets.