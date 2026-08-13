import { readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import app from "../dist/server/index.js";

const clientDir = join(process.cwd(), "dist", "client");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      try {
        const body = await readFile(join(clientDir, pathname.replace(/^\//, "")));
        return new Response(body, {
          headers: { "content-type": contentTypes[extname(pathname)] ?? "application/octet-stream" },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};

const response = await app.fetch(
  new Request("https://care-school.vercel.app/"),
  env,
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Homepage rendering failed with HTTP ${response.status}`);
}

await writeFile(join(clientDir, "index.html"), await response.text(), "utf8");
