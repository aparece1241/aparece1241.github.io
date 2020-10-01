db.persons.insertMany([{
    name: "Harvey Aparece",
    isActive: true,
    age: 19,
    eyeColor: "black",
    favoriteFruit: ["mango","banana"],
    company: {
        title: "PN",
        email:"19104865@usc.edu.ph",
        phone: 09878764323,
        location: {
            country: "Philippines",
            Address: "Talamban, Cebu City"
        }
    }
}],
[{
    name: "Precy Jane Roxas",
    isActive: true,
    age: 19,
    eyeColor: "black",
    favoriteFruit: ["banana"],
    company: {
        title: "PN",
        email: "19104900@usc.edu.ph",
        phone: 09878764323,
        location: {
            country: "Philippines",
            Address: "Talamban, Cebu City"
        }
    }
}],
[{
    name: "Leordan Carmona",
    isActive: true,
    age: 20,
    eyeColor: "black",
    favoriteFruit: ["apple","banana"],
    company: {
        title: "PN",
        email: "19104897@usc.edu.ph",
        phone: 09878764323,
        location: {
            country: "Philippines",
            Address: "Talamban, Cebu City"
        }
    }
}]);

db.persons.insertOne(
    {
        name: "Jaynard Senilla",
        isActive: true,
        age: 19,
        eyeColor: "black",
        favoriteFruit: ["mango","banana"],
        company: {
            title: "PN",
            email: "19104889@usc.edu.ph",
            phone: 09753283309,
            location: {
                country: "Philippines",
                Address: "Talamban, Cebu City"
            }
        }
    }
)