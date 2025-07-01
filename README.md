# YAMP Docs
## 🚀 Project Structure

You'll see the following folders and files:
 
```
.
├── public/
├── src/
│   ├── assets/       - Images and other media
│   ├── content/      - The actual docs
│   │   ├── docs/
│   │   │   ├── dev/  - Placeholder for generation
│   │   │   ├── rc/   - Placeholder for generation
│   │   │   ├── de/   - German Language; Latest
│   │   │   │   ├── dev/  - German Language; Dev
│   │   │   │   ├── rc/   - German Language; RC
│   │   │   ├── en/   - English Language (default); Latest
│   │   │   │   ├── dev/  - English Language; Dev
│   │   │   │   ├── rc/   - English Language; RC
│   │   ├── versions/ - Defining versions
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.
### Contributing

## 🧞 Commands

All commands are run from the root of the project, from a terminal:
> **Disclaimer**
> It is recommended to use bun. pnpm has problems resolving the library sharp. 

| Command                   | Action                                           |
|:--------------------------| :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
