**Steps to contribute icons to grommet-icons**

1) Fork the grommet-icons project and and clone.
2) Add your raw svg files in this [folder](https://github.com/grommet/grommet-icons/tree/master/public/img) (use the other raw svgs as a reference on how to structure your file content and naming conventions).
3) Run `npm run generate-icons` to generate the react components from the raw svg files.
4) Consider adding search metadata to this [file](https://github.com/grommet/grommet-icons/blob/master/src/js/metadata.js) to help finding your new icon.
5) Run `npm run test-update` to recreate the test snapshot files.
6) Share with the community by submitting a PR.
