
```
Tech Events Nepal
├─ .env.example
├─ .eslintrc.js
├─ .prettierrc
├─ apps
│  ├─ backend
│  │  ├─ .env
│  │  ├─ .env.example
│  │  ├─ .strapi
│  │  │  └─ client
│  │  │     ├─ app.js
│  │  │     └─ index.html
│  │  ├─ .strapi-updater.json
│  │  ├─ .tmp
│  │  │  └─ data.db
│  │  ├─ config
│  │  │  ├─ admin.ts
│  │  │  ├─ api.ts
│  │  │  ├─ database.ts
│  │  │  ├─ middlewares.ts
│  │  │  ├─ plugins.ts
│  │  │  └─ server.ts
│  │  ├─ database
│  │  │  └─ migrations
│  │  ├─ dist
│  │  │  ├─ config
│  │  │  │  ├─ admin.js
│  │  │  │  ├─ api.js
│  │  │  │  ├─ database.js
│  │  │  │  ├─ middlewares.js
│  │  │  │  ├─ plugins.js
│  │  │  │  └─ server.js
│  │  │  ├─ src
│  │  │  │  ├─ api
│  │  │  │  │  └─ event
│  │  │  │  │     ├─ content-types
│  │  │  │  │     │  └─ event
│  │  │  │  │     │     └─ schema.json
│  │  │  │  │     ├─ controllers
│  │  │  │  │     │  └─ event.js
│  │  │  │  │     ├─ routes
│  │  │  │  │     │  └─ event.js
│  │  │  │  │     └─ services
│  │  │  │  │        └─ event.js
│  │  │  │  ├─ extensions
│  │  │  │  │  └─ users-permissions
│  │  │  │  │     └─ content-types
│  │  │  │  │        └─ user
│  │  │  │  │           └─ schema.json
│  │  │  │  └─ index.js
│  │  │  └─ tsconfig.tsbuildinfo
│  │  ├─ favicon.png
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ robots.txt
│  │  │  └─ uploads
│  │  │     ├─ large_techeventsnepal_logo_d4d24adf6d.jpg
│  │  │     ├─ medium_techeventsnepal_logo_d4d24adf6d.jpg
│  │  │     ├─ small_techeventsnepal_logo_d4d24adf6d.jpg
│  │  │     ├─ techeventsnepal_logo_d4d24adf6d.jpg
│  │  │     └─ thumbnail_techeventsnepal_logo_d4d24adf6d.jpg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ admin
│  │  │  │  ├─ app.example.tsx
│  │  │  │  ├─ tsconfig.json
│  │  │  │  └─ vite.config.example.ts
│  │  │  ├─ api
│  │  │  │  └─ event
│  │  │  │     ├─ content-types
│  │  │  │     │  └─ event
│  │  │  │     │     └─ schema.json
│  │  │  │     ├─ controllers
│  │  │  │     │  └─ event.ts
│  │  │  │     ├─ routes
│  │  │  │     │  └─ event.ts
│  │  │  │     └─ services
│  │  │  │        └─ event.ts
│  │  │  ├─ extensions
│  │  │  │  └─ users-permissions
│  │  │  │     └─ content-types
│  │  │  │        └─ user
│  │  │  │           └─ schema.json
│  │  │  └─ index.ts
│  │  ├─ tsconfig.json
│  │  └─ types
│  │     └─ generated
│  │        ├─ components.d.ts
│  │        └─ contentTypes.d.ts
│  └─ frontend
│     ├─ .env.local
│     ├─ .next
│     │  ├─ app-build-manifest.json
│     │  ├─ build-manifest.json
│     │  ├─ cache
│     │  │  ├─ .rscinfo
│     │  │  ├─ swc
│     │  │  │  └─ plugins
│     │  │  │     └─ v7_windows_x86_64_9.0.0
│     │  │  └─ webpack
│     │  │     ├─ client-development
│     │  │     │  ├─ 0.pack.gz
│     │  │     │  ├─ 1.pack.gz
│     │  │     │  ├─ 10.pack.gz
│     │  │     │  ├─ 11.pack.gz
│     │  │     │  ├─ 12.pack.gz
│     │  │     │  ├─ 13.pack.gz
│     │  │     │  ├─ 14.pack.gz
│     │  │     │  ├─ 15.pack.gz
│     │  │     │  ├─ 16.pack.gz
│     │  │     │  ├─ 17.pack.gz
│     │  │     │  ├─ 18.pack.gz
│     │  │     │  ├─ 19.pack.gz
│     │  │     │  ├─ 2.pack.gz
│     │  │     │  ├─ 20.pack.gz
│     │  │     │  ├─ 21.pack.gz
│     │  │     │  ├─ 22.pack.gz
│     │  │     │  ├─ 23.pack.gz
│     │  │     │  ├─ 24.pack.gz
│     │  │     │  ├─ 25.pack.gz
│     │  │     │  ├─ 26.pack.gz
│     │  │     │  ├─ 27.pack.gz
│     │  │     │  ├─ 3.pack.gz
│     │  │     │  ├─ 4.pack.gz
│     │  │     │  ├─ 5.pack.gz
│     │  │     │  ├─ 6.pack.gz
│     │  │     │  ├─ 7.pack.gz
│     │  │     │  ├─ 8.pack.gz
│     │  │     │  ├─ 9.pack.gz
│     │  │     │  ├─ index.pack.gz
│     │  │     │  └─ index.pack.gz.old
│     │  │     ├─ client-development-fallback
│     │  │     │  ├─ 0.pack.gz
│     │  │     │  ├─ 1.pack.gz
│     │  │     │  ├─ index.pack.gz
│     │  │     │  └─ index.pack.gz.old
│     │  │     └─ server-development
│     │  │        ├─ 0.pack.gz
│     │  │        ├─ 1.pack.gz
│     │  │        ├─ 10.pack.gz
│     │  │        ├─ 11.pack.gz
│     │  │        ├─ 12.pack.gz
│     │  │        ├─ 13.pack.gz
│     │  │        ├─ 14.pack.gz
│     │  │        ├─ 15.pack.gz
│     │  │        ├─ 16.pack.gz
│     │  │        ├─ 17.pack.gz
│     │  │        ├─ 18.pack.gz
│     │  │        ├─ 19.pack.gz
│     │  │        ├─ 2.pack.gz
│     │  │        ├─ 20.pack.gz
│     │  │        ├─ 21.pack.gz
│     │  │        ├─ 3.pack.gz
│     │  │        ├─ 4.pack.gz
│     │  │        ├─ 5.pack.gz
│     │  │        ├─ 6.pack.gz
│     │  │        ├─ 7.pack.gz
│     │  │        ├─ 8.pack.gz
│     │  │        ├─ 9.pack.gz
│     │  │        ├─ index.pack.gz
│     │  │        └─ index.pack.gz.old
│     │  ├─ package.json
│     │  ├─ react-loadable-manifest.json
│     │  ├─ server
│     │  │  ├─ app
│     │  │  │  ├─ favicon.ico
│     │  │  │  │  └─ route.js
│     │  │  │  ├─ page.js
│     │  │  │  ├─ page_client-reference-manifest.js
│     │  │  │  └─ _not-found
│     │  │  │     ├─ page.js
│     │  │  │     └─ page_client-reference-manifest.js
│     │  │  ├─ app-paths-manifest.json
│     │  │  ├─ interception-route-rewrite-manifest.js
│     │  │  ├─ middleware-build-manifest.js
│     │  │  ├─ middleware-manifest.json
│     │  │  ├─ middleware-react-loadable-manifest.js
│     │  │  ├─ next-font-manifest.js
│     │  │  ├─ next-font-manifest.json
│     │  │  ├─ pages-manifest.json
│     │  │  ├─ server-reference-manifest.js
│     │  │  ├─ server-reference-manifest.json
│     │  │  ├─ vendor-chunks
│     │  │  │  ├─ @swc.js
│     │  │  │  ├─ bootstrap.js
│     │  │  │  ├─ next.js
│     │  │  │  ├─ react-icons.js
│     │  │  │  └─ styled-jsx.js
│     │  │  └─ webpack-runtime.js
│     │  ├─ static
│     │  │  ├─ chunks
│     │  │  │  ├─ app
│     │  │  │  │  ├─ layout.js
│     │  │  │  │  ├─ page.js
│     │  │  │  │  └─ _not-found
│     │  │  │  │     └─ page.js
│     │  │  │  ├─ app-pages-internals.js
│     │  │  │  ├─ main-app.js
│     │  │  │  ├─ polyfills.js
│     │  │  │  └─ webpack.js
│     │  │  ├─ css
│     │  │  │  └─ app
│     │  │  │     └─ layout.css
│     │  │  ├─ development
│     │  │  │  ├─ _buildManifest.js
│     │  │  │  └─ _ssgManifest.js
│     │  │  ├─ media
│     │  │  │  ├─ 569ce4b8f30dc480-s.p.woff2
│     │  │  │  ├─ 747892c23ea88013-s.woff2
│     │  │  │  ├─ 8d697b304b401681-s.woff2
│     │  │  │  ├─ 93f479601ee12b01-s.p.woff2
│     │  │  │  ├─ 9610d9e46709d722-s.woff2
│     │  │  │  └─ ba015fad6dcf6784-s.woff2
│     │  │  └─ webpack
│     │  │     ├─ 3cd7d99dfb98c8c4.webpack.hot-update.json
│     │  │     ├─ 633457081244afec._.hot-update.json
│     │  │     └─ webpack.3cd7d99dfb98c8c4.hot-update.js
│     │  ├─ trace
│     │  └─ types
│     │     ├─ app
│     │     │  ├─ layout.ts
│     │     │  └─ page.ts
│     │     ├─ cache-life.d.ts
│     │     └─ package.json
│     ├─ eslint.config.mjs
│     ├─ next-env.d.ts
│     ├─ next.config.ts
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  ├─ file.svg
│     │  ├─ globe.svg
│     │  ├─ images
│     │  │  ├─ dummy.jpg
│     │  │  ├─ hero_img.png
│     │  │  └─ Ten_img.png
│     │  ├─ next.svg
│     │  ├─ vercel.svg
│     │  └─ window.svg
│     ├─ README.md
│     ├─ src
│     │  ├─ app
│     │  │  ├─ favicon.ico
│     │  │  ├─ globals.css
│     │  │  ├─ layout.tsx
│     │  │  ├─ page.module.css
│     │  │  └─ page.tsx
│     │  ├─ assets
│     │  │  └─ images
│     │  ├─ components
│     │  │  ├─ events
│     │  │  │  ├─ EventCard.tsx
│     │  │  │  ├─ EventList.tsx
│     │  │  │  └─ FeaturedEvents.tsx
│     │  │  ├─ help
│     │  │  │  └─ HelpSection.tsx
│     │  │  ├─ hero
│     │  │  │  └─ Hero.tsx
│     │  │  ├─ layout
│     │  │  │  ├─ Footer.tsx
│     │  │  │  ├─ layout.tsx
│     │  │  │  └─ Navbar.tsx
│     │  │  ├─ services
│     │  │  │  └─ Services.tsx
│     │  │  └─ whyus
│     │  │     └─ WhyUs.tsx
│     │  └─ lib
│     │     └─ api.ts
│     └─ tsconfig.json
├─ package-lock.json
├─ package.json
├─ packages
│  ├─ types
│  └─ ui
├─ README.md
└─ scripts

```