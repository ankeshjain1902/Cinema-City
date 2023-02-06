const collection = require('../utilities/connection');

const moviesDb= [
    {
        id: 1,
        movieName: "Avatar",
        Year: "2009",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Director: "James Cameron",
        Writer: "James Cameron",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Metascore: "83",
        imdbRating: "7.9",
        Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        imagePath: "assets/1.jpg",
        Genre: "Action, Adventure, Fantasy",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    },
    {
        id: 2,
        movieName: "I Am Legend",
        Year: "2007",
        imagePath: "assets/2.jpg",
        Runtime: "101 min",
        Released: "14 Dec 2007",
        Director: "Francis Lawrence",
        Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
        Genre: "Drama, Horror, Sci-Fi",
        Awards: "9 wins & 21 nominations.",
        Metascore: "65",
        imdbRating: "7.2",
        Language: "English",
        Country: "USA",
        Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    },
    {
        id: 3,
        movieName: "300",
        imagePath: "assets/3.jpg",
        Genre: "Action, Drama, Fantasy",
        Year: "2006",
        Released: "09 Mar 2007",
        Runtime: "117 min",
        Director: "Zack Snyder",
        Writer: "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
        Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
        Language: "English",
        Country: "USA",
        Awards: "16 wins & 42 nominations.",
        Metascore: "52",
        imdbRating: "7.7",
        Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    },
    {
        id: 4,
        movieName: "The Avengers",
        imagePath: "assets/4.jpg",
        Genre: "Action, Sci-Fi, Thriller",
        Year: "2012",
        Released: "04 May 2012",
        Runtime: "143 min",
        Director: "Joss Whedon",
        Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        Language: "English, Russian",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
        Metascore: "69",
        imdbRating: "8.1",
        Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    }
];

const userDb= [
    {
        emailId: "raj@email.com",
        name: "raj",
        mobile: 9876543210,
        password: "aA1!bcdefgh",
        id: 1,
    }
];

const bookDb= [
    {
        seats: ["G 15"],
        numberOfSeat: 1,
        amount: 500,
        cartId: "",
        eventId: 0,
        date: "2022-03-17",
        time: "11:00",
        theatre: "2",
        id: 1,
        userId: 1,
    }
];

exports.setupDb = async () => {
    let userCollection = await collection.getUsersCollection();
    await userCollection.deleteMany();
    let userInsertion = await userCollection.insertMany(userDb);

    let moviesCollection = await collection.getMoviesCollection();
    await moviesCollection.deleteMany();
    let movieInsertion = await moviesCollection.insertMany(moviesDb);

    let bookCollection = await collection.getBookCollection();
    await bookCollection.deleteMany();
    let bookInsertion = await bookCollection.insertMany(bookDb);
  
    if (userInsertion && movieInsertion && bookInsertion) {
      return "Insertion Successful";
    } else {
      let err = new Error("Insertion failed");
      err.status = 400;
      throw err;
    }
  };


