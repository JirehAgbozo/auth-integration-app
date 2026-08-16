# AuthFlow — Authentication Integration App

Author Jireh Agbozo

AuthFlow is an Expo React Native application that demonstrates a complete authentication flow using **Supabase Auth**.

The application includes account creation, sign-in, sign-out, protected navigation, session persistence, client-side form validation, loading states, and authentication error handling.

## Features

- User sign-up with email and password
- Email confirmation through Supabase
- User sign-in
- User sign-out
- Protected authenticated screens
- Persistent login sessions across app launches
- Session restoration on application startup
- Loading indicators during authentication requests
- Form validation using React Hook Form and Zod
- Clear validation and authentication error messages
- Supabase credentials stored securely using environment variables

## Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- Supabase Auth
- React Hook Form
- Zod
- AsyncStorage

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JirehAgbozo/auth-integration-app.git
```

Navigate into the project:

```bash
cd auth-integration-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

Create a Supabase project and enable email/password authentication.

Create a `.env` file in the root of the project:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

The `.env` file is excluded from Git through `.gitignore` so Supabase credentials are not committed to the repository.

### 4. Run the Application

Start the Expo development server:

```bash
npx expo start
```

Open the project using Expo Go on a supported mobile device.

## Authentication Flow

1. A new user opens the Sign-Up screen.
2. The user enters an email address and password.
3. React Hook Form and Zod validate the form before submission.
4. Supabase creates the user account.
5. If email confirmation is enabled, the user confirms the account from the email sent by Supabase.
6. The user signs in using the registered credentials.
7. The authenticated user is redirected to the protected Home screen.
8. The user's Supabase session is stored and restored when the app is reopened.
9. Selecting Sign Out clears the session and returns the user to the Sign-In screen.

## Validation and Error Handling

The application provides feedback for:

- Invalid email addresses
- Missing passwords
- Weak passwords
- Password confirmation mismatch
- Invalid login credentials
- Authentication failures
- Network failures

Loading indicators are displayed while authentication requests are being processed.

## Test Account

No shared test account credentials are stored in this public repository.

A test account can be created directly from the application's **Create Account** screen. If Supabase email confirmation is enabled, confirm the email before attempting to sign in.

## Security

Supabase credentials are stored in a local `.env` file.

The `.env` file is excluded from version control and must never be committed to GitHub.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
