// importAll: Webpack Context ->
// {
//   fileName: Object { default: webpackfilename }
// }
//
// Produces an object which maps filenames (as found in the filesystem)
// with Objects which have webpack metadata. We are interested in
// the `default` key, which produces the webpack filename
// (i.e. the equivalent of `import <var> from <filename>`)
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

// importToArr: Import Object -> [String]
// Takes an object that represents an import from a folder and returns
// an array of paths to the files in the import
//
// In these arrays [0] is the key, [1] the value which represents
// the import path as if we had written `import <file> from <file-path>`
const importToArr = (i) => Object.entries(i).map(img => img[1].default );

// Image Import Objects
let wips = importAll(require.context('../images/wip', false, /\.jpg/))
let dones = importAll(require.context('../images/done', false, /\.jpg/))
let students = importAll(require.context('../images/alumnos', false, /\.jpg/))

// Image arrays
const wipImages = importToArr(wips);
const doneImages = importToArr(dones);
const studentImages = importToArr(students);

const allImages = {
    wipImages,
    doneImages,
    studentImages
}

export { wipImages, doneImages, studentImages };
export default allImages;
