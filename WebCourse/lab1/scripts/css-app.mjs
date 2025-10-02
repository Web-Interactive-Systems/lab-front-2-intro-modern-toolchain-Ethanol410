import * as esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./src/styles.css"],
  bundle: true,
  outfile: "./src/out.css",
});
