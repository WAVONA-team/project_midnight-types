# project_midnight-types

**TypeScript type definitions for the Project Midnight ecosystem.**
This package provides a robust, reusable set of domain models for user, playlist, and track management in modern music or media applications.

## What is this?

`project_midnight-types` is a shared type library designed for teams building full-stack applications around music streaming, playlist curation, and user management.
It solves the problem of type duplication and inconsistency between backend and frontend, enabling seamless integration and type safety across services.

---

## Key Features

- **Comprehensive Domain Models:**
  Includes well-structured types for Users, Playlists, Tracks, and authentication tokens, covering real-world music app scenarios.

- **Cross-Platform Ready:**
  Designed for use in both Node.js backends and TypeScript frontends, ensuring type consistency throughout your stack.

- **Extensible & Maintainable:**
  Modular structure makes it easy to extend or adapt to evolving business requirements.

- **OAuth & Multi-Provider Support:**
  User types include fields for multiple OAuth providers (Spotify, Yandex, VK, Apple), supporting modern authentication flows.

- **Rich Playlist & Track Relationships:**
  Models capture complex relationships between users, playlists, and tracks, including favorites, saved tracks, and search history.

---

## Technologies & Architecture

- **TypeScript-first:**
  Written entirely in TypeScript, leveraging strict type checking and modern language features.

- **Logical Structure:**

  - `src/declarations/` — Source type definitions for core entities (`User`, `Playlist`, `Track`, `RefreshToken`).
  - `types/` — Generated `.d.ts` files for consumption by other projects.
  - `dest/` — Compiled JavaScript output (if needed for runtime use).

- **Build & Usage:**

  - Build with `tsc` (TypeScript 5.x).
  - Import types directly from the package in your backend or frontend codebase:
    ```ts
    import { User, Playlist, Track } from "project_midnight-types";
    ```

- **NPM & GitHub Integration:**
  Automated publishing via GitHub Actions ensures up-to-date types are always available.

- **No Runtime Dependencies:**
  Pure type definitions — zero runtime overhead.

---

## Example Types

- **User:**
  Rich user model with OAuth tokens, playlists, and track history.
- **Playlist:**
  Supports custom, saved, and favorite playlists, linked to users and tracks.
- **Track:**
  Detailed track metadata, including author, source, and playlist associations.
- **Token:**
  Refresh token structure for secure authentication flows.

---

**Explore the code for more details, or reach out if you want to see how these types can accelerate your music or media platform development.**
