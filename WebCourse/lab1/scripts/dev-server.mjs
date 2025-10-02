import * as esbuild from "esbuild";
import process from "process";

let ctx = await esbuild.context({
  entryPoints: ["src/app.js"],
  outdir: "src/js",
  bundle: true,
});

let { host, port } = await ctx.serve({
  host: "localhost",
  servedir: "src",
  port: 3001,
});

console.log(`🚀 Serveur de développement démarré !`);
console.log(`📱 Local:   http://localhost:${port}/`);
console.log(`📂 Serveur de fichiers: src/`);

console.log(`⚡ Hot reload activé`);
console.log(`\nPour arrêter le serveur, appuyez sur Ctrl+C`);

// Maintenir le processus en vie
process.on("SIGINT", async () => {
  console.log("\n🔄 Arrêt du serveur...");
  await ctx.dispose();
  process.exit(0);
});
