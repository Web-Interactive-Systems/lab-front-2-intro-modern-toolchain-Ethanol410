import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/app.js"],
  bundle: true,
  outfile: "./out.js",
  sourcemap: false,
  sourceRoot: "https://raw.githubusercontent.com/some/repo/v1.2.3/",
});
