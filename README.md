# Christmas/ New Years card

This is the final project for the 3rd semester, where we could choose a topic to explore in depth. I chose motion design, specifically GSAP (GreenSock Animation).

At this time last year, we created a very simple animation using CSS keyframes to make a landscape turn snowy with a greeting appearing. I thought it would be fun to revisit that concept, this time using React and GSAP to really focus on the animations and elevate the design.

## How to setup the project

To get started, you need to have Visual Studio Code, Node.js, and Vite installed. All are easy to install; you can follow their installation guides here:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download/package-manager)
- [Vite](https://vite.dev/)

### 1. Create a folder for your React-projects

I recommend storing all your React projects in the same folder, as it's a good way to organize them. If you're working on a computer using OneDrive, store the folder in your C: drive. OneDrive security settings can block the necessary functions of Node.js and Vite.

### 2. Get the folder from GitHub

There are two ways to get the files from GitHub, both accessible from[my repository](https://github.com/EvaneRex/MotionDesign) by clicking on the green 'Code' button.

#### Method 1: Copying the URL

Click on the green button and copy the URL.
Open the terminal in the folder where you want to save it and write the following:

```bash
git clone https://github.com/EvaneRex/MotionDesign.git
```

#### Method 2: Downloading the ZIP-file

Click on the green button and download the file.
Unpack the file inside the folder you want to save it in.

### 3. Install the dependencies

When you have the files downloaded, open the terminal in the folder and write:

```bash
npm install
```

This should get all the dependencies needed for this project, except one.

### 4. Installing Live Sass Compiler

To ensure the project's styling compiles correctly (since it uses SCSS), open Visual Studio Code, go to the Extensions tab, and search for Live Sass Compiler. Click Install.

Once installed, you should see a button labeled Watch Sass in the bottom right corner of the VSC window. Click it, and it will change to a telescope icon with the text Watching.

### 5. Run the project locally

With Node.js installed, you can run the project locally and see updates in real time. In the terminal, run:

```bash
npm run dev
```

A localhost link will appear, and clicking on it will open the project in your preferred browser.

## Final

Now you're ready to explore the project, which is built using components. App.jsx handles three main components, each of which manages its own scene. I hope this project gives an insight into using React with GSAP and the effects motion design can have on websites.
