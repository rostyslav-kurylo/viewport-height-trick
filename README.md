# viewport-height-trick
A little trick that fix problem with CSS vh units (as such units does not widely supports in browsers) by using CSS Custom Properties.<br/>
Example of usage:
```
.container {
    height: calc(var(--vh, 1vh) * 100);
}
```
