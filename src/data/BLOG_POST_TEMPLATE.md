# Blog Post Template

Copy the snippet below into a new `.mdx` file in this folder to create a post. Name the file with your post slug, e.g. `my-new-post.mdx`.

Files starting with `_` (like this one) are ignored by the content collection.

---

## Minimal post (no images) — use a plain `.md` file

```md
---
title: Your Post Title
slug: your-post-slug
publishDate: 01 Jan 2025
description: A short summary for the blog index and meta tags.
---

Write your content here using regular markdown.
```

---

## Post with images — use an `.mdx` file

1. Create a folder for your images: `src/assets/blog/your-post-slug/`
2. Drop your images in that folder.
3. Create `your-post-slug.mdx` with the following structure:

```mdx
---
title: Your Post Title
slug: your-post-slug
publishDate: 01 Jan 2025
description: A short summary for the blog index and meta tags.
---

import BlogImage from "@/components/BlogImage.astro";
import myImage from "@/assets/blog/your-post-slug/my-image.png";
import anotherImage from "@/assets/blog/your-post-slug/another.jpg";

Regular markdown still works: **bold**, _italic_, `code`, [links](https://example.com).

<BlogImage src={myImage} alt="Describe the image" />

<BlogImage src={anotherImage} alt="Another image" caption="Optional caption below the image" />
```

---

## BlogImage props

| Prop      | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `src`     | import | —       | Required. An imported image.           |
| `alt`     | string | —       | Required. Accessible alt text.         |
| `caption` | string | —       | Optional. Shown as a figcaption below. |
| `width`   | number | 800     | Optional. Max display width in pixels. |

Images are automatically converted to WebP, resized, given a responsive srcset (1×, 1.5×, 2×), and lazy-loaded. No extra work needed.
