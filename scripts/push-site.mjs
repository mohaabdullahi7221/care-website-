import git from "isomorphic-git";
import http from "isomorphic-git/http/node";
import fs from "node:fs";
import path from "node:path";

const dir = process.cwd();
const url = process.env.SITES_REPO_URL;
const token = process.env.SITES_REPO_TOKEN;
const branch = process.env.SITES_REPO_BRANCH || "main";
if (!url || !token) throw new Error("Hosting credential is missing");
if (!fs.existsSync(path.join(dir, ".git"))) await git.init({ fs, dir, defaultBranch: branch });
const files = (await git.statusMatrix({ fs, dir })).filter(([file]) => !file.startsWith("node_modules/") && !file.startsWith("dist/") && !file.startsWith(".wrangler/"));
for (const [file,, worktree] of files) {
  if (worktree === 0) await git.remove({ fs, dir, filepath: file });
  else await git.add({ fs, dir, filepath: file });
}
const sha = await git.commit({ fs, dir, message: "Build CARE School website", author: { name: "Codex Sites", email: "codex-sites@openai.com" } });
await git.push({ fs, http, dir, url, ref: branch, remoteRef: branch, force: true, onAuth: () => ({ username: "x-access-token", password: token }) });
console.log(sha);
