# My Curriculum Vitae
This repository contains the code in **Html**, **Css** and **Js** to generate my own **C.V.** in a **Pdf** format, this document is also already generated.
This in order to be able to share said document along with its respective code so that other developers can consult it or even be able to develop their own based on it.
## Why Html and Css?
Firstly I had planned to use a **docx** type file editor but these tend to be limited when it comes to styling these files, so I discarded it.

I also thought about applications like **Canvas** or **Photoshop** in which I could style it to my liking, but I soon saw that it was not fast to be able to make changes to the color palette and the margins.
Thinking about it, I remembered the history of **Html**, it was originally used to create scientific documentation, I also remembered that **Html** is the preferred language when generating **PDF's** in applications or web pages. I also remembered that in this one I could stylize each pixel if I wanted. Everything pointed me to using **Html** and **Css** until one day I said:

>I am a programmer, the most professional thing would be for me to do it that way.

  

And there was no turning back, I began to develop my resume that way.

## Built With

As the name itself indicates, use mainly:

1. Html5

2. Css3

3. JavaScript -html2pdf

  

In the future I want to try other solutions with Python and WeasyPrint, if these solutions are not already implemented, you will also see a **Json** file with the same information as the main document, this is for future improvements in which the information is It will request from said Json and add to an empty Template with that same structure, this in order to be able to add and edit my information only from said file.

## Getting Started


Do you want to use this file as a Template to create yours? Well, you don't need anything more than a Code Editor and a Browser.

Optionally you could also have a server on Localhost to avoid certain problems, but due to the simplicity of the project it is not necessary.

## Installation

You will only need to clone the repository as follows:

```
git clone https://github.com/pablopaydev/MyCurriculumVitae.git
```

## Usage


In my case, once with the repository on my machine, I open the project in **VSCode** for the server, I use the **Http** module of **Python** with the following code:

```
python3 -m http.server
```

Then you simply had to enter a browser and enter localhost, you will be able to see a preview of what the document looks like.

To change the content you will only need to edit the **curriculumVitae.html** file.

To modify the colors and style of the document simply modify the **styles.css** file.

Once you have the modified CV on the browser screen, you must open the **Developer Tools** with **F12** and go to the console and execute the following function.

```
generatePdf();
```

You should then be able to see how the document is downloaded from your browser.

Due to the difference in size between the screen and the type of letter sheet, you may have to make other types of modifications to the aforementioned files.

## Common Issuess

The **html2pdf** library has problems with certain specific styles, especially styles like:

```
.yourParentClass{

display: flex;

justify-content: center;

align-items: center;

flex-direction: row;

}

.yourChildrenClassOne{

display: flex;

justify-content: center;

align-items: center;

flex-direction: column;

margin: SomeUnit;

}

.yourChildrenClassTwo{

display: flex;

justify-content: center;

align-items: center;

flex-direction: column;

margin: SomeUnit;

}
```


In this specific case the generated **pdf** will be disproportionately offset, in my case I fixed it by simply not modifying the **margin** in the ChildrenClass and slightly modifying its **padding**.
If you find another type of error you can inform me.

## Contact

Pablo Javier Becerra Vargas - PabloJBecerraVDev@gmail.com