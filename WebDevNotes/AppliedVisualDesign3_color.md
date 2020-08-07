## Learn about Complementary Colors
The color wheel is a useful tool to visualize how colors relate to each other - it's a circle where similar hues are neighbors and different hues are farther apart. When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.

## Learn about Tertiary Colors
Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, within the RGB color model, red (primary) and yellow (secondary) make orange (tertiary). This adds six more colors to a simple color wheel for a total of twelve.

## Adjust the Color of Various Elements to Complementary Colors
The Complementary Colors challenge showed that** opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side**. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. **In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page.**

## Adjust the Hue of a Color
Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the hsl() property as an alternative way to pick a color by directly stating these characteristics.

**Hue** is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

**Saturation** is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

**Lightness** is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Here are a few examples of using hsl() with fully-saturated, normal lightness colors:

Color|	HSL
---|---
red	|hsl(0, 100%, 50%)
yellow|	hsl(60, 100%, 50%)
green|	hsl(120, 100%, 50%)
cyan|	hsl(180, 100%, 50%)
blue|	hsl(240, 100%, 50%)
magenta|	hsl(300, 100%, 50%)

## Adjust the Tone of a Color
The **hsl()** option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of hsl() stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.

## Create a Gradual CSS Linear Gradient
CSS provides the ability to use color transitions, otherwise known as gradients, on elements. This is accessed through the background property's **linear-gradient()** function. Here is the general syntax:
```
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```
The first argument specifies the direction from which color transition starts - it can be stated as a degree, where 90deg makes a vertical gradient and 45deg is angled like a backslash. The following arguments specify the order of colors used in the gradient.

Example:
```
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

## Use a CSS Linear Gradient to Create a Striped Element
The **repeating-linear-gradient()** function is very similar to linear-gradient() with the major difference that it repeats the specified gradient pattern. **repeating-linear-gradient()** accepts a variety of values, but for simplicity, you'll work with an angle value and color stop values in this challenge.

**The angle value is the direction of the gradient**. **Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels**.

```
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```
In the example demonstrated in the code editor, the gradient starts with the color yellow at 0 pixels which blends into the second color blue at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color green, which itself blends into the fourth color value red as that is 80 pixels away from the beginning of the gradient.

If every two color stop values are the same color, the blending isn't noticeable because it's between the same color, followed by a hard transition to the next color, so you end up with stripes.
```
background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      green 40px,
      black 80px
    );
```

## Create Texture by Adding a Subtle Pattern as a Background Image
One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The background property supports the url() function in order to link to an image of the chosen texture or pattern. The link address is wrapped in quotes inside the parentheses.
```
background:url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png);
```
