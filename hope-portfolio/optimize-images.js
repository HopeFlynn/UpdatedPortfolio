
import fs from 'fs';
import path from 'path';
import { Jimp } from 'jimp';

console.log('Script started in ' + process.cwd());

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images');
const SRC_DIR = path.join(process.cwd(), 'src', 'components');
const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1MB
const MAX_DIMENSION = 1600; // Max width/height
const QUALITY = 80; // JPEG quality

async function optimizeImages() {
    console.log('Scanning for large images...');

    try {
        const files = fs.readdirSync(PUBLIC_DIR);
        const imagesToOptimize = [];

        for (const file of files) {
            const filePath = path.join(PUBLIC_DIR, file);
            const stats = fs.statSync(filePath);

            // Check if file is large and is an image
            if (stats.size > MAX_SIZE_BYTES && /\.(png|jpg|jpeg)$/i.test(file)) {
                imagesToOptimize.push({ file, size: stats.size });
            }
        }

        if (imagesToOptimize.length === 0) {
            console.log('No large images found requiring optimization.');
            return;
        }

        console.log(`Found ${imagesToOptimize.length} images to optimize.`);

        // Process images
        for (const { file } of imagesToOptimize) {
            const inputPath = path.join(PUBLIC_DIR, file);
            const outputFileName = file.replace(/\.(png|jpg|jpeg)$/i, '.jpg');
            const outputPath = path.join(PUBLIC_DIR, outputFileName);

            console.log(`Optimizing: ${file}...`);

            try {
                const image = await Jimp.read(inputPath);

                // Resize if too large
                if (image.bitmap.width > MAX_DIMENSION || image.bitmap.height > MAX_DIMENSION) {
                    image.scaleToFit({ w: MAX_DIMENSION, h: MAX_DIMENSION });
                }

                // Write as JPEG
                await image.write(outputPath, { quality: QUALITY });

                console.log(`Saved optimized version as ${outputFileName}`);

                // If original file was different extension (e.g. .png vs .jpg), delete original
                if (file !== outputFileName) {
                    fs.unlinkSync(inputPath);
                    console.log(`Deleted original source: ${file}`);

                    // Update references in code
                    updateCodeReferences(file, outputFileName);
                }

            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }

    } catch (err) {
        console.error('Error scanning directory:', err);
    }
}

function updateCodeReferences(oldName, newName) {
    // Only verify Gallery.tsx for now as that's where dynamic images are
    const galleryPath = path.join(SRC_DIR, 'Gallery.tsx');
    if (fs.existsSync(galleryPath)) {
        let content = fs.readFileSync(galleryPath, 'utf8');
        // Simple string replace for the filename
        // Be careful to replace only the filename part in paths
        // e.g. '/images/MyFile.png' -> '/images/MyFile.jpg'

        // Escape for regex
        const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');

        if (regex.test(content)) {
            content = content.replace(regex, newName);
            fs.writeFileSync(galleryPath, content, 'utf8');
            console.log(`Updated references in Gallery.tsx: ${oldName} -> ${newName}`);
        }
    }
}

optimizeImages();
