# afterglow ✨
a platform for photographers to share their photos to their clients, in an easy and aesthetic looking way.

![screenshot](https://afterglow.awayan.com/screenshot1.png)
![screenshot](https://afterglow.awayan.com/screenshot2.png

## features
- clean, minimal, and simple webpage for clients to look at
- amazing gallery layout made with [react-photo-gallery](https://github.com/neptunian/react-photo-gallery)
- amazing lightbox made with [simple-react-lightbox](https://github.com/michelecocuccio/simple-react-lightbox)
    - with the lightbox, you could easily download photos at high-res (with my [fork](https://github.com/kyleawayan/simple-react-lightbox))
- automatic light and dark mode switching made with [use-dark-mode](https://github.com/donavon/use-dark-mode)

## this is still a very early version
look to be honest i don't really know how to code, especially with all this react and next.js stuff (which was what this was built on). i really want to make like a UI and all that to add photos, because right now to make an album you have to go into the code. the end goal for this project is to make it accessible and easy to use for all photographers.

## how to use at this current state lmao
i recommend exporting full-res pictures and small proxies for thumbnails. put the photos in the following folder structure as you will need to use my script. **make sure file names are the same in your main pictures folder and preview folder.**

```
public
├── favicon.ico
├── pictures
│   ├── youralbum
│   │   ├── IMG_2457_DxO.jpg
│   │   ├── IMG_2459_DxO.jpg
│   │   └── previews
│   │       ├── IMG_2457_DxO.jpg
│   │       ├── IMG_2459_DxO.jpg
│   └── generatephotos.js
└── vercel.svg
```


inside `/pages/` there is a template to use called `sample.js`. first, change the title on line 112 and 115. next, change the function name on line 96. so you would replace `sample()` with your album name. for example `youralbum()`. note: `sample.js` is only a template with photos that are hotlinked externally, so downloading them won't work.

second, you have to replace the photos in `const photos`. i have made a script in `/public/pictures/` called `generatephotos.js`. this generates what you need to put in the array. replace the path on the first line to your album. run it by using `node generatephotos.js` then it'll give you what to paste into `const photos`. right now it errors out when checking the directory so you would only copy above

```
{
src: "../pictures/youralbum/previews/IMG_2588_DxO.jpg",
width: 3 ,
height: 2 ,
},
--- copy above me ---
{
src: "../pictures/youralbum/previews/previews",
internal/fs/utils.js:298
    throw err;
    ^
```

after that just paste it into `const photos` in `sample.js` then you're good to go. install the prerequisites with `npm install` and then run it with `npm run dev`.

### where did you get the title "afterglow" from
it's from luna li's amazing song, "afterglow"✨