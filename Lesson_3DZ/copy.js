const fs = require("fs").promises;
const path = require("path");

async function copyFolder(src, dest) {
    try {
        const srcExists = await fs.stat(src).catch(() => null);
        const destExists = await fs.stat(dest).catch(() => null);

        if (!srcExists || destExists) {
            throw new Error("FS operation failed");
        }

        await fs.mkdir(dest, { recursive: true });
        const items = await fs.readdir(src);

        for (const item of items) {
            const srcPath = path.join(src, item);
            const destPath = path.join(dest, item);
            const stat = await fs.stat(srcPath);

            if (stat.isDirectory()) {
                await copyFolder(srcPath, destPath);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        }

        console.log("Fayllar muvaffaqiyatli nusxalandi");
    } catch (error) {
        console.error(error.message);
    }
}

copyFolder("files", "files_copy");
