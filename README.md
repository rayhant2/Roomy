# Roomy

[![Find the perfect roommates with a tinder styled app!](https://ytcards.demolab.com/?id=4WEibEsgpv4&title=Find+the+perfect+roommates+with+a+tinder+styled+app!&lang=en&timestamp=1636628400&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=1&width=250&border_radius=5&duration=436 "Find the perfect roommates with a tinder styled app!")](https://www.youtube.com/watch?v=4WEibEsgpv4)

Roomy.co is a mobile app designed to help university students find their perfect roommate. By combining the swiping mechanics of Tinder with an algorithm that matches users based on their preferences, Roomy.co makes the roommate search process fun, engaging, and efficient.

## Inspiration

The idea for Roomy.co originated with three of our founders, all incoming university students who struggled to find suitable roommates. The challenge inspired us to develop an app that could streamline the process. One of our team members suggested adding a Tinder-style swiping feature to make the process of finding a roommate more interactive and enjoyable.

## What It Does

Roomy.co allows users to find their ideal roommate by swiping on profiles:

- Swipe left to decline.
- Swipe right to accept.
- Swipe up to chat.

Each profile card displays key information such as name, age, pronouns, university, room type, faith, etc. The app’s algorithm prioritizes profiles that closely match the user's preferences, ensuring the best possible roommate matches.

## How We Built It

Roomy.co is built with the MERN stack and related technologies:

- **MongoDB** for the database
- **Express.js** for the backend server
- **React Native** with **Expo** for the mobile client app
- **Node.js** for the server runtime
- **TypeScript** for type safety in the client app
- **Expo Router** for file-based routing in the client

## Project Structure

- `/client`: React Native Expo app source code and assets
- `/server`: Express.js backend server code

## Running the App Locally

### Prerequisites

- Node.js and npm installed
- MongoDB instance running and accessible
- Expo CLI installed globally (`npm install -g expo-cli`)
- Android Studio or Xcode for emulators (optional)

### Start the Server

1. Navigate to the `/server` directory:
   ```bash
   cd server
   ```
2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on port 5001 by default.

### Start the Client

1. Navigate to the `/client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo app:
   ```bash
   npm start
   ```
4. Use Expo Go or an emulator to run the app on your device.

## Technologies Used

- React Native
- Expo
- Expo Router
- React Navigation
- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript
- Jest (for testing)

## Challenges We Ran Into

Our team encountered several challenges during development, particularly a lack of knowledge in React Native and Git. A notable challenge occurred when buggy code was merged into the main branch, causing significant delays as we worked to revert the commit. We overcame this challenge by seeking help from a mentor, who guided us through resolving the issue.

## Accomplishments That We're Proud Of

Despite the challenges, our team made significant strides in learning React Native and TypeScript. Starting from basic tutorials, we progressed to building components, screens, and solving complex problems related to the app. Additionally, two team members gained a foundational understanding of UI/UX design using Figma.

## What We Learned

This project was a learning experience for all of us. We deepened our programming skills, improved our teamwork, and became more proficient with Git and React Native. We also learned the importance of resilience and collaboration, turning mistakes into opportunities for growth.

## What's Next for Roomy.co

Our journey doesn't end here. We're committed to continuously improving Roomy.co, with plans to:

- Improve UI for better navigation and accessibility.
- Develop an AI-driven recommendation system for more accurate roommate matches.
- Introduce profile verification to ensure authenticity.
- Add in-app communication tools like calls and texts.
- Create a compatibility quiz to assess living habits and preferences.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
