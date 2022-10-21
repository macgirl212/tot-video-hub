# ToT Video Hub

![Home Page](./screenshots/Home%20Screen.png)

## What is this?

This is a MERN stack app to find YouTube videos related to the game, Tears of Themis. ToT is an acronym for Tears of Themis.

## Not to get too off track, but what is Tears of Themis, and why did you make this?

[Tears of Themis](https://tot.hoyoverse.com/en-us) is a romance/detective/adventure mobile game. I made this as my passion project. I like playing this game, but many of the game's storylines are only accessed through cards, which are acquired at random. Many of this game's generous players have recorded these limited stories and uploaded them onto YouTube. To make it easier to find them, I made this website.

## How does it work?

The home page allows you to choose the main character in your search.

![Home Page Navigation](./screenshots/Home%20Screen.gif)

You are then taken to their personal page where you can view their promotional video or browse all of the available cards on the EN servers. A single click on any card will load up a YouTube video linked to that card's story. You can also double click any card to bring up its fullscreen view of the video version of that card.

![Page Example](./screenshots/Page%20Example.gif)

## What external websites are you using with this?

This relies on [YouTube](https://www.youtube.com) and the [Tears of Themis Wiki site](https://tot.wiki/wiki/Tears_of_Themis_Wiki).

## Since this relies on external websites, how does it handle errors?

If the YouTube link is broken or the video doesn't load, there is a button you can click to send you directly to YouTube. No need to type anything into the search engine. Everything will already be filled for you. Just choose the video of your choice. And if the fullscreen video card isn't available, a link will be provided to go directly to this game's Wiki page, so you can submit your own copy of the video card.

## What was used to make this?

This is my very first MERN stack app. The back-end uses Node and Express. MongoDB, with Mongoose, is used for the database. The front-end uses React, Redux, and Axios.

## Will you deploy this?

Not likely. There's a lot of copyrighted artwork used from the original game, so I'd rather not risk any misuse of their property.

## What more are you planning on adding in the future?

Since this game constantly gets new stories and cards, this app will be constantly updated to keep up with the new releases. The linked YouTube videos are only using the Japanese dub, but I would like to add a feature to filter them by languages. This is most likely not going to have a mobile view, but I haven't blocked it from mobile view yet. It currently just looks really ugly on a phone. I also need to add double clicking on R cards to bring up its fullscreen static view, as R cards do not have a video version of its card.

## How do I run this?

After navigating to both the **client** and **server** folders and installing the dependencies with npm, enter **npm start** in the **server** folder, and then enter **yarn start** in the **client** folder. Open your browser and go to **localhost://3000**. Be warned that access to my database is needed to see everything this app has to offer.
