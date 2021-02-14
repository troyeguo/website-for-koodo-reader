const changeLogs = [
  {
    date: "2021.2.12",
    version: "1.2.2",
    new: [
      "Emergency Fix for the white screen bug in some devices",
      "Add support for changing storage location",
      "Auto syncing among multiple devices, checkout faq for more instructions",
      "Cover mode for book view",
      "Add support to Windows 7",
      "Lock the panel on the left and right side of the reader",
      "UI optimization",
      "improvement on Chapter-analysing algorithm",
      "Add support for boldening text",
      "Cancel Bookmarks tab",
      "Increase the scale range of the single page",
      "Add support for revoking authorization of drive",
    ],
    fix: [
      "Fix the bug of unable to delete notes and digests",
      "Fix the bug of loading animation",
      "Fix the bug of open-url dialog",
      "Fix the bug of book title and book type",
      "Fix the bug of fullscreen",
      "Having a happy Chinese new year",
    ],
  },
  {
    date: "2021.2.12",
    version: "1.2.1",
    new: [
      "Add support for changing storage location",
      "Auto syncing among multiple devices, checkout faq for more instructions",
      "Cover mode for book view",
      "Add support to Windows 7",
      "Lock the panel on the left and right side of the reader",
      "UI optimization",
      "improvement on Chapter-analysing algorithm",
      "Add support for boldening text",
      "Cancel Bookmarks tab",
      "Increase the scale range of the single page",
      "Add support for revoking authorization of drive",
    ],
    fix: [
      "Fix the bug of unable to delete notes and digests",
      "Fix the bug of loading animation",
      "Fix the bug of open-url dialog",
      "Fix the bug of book title and book type",
      "Fix the bug of fullscreen",
      "Having a happy Chinese new year",
    ],
  },
  {
    date: "2021.1.24",
    version: "1.2.0",
    new: [
      "New webdav backup method, only supported by the client",
      "It supports importing pictures in mobi, azw3 files, and files with many pictures such as comics are not currently supported, which may easily lead to software crashes",
      "UI details optimization, adding some animation effects",
      "Support to modify page margins",
      "Support to set the display of header and footer separately",
      "Optimized for portrait display",
      "Place the settings of the header, footer and simulation background in the reading options",
      "Books opened by the client are automatically maximized",
    ],
    fix: [
      "Fix the bug that the books disappear after setting the sorting of notebook summaries",
      "Fix the bug that the page refreshes automatically when the page zoom ratio is set",
    ],
  },
  {
    date: "2020.12.27",
    version: "1.1.9",
    new: [
      "Books are added in order of reading progress and author name",
      "Notes and excerpts are added to sort by book title",
      "Support custom reading background color and text color",
      "Optimize Book Chapter Splitting Algorithm",
      "The client supports opening multiple books at the same time",
      "The client supports the book window size",
      "The reader adds a page change button, located in the lower left and right corners",
      "Add some interactive animations",
      "Windows provides a portable version of the installation package, follow-up updates please download from the official website",
      "Support custom installation directory",
    ],
    fix: [
      "Fix the problem of importing garbled txt files",
      "Fix the bug of the listening function",
      "Fix the problem that the notebook extract is not deleted when the book is emptied",
      "Fix the page change from single page mode to double page mode when the zoom ratio is too large",
      "Fix the problem that the notebook extract is not deleted when the book is emptied",
      "Fix the problem that some books cannot record reading progress",
      "Fix the conflict between automatically opening the last read book and double-clicking the book to open",
    ],
  },
  {
    date: "2020.11.21",
    version: "1.1.8",
    new: [
      "Add support for the azw3 format, only supported by the client, not for the picture function temporarily",
      "Added the recycle bin function, the deleted books will be temporarily moved to the recycle bin, and the books in the recycle bin can still be restored. Empty the recycle bin to delete the books permanently",
      "On windows, you can use Koodo Reader to directly open epub, pdf, mobi, azw3 and txt files, select Koodo Reader as the opening method, and the opened files will be automatically added to the library",
      "Add the function of sorting by reading time",
      "The original content will be displayed below the note",
      "The zoom ratio of single page mode has been increased to 200%, removing the chapter switching buttons on both sides, you can still use the arrows in the progress bar to switch chapters",
      "Support drag and drop books to add to my favorite and recycle bin",
      "Use embedded font settings to move to reading options",
      "Optimize the parsing and chapter algorithm of mobi and txt books",
      "Add reading progress in the upper left corner of the book cover",
    ],
    fix: [
      "Fix the problem of internationalization failure",
      "Fix the bug of automatically opening the book",
      "Fix the problem that the number of pages is not updated",
      "Fix the problem of clicking the directory to jump the browser",
    ],
  },
  {
    version: "1.1.7",
    versionTag: "1-1-7",
    date: "18 October, 2020",
    new: [
      "Add support for pdf format, not support notes, bookmarks and other functions",
      "Add support for mobi format, only supported by the client, not for the picture function temporarily",
      "Add support for txt format, only client support",
      "Refactor the code using React Router",
      "Further reduce memory usage",
      "Set whether to expand all directories by default",
      "The web version supports opening multiple books at the same time",
      "When the client opens the book, the window is automatically maximized",
    ],
    fix: [
      "Fix the problem that multi-level directories cannot be expanded",
      "Fixed the problem of invalid font and font size changing chapter",
      "Fix the problem that the progress bar cannot jump",
      "Fix the typesetting problem of the English interface",
    ],
  },
  {
    version: "1.1.6",
    versionTag: "1-1-6",
    date: "29 September, 2020",
    fix: [
      "Remove the previous book size and quantity restrictions",
      "Fix the crash of bookmark page",
      "Fix some bugs in touch mode, click the edge to call out the menu, then click the book to exit the menu",
    ],
    new: [
      "Reduce memory usage, improve the opening speed of the first screen, and optimize the multi-file import experience",
      "Continuous scrolling and chapter scrolling are added in scroll mode",
      "Support to adjust page zoom ratio in single page mode",
      "My bookshelf is now moved to the top of all books",
      "Support deleting bookshelves and tags",
      "Add this reading time, the remaining time in this chapter",
      "Header and footer will now display the current page number, book title and chapter name, if you don’t need it, please go to the settings to close",
      "Support to close the simulation background of the book, please go to the settings to close",
      "Support zoom, rotate, save the pictures in the book",
    ],
  },
  {
    version: "1.1.5",
    versionTag: "1-1-5",
    date: "13 September, 2020",
    fix: [
      "Fix some bugs in scroll mode",
      "Fix the crash problem during backup recovery",
      "Performance optimization at client startup",
    ],
    new: [
      "Add listening function",
      "Add support for touch screen, please go to Settings->Enable touch mode, double-click the page when reading to call up the menu, then double-click to exit, slide up, down, left, and right to control page turning",
      "Single page mode adds scrolling reading function",
      "Support searching notes and book excerpts",
      "Support tagging notes and book excerpts",
      "Add underline mark function",
      "Support to collapse multi-level directories",
      "Support to automatically open the last read book, please go to Settings -> Automatically open the last read book",
      "Support to control whether to use embedded fonts, please go to Settings -> Use embedded fonts",
      "New Black Reading Theme",
      "New startup animation on the client side",
    ],
  },
  {
    version: "1.1.4",
    versionTag: "1-1-4",
    date: "6 September, 2020",
    fix: [
      "Fix the problem that pictures are displayed on the wrong page",
      "Fix the problem that some books cannot be imported during batch import",
    ],
    new: [
      "Support full book search",
      "The client version supports the use of local fonts",
      "Single page mode adds scrolling reading function",
      "Added support for built-in styles of epub files",
      "The font supports any size adjustment",
      "UI details optimization",
    ],
  },
  {
    version: "1.1.3",
    versionTag: "1-1-3",
    date: "23 August, 2020",
    fix: [
      "Fix the problem of inaccurate jump positions of notes, book excerpts, and bookmarks",
      "Fix the problem that the reader crashes when deleting bookmarks",
      "Fix the problem that the reading progress is NaN",
      "Fix the problem that the note pop-up window exceeds the scope of the reader",
      "Fix the flickering problem of the book page after failing to import the book",
    ],
    new: [
      "Now you can add heart marks to your favorite books, and you can find all the marked books in My Favorites",
      "After adding a bookmark, a bookmark icon will appear in the upper right corner of this page",
      "UI optimization for book operations",
    ],
  },
  {
    version: "1.1.2",
    versionTag: "1-1-2",
    date: "4 August, 2020",
    fix: [],
    new: [
      "New highlight color selection function",
      "Add the function of jumping directly to the original book position from notes and book excerpts",
      "Add multi-level directory function",
      "Add picture preview function",
      "Notes can now be edited, and notes can also be added to the excerpt. Both notes and excerpts will be highlighted in the text",
      "Add support for Traditional Chinese, you can click the language button at the top to switch languages ​​freely",
      "Add translation function, use Baidu Translate API",
      "Delete the recently read tab, the recently read and added books will automatically be displayed at the top of all books",
      "Multi-terminal synchronization function now supports OneDrive",
    ],
  },
  {
    version: "1.1.1",
    versionTag: "1-1-1",
    date: "13 July, 2020",
    fix: [
      "Fix the problem that icons and text are not centered in card mode and list mode",
      "Fixed the issue that after ESC exits the full screen, the full screen cannot be entered here",
      "Fix the problem that the delete button is displayed in multiple places",
    ],
    new: [],
  },
  {
    version: "1.1.0",
    versionTag: "1-1-0",
    date: "2 July, 2020",
    fix: [],
    new: [
      "Now Koodo Reader supports binding Dropbox to achieve multi-terminal synchronization, and more network disks will be supported in subsequent updates",
      "Bookmarks, highlighting, notes and excerpts support deletion",
      "Support bulk adding books",
    ],
  },
  {
    version: "1.0.9",
    versionTag: "1-0-9",
    date: "21 June, 2020",
    fix: [
      "Fix font adjustment bug",
      "Fix the bug that language switching cannot be saved",
      "Fix the abnormal exit bug of the settings panel",
    ],
    new: [
      "Code refactoring, increase code readability, split the source code xxx.js into three files index.js, component.js, interface.js",
      "Use Google Font to unify fonts as Source Sans Pro",
    ],
  },
  {
    version: "1.0.8",
    versionTag: "1-0-8",
    date: "8 June, 2020",
    fix: [
      "Fix the logo font problem",
      "Fix the problem of abnormal highlighting",
      "Select font to replace with more commonly used fonts, such as Times New Roman, Times New Roman",
    ],
    new: [
      "Now Koodo Reader supports English! Non-Chinese operating systems will automatically display the English interface",
      "Koodo Reader official website is officially launched!",
      "Support drag and drop to add books, you can add books by dragging them to the button of importing books",
    ],
  },
  {
    version: "1.0.7",
    versionTag: "1-0-7",
    date: "27 Apr, 2020",
    fix: [
      "Fix the white screen problem after backup and restore",
      "Delete redundant test code",
      "Remove margin setting options",
      "Some option titles are displayed in bold",
    ],
    new: [
      "The entire project is refactored using Typescript",
      "The original Javascript code is saved in the Javascript branch",
    ],
  },
];
module.exports = changeLogs;
