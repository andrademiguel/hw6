const links = [
    "https://www.csulb.edu/college-of-business"
];

const contentElement = document.getElementsByTagName("ul")[2];
links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.textContent = "College Of Business";
    linkElement.href = link;
    
    contentElement.appendChild(document.createElement("li"));
    contentElement.appendChild(linkElement);
    
});

// document.getElementsByTagName("li").innerHTM: += '<li><a href=https://www.csulb.edu/college-of-business'>College of Business</li>';

// var newListItem = document.createElement('li');
// newListItem.textContent = "College of Business";
