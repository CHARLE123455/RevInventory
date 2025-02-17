const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

dotenv.config();

// Configure Cloudinary credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Optional: organize uploads in a folder
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{ width: 1000, height: 1000, crop: 'limit' }], 
    },
});

// Initialize multer with Cloudinary storage
const upload = multer({ 
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        // Validate file types
        if (!file.mimetype.startsWith('image/')) {
            cb(new Error('Only image files are allowed!'), false);
            return;
        }
        cb(null, true);
    }
});

// Error handling middleware for upload errors
const handleUploadError = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({
            message: 'File upload error',
            error: error.message
        });
    }
    if (error) {
        return res.status(500).json({
            message: 'Image upload failed',
            error: error.message
        });
    }
    next();
};

module.exports = {
    upload,
    handleUploadError
};
