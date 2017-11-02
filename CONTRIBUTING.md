Contributing editor icons.

The icons were design on UpWork by a freelancer with the express stipulation that the icons will be released to the 
public domain under grommet-icons, link to UpWork contract and payment completion: https://www.upwork.com/ab/applicants/924373534500941824/job-details

The icons svg files are required to be cleaned of all extra tags and props gerenared by AI or similar tools.

To contribute - 
1. Fork the grommet-icons project and clone.
2. The svg files ned to be placed in grommet-icons/public.img in the format:

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d='M14,11.57a7.93,7.93,0,0,1,3.11,1.25,3.32,3.32,0,0,1,1.28,2.71A3.58,3.58,0,0,1,17,18.42a7.9,7.9,0,0,1-5,1.39H4.07v-.42a3.57,3.57,0,0,0,1.46-.2,1.17,1.17,0,0,0,.54-.52,4.75,4.75,0,0,0,.15-1.58V7A4.81,4.81,0,0,0,6.07,5.4a1.13,1.13,0,0,0-.54-.52,3.67,3.67,0,0,0-1.46-.2V4.26h7.45a10.57,10.57,0,0,1,3.78.48,3.94,3.94,0,0,1,1.75,1.42,3.52,3.52,0,0,1,.64,2,2.86,2.86,0,0,1-.81,2A5.84,5.84,0,0,1,14,11.57Zm-4.17.58v5.56a1.27,1.27,0,0,0,.32.93,1.27,1.27,0,0,0,.93.31,3.57,3.57,0,0,0,1.69-.41A2.79,2.79,0,0,0,14,17.37a3.61,3.61,0,0,0,.41-1.73,3.81,3.81,0,0,0-.5-2,2.72,2.72,0,0,0-1.39-1.21A7.52,7.52,0,0,0,9.85,12.15Zm0-.89a5.92,5.92,0,0,0,2.4-.37,2.73,2.73,0,0,0,1.19-1,3.17,3.17,0,0,0,.41-1.7,3.18,3.18,0,0,0-.41-1.69,2.59,2.59,0,0,0-1.16-1,6.2,6.2,0,0,0-2.43-.33Z' />
</svg>

3. To generate the react components from the svg files, execute npm run generate-icons
  a) This will create the react icons .js files in the src/js/icons folder
  b) It will also update the indje.js file in the src/js/icons folder to include the newly generated icons
  
4. To update the icons meta information (used to seacrh for icons in the grommet-icons site), edit the file src/js/metadata.js
and add some descriptive tags (that are not part of the icon's name) - i.e. 
'Bold': ['formatting', 'text', 'editor'],

5. Reacreate the test snapshots, by running npm run test-update - this will create new files in the src/js/__tests__/__snapshots__ folder

6. Verify the tests, by running npm run check

7. Share with the community by submitting a PR.


