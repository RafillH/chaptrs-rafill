# chaptrs-rafill

## Description

This is a React Native (Expo) app that demonstrates a layout with a fixed header and footer, and a scrollable content area in between. The app fetches and displays a list of posts from a public API, handling loading, error, and empty states gracefully. Styling is managed using Tailwind CSS via NativeWind.

## Project Structure

- `App.tsx`: Main entry point, composes the layout with Header, Body, and Footer.
- `components/ui/header.tsx`: Fixed header component at the top.
- `components/ui/footer.tsx`: Fixed footer component at the bottom.
- `components/ui/body.tsx`: Handles fetching and displaying posts, and manages loading/error/empty states.
- `components/Post.tsx`: Renders individual post cards.
- `lib/services/index.ts`: Contains the API service for fetching posts.
- `lib/types/index.ts`: Type definitions for posts.
- `global.css`, `tailwind.config.js`: Tailwind CSS setup for styling with NativeWind.

## Setup Instructions

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the Expo development server:**

   ```sh
   npm start
   ```

   or, for platform-specific:

   ```sh
   npm run ios    # for iOS simulator
   npm run android # for Android emulator
   npm run web     # for web
   ```

3. **Open the app:**
   - Use the Expo Go app on your device to scan the QR code, or run on an emulator/simulator.

## Assumptions & Limitations

- **Data Source:** Posts are fetched from [jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts), a public mock API. No authentication is required. I have also added a 2 second timeout before loading the data, to ensure the loading state is visible.
- **Styling:** Uses Tailwind CSS via NativeWind. Since tailwind-rn was named in the coding challenge doc, I attempted to work with that, having no prior experience with it. I came across an issue in the package itself where the interface for the context provider didn't actually have `children` defined as a prop, meaning the provider couldn't wrap the app properly. For this reason, I moved away from tailwind-rn and used my go-to NativeWind package instead.
- **Header/Footer:** The header and footer are visually fixed using layout structure, but due to React Native's layout model, they are not absolutely positioned. This ensures compatibility across devices and platforms. I also decided to create them separately from the FlatList. Even though you can add headers and footers to FlatList components, I interpreted the instructions to be asking to have a **separate** header and footer (an app-wide one potentially).
- **No persistent storage:** All data is fetched live; there is no offline support or caching.
- **No environment variables:** All configuration is hardcoded for demo purposes.

## Customization

- To change the API endpoint, update `API_URL` in `lib/constants/index.ts`.
