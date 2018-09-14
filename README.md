# Grunge Image Gallery

This is an image gallery and lightbox that is open source, lightweight, fully customizable, responsive, and easy to use.

Check out some example images here. [Example](https://imgur.com/a/KWamHGW).

## Installation

Download the repository from Github and copy the CSS and JS files into your project. Keep in mind that jQuery is included and required.

The basic structure of a gallery is as follows...

```
<div class="gig-gallery horizontal"> <!-- You can change the word 'horizontal' to 'vertical' to change the direction of the gallery -->

    <!-- Repeat this block as often as wanted -->
    <div class="gig-image">
        <img class="gig-thumbnail" src="images/thumbnails/image-1.jpg" /> <!-- Note that thumbnail and fullsize image may be the same -->
        <img class="gig-fullsize" src="images/image-1.jpg" />
        <div class="gig-info">
             <span class="gig-title">Example Title</span> <!-- Optional -->
            <span class="gig-caption">Example Caption</span> <!-- Optional -->
        </div>
    </div>

</div>
```

No Javascript or CSS beyond that is required. It's very easy to customize, however, and to get the stylization used in the examples, this CSS was used.


```
.gig-title {
    font-family: 'Oswald', sans-serif; /* From Google Fonts */
    color: #333; /* Color of Title */
    background-color: #fff; /* Background of Title */
    box-shadow: 0.5em 0 0 #fff,-0.5em 0 0 #fff; /* Padding */
}
```

Customizing the lightbox is super easy also! `.gig-overlay`, `.gig-lightbox`, `.gig-lightbox-image`,  `.gig-lightbox-title`, and `.gig-lightbox-caption` are all you need to get pretty much any effect you desire!
