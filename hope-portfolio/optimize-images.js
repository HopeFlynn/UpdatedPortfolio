
import fs from 'fs';
import path from 'path';
import { Jimp } from 'jimp';

console.log('Script started in ' + process.cwd());

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_SIZE_BYTES = 300 * 1024; // 300KB
const MAX_DIMENSION = 1200; // Max width/height
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
            console.log('No images > 300KB found.');
            return;
        }

        console.log(`Found ${imagesToOptimize.length} images > 300KB to optimize.`);

        // Process images
        for (const { file } of imagesToOptimize) {
            const inputPath = path.join(PUBLIC_DIR, file);
            const isPng = /\.png$/i.test(file);

            console.log(`Optimizing: ${file} (${(fs.statSync(inputPath).size / 1024).toFixed(2)} KB)...`);

            try {
                const image = await Jimp.read(inputPath);
                let wasResized = false;

                // Resize if too large
                if (image.bitmap.width > MAX_DIMENSION || image.bitmap.height > MAX_DIMENSION) {
                    image.scaleToFit({ w: MAX_DIMENSION, h: MAX_DIMENSION });
                    wasResized = true;
                }

                // Write back to same path (overwrite)
                // For JPEG, apply quality. For PNG, Jimp standard write.
                if (isPng) {
                    await image.write(inputPath);
                } else {
                    await image.write(inputPath, { quality: QUALITY });
                }

                const newSize = fs.statSync(inputPath).size;
                console.log(`  -> Optimized to ${(newSize / 1024).toFixed(2)} KB ${wasResized ? '(Resized)' : ''}`);

            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }

        console.log('Optimization complete!');

    } catch (err) {
        console.error('Error scanning directory:', err);
    }
}

optimizeImages();
