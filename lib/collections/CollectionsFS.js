// entrieImage = new FS.Store.GridFS("images", {});
//
// Images = new FS.Collection("images", {
//     stores: [entrieImage]
// });


var imageStore = new FS.Store.FileSystem("images", {
  path: "/home/ubuntu/Escritorio/UHC_Market/public/products/images", //optional, default is "/cfs/files" path within app container
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});
