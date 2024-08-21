document.addEventListener("DOMContentLoaded", function() {
    const books = [
        { title: "Peer-e-Kamil", category: "urdu-novels", pdf: "./Assets/Peer-e-Kamil.pdf", image: "./Assets/Peer-e-Kamil.jpg" },
        { title: "Udaas Naslain", category: "urdu-novels", pdf: "./Assets/Udaas Naslain.pdf", image: "./Assets/Udaas Naslain.jpg" },
        { title: "Shahab Nama", category: "urdu-novels", pdf: "./Assets/Shahab Nama.pdf", image: "./Assets/Shahab Nama.jpg" },
        { title: "Aab-e-Hayat", category: "urdu-novels", pdf: "./Assets/Aab-e-Hayat.pdf", image: "./Assets/Aab-e-Hayat.jpg" },
        { title: "Dil Tune Chura liya", category: "urdu-novels", pdf: "./Assets/Dil Tune Chura liya.pdf", image: "./Assets/Dil Tune Chura liya.jpg" },
        { title: "40 charagh Ishq ke", category: "urdu-novels", pdf: "./Assets/40 charagh Ishq ke.pdf", image: "./Assets/40 charagh Ishq ke.jpg" },
        { title: "Meri Adhuri Prem Kahani", category: "urdu-novels", pdf: "./Assets/Meri Adhuri Prem Kahani.pdf", image: "./Assets/Meri Adhuri Prem Kahani.jpeg" },
        { title: "Java: The Complete Reference", category: "java-books", pdf: "./Assets/Java Text - Liang.pdf", image: "./Assets/Introduction-Java.jpeg" },
        { title: "Effective Java", category: "java-books", pdf: "./Assets/Effective-Java.pdf", image: "./Assets/jaav.jpg" },
        { title: "Advanced Java", category: "java-books", pdf: "./Assets/Head-First-Java.pdf", image: "./Assets/Java2.jpg" },
        { title: "Python Crash Course", category: "python-books", pdf: "./Assets/Python-Crash-Course.pdf", image: "./Assets/Python.jpg" },
        { title: "Learn Python", category: "python-books", pdf: "./Assets/Learn Python.pdf", image: "./Assets/Python2.jpg"  },
        { title: "Fluent Python", category: "python-books", pdf: "./Assets/Fluent Python.pdf", image: "./Assets/Fluent Python.jpg" },
        { title: "A brief History of Time", category: "science-books", pdf: "./Assets/stephen_hawking_a_brief_history_of_time.pdf" , image: "./Assets/A brief History of time.jpg"  },
        { title: "The Selfish Gene", category: "science-books", pdf: "./Assets/The-Selfish-Gene-R.-Dawkins-1976-WW-.pdf", image: "./Assets/Selfish Gene.jpeg"},
        { title: "The Origin of Species", category: "science-books", pdf: "./Assets/The-Origin-of-Species.pdf", image: "./Assets/The Origin of Species.jpg" },
        { title: "Sapiens: Humankind", category: "history-books", pdf: "./Assets/Sapiens.pdf", image: "./Assets/Sapiens.jpg" },
        { title: "Guns, Germs, and Steel", category: "history-books", pdf: "./Assets/Guns-Germs-and-Steel.pdf", image: "./Assets/Guns-Germs-and-Steel.jpeg" },
        { title: "The History of the Ancient World", category: "history-books", pdf: "./Assets/The-History-of-the-Ancient-World.pdf", image: "./Assets/The-History-of-the-Ancient-World.jpg" }
    ];

    const history = [];

    function displayBooks(bookList) {
        const bookListContainer = document.getElementById("bookList");
        bookListContainer.innerHTML = "";
        bookList.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");

            const bookCover = document.createElement("img");
            bookCover.src = book.image;
            bookCover.alt = book.title;
            bookCover.classList.add("book-cover");

            const bookTitle = document.createElement("h3");
            bookTitle.textContent = book.title;

            const readButton = document.createElement("button");
            readButton.textContent = "Read Book";
            readButton.addEventListener("click", () => handleBookClick(book));

            bookItem.appendChild(bookCover);
            bookItem.appendChild(bookTitle);
            bookItem.appendChild(readButton);

            bookListContainer.appendChild(bookItem);
        });
    }

    function filterBooks() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const category = document.getElementById("categorySelect").value;
        const filteredBooks = books.filter(book => {
            const matchesTitle = book.title.toLowerCase().includes(searchInput);
            const matchesCategory = category === "all" || book.category === category;
            return matchesTitle && matchesCategory;
        });
        displayBooks(filteredBooks);
    }

    function handleBookClick(book) {
        if (book.pdf) {
            window.open(book.pdf, '_blank'); 
        } else {
            addToHistory(book.title);
        }
    }

    function addToHistory(bookTitle) {
        history.push(bookTitle);
        const historyList = document.getElementById("historyList");
        const historyItem = document.createElement("li");
        historyItem.textContent = `Borrowed: ${bookTitle}`;
        historyList.appendChild(historyItem);
    }

    function clearHistory() {
        history.length = 0;
        const historyList = document.getElementById("historyList");
        historyList.innerHTML = "";
    }

    document.getElementById("searchInput").addEventListener("input", filterBooks);
    document.getElementById("categorySelect").addEventListener("change", filterBooks);
    document.getElementById("clearHistory").addEventListener("click", clearHistory);

    displayBooks(books);

    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function() {
        sidebar.style.left = "0";
    });

    closeMenu.addEventListener("click", function() {
        sidebar.style.left = "-250px"; 
    });

   
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.style.left = "-250px"; 
        }
    });

 
    const booksLink = document.getElementById("booksLink");
    const historyLink = document.getElementById("historyLink");
    const bookList = document.getElementById("bookList");
    const historySection = document.querySelector(".borrowing-history");

    booksLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
        bookList.style.display = 'block';
    });

    historyLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
        historySection.style.display = 'block';
    });
});


// login & SignUp
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");

    loginButton.addEventListener("click", function() {
        alert("Login button clicked");
        
    });

    signupButton.addEventListener("click", function() {
        alert("Sign Up button clicked");
    })
})
