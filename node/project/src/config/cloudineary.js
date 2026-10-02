const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "wlhhln7m",
  api_key: "592394863375527",
  api_secret: "ZE-pTrMQvydP6ezJiXQeBk7GmUo",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "10AM",
    resource_type: "auto",
    allowed_formate: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
