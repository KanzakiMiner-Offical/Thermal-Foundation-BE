IMPORT("ConnectedTexture");
IMPORT("BlockEngine");
IMPORT("StorageInterface");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
let getYaw = ModAPI.requireGlobal("Entity.getYaw");
let UIUtils = java.lang.Class.forName("zhekasmirnov.launcher.utils.UIUtils", true, UI.getContext().getClass().getClassLoader()).newInstance();

let MinecraftColor = EColor;
let Color = android.graphics.Color;
let Canvas = android.graphics.Canvas;
let BufferedOutputStream = java.io.BufferedOutputStream;
let FileOutputStream = java.io.FileOutputStream;
let Bitmap = android.graphics.Bitmap;
let File = java.io.File;
let Paint = android.graphics.Paint;

let FALSE_PREDICATE = function () { return false; };

let COLOR_BG = Color.parseColor("#c5c5c5");
let COLOR_GREY = Color.rgb(77, 77, 77);
let FONT_GREY = { size: 25, color: COLOR_GREY };
let FONT_GREY_CENTERED = { size: 25, color: COLOR_GREY, align: 1 };
let FONT_RECIPE_VIEWER = { size: 35, align: 1 };
let FONT_WHITE_30 = { size: 30, color: Color.WHITE };

ItemModel.setCurrentCacheGroup("Thermal-Foundation", "1");
let startTime = Debug.sysTime();
let BlockSide = EBlockSide;

namespace UniqueGen {
    export type paramsGenerator = {
        veinCounts: number,
        minY?: number,
        maxY?: number,
        size: number
    }
    export function randomCoords(random: java.util.Random, chunkX: number, chunkZ: number, minHeight: number, maxHeight: number) {
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: chunkZ * 16 + random.nextInt(16)
        }
    }
    export function generateOre(id: number, data: number, chunkX: number, chunkZ: number, random: java.util.Random, params: paramsGenerator) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }
    export function generateSandOre(id: number, data: number, chunkX: number, chunkZ: number, random: java.util.Random, params: paramsGenerator) {
        let region = BlockSource.getCurrentWorldGenRegion();
        switch (region.getBiome(chunkX, chunkZ)) {
            case 2:
            case 17:
            case 130:
                break;
            default:
                return;
        }
        for (let i = 0; i < params.veinCounts; i++) {
            let _coords = GenerationUtils.randomXZ(chunkX, chunkZ);
            let coords = GenerationUtils.findHighSurface(_coords.x, _coords.z);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }
};

