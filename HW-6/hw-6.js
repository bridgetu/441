/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/

// Removing paragraphs
var paragraphsToRemove = document.getElementsByTagName('p');
var paragraphParent = paragraphsToRemove[0].parentNode;
var parLength = paragraphsToRemove.length;

for (var i = 0; i < parLength; i++) {
    paragraphParent.removeChild(paragraphsToRemove[0]);
    console.log(i);
}

// Content
var siteTitleText = "BASIC SPACE";
var par1Text = "I was recently made aware of the 'Basic Space' app through a fashion influencer I follow on Instagram. She was advertising different clothing and accessory items from her personal collection for sale on this app called 'Basic Space'. I am inspired by her style and was excited at the opportunity to purchase items from her personal wardrobe. I instantly went to the app store and downloaded the app... a prime example of the power of social media platforms and celebrity influence, am I right?!.";
var par2Text = "I have experience with other resale apps such as Depop (a popular fashion-centric resale app available only for mobile), but was curious what made this one different. Upon downloading the app and taking a moment to explore, I realized that, unlike similar apps, 'Basic Space' only allowed specific people to sell items. On the 'sellers' page there was a variety of celebrities, fashion influencers, socialites, etc. that had profiles with items listed for sale. So, I can buy but can't sell on this app. While this air of exclusivity might turn some away, I found that it created an extremely enjoyable user experience. The app features a minimalistic design and the 'curated' nature of the app removes clutter and leaves buyers with quality and clarity when searching and buying.";

// Creating and styling DOM nodes
var siteTitle = document.createElement('h1');
siteTitle.textContent = siteTitleText;
siteTitle.style.color = "white";

var par1 = document.createElement('p');
par1.textContent = par1Text;
par1.style.color = "white";

var par2 = document.createElement('p');
par2.textContent = par2Text;
par2.style.color = "white";

document.body.style.backgroundColor = "black";

var img1 = document.createElement('img');
img1.setAttribute('src', 'images/basic_space_app.png');
img1.alignItems = "center"

var linkWrapper = document.createElement('p');

var link1 = document.createElement('a');
link1.setAttribute('href', 'https://basic.space/');
link1.textContent = 'CLICK HERE TO DOWNLOAD BASIC SPACE';
link1.style.color = "white";

linkWrapper.appendChild(link1);

// Apply everything to DOM 
var contentDiv = document.getElementsByTagName("div")[0];
contentDiv.style.fontFamily = "sans-serif";
contentDiv.appendChild(siteTitle);
contentDiv.appendChild(par1);
contentDiv.appendChild(par2);
contentDiv.appendChild(linkWrapper);
contentDiv.appendChild(img1);