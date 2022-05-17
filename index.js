const data = {
    "firstName": "Manjusha",
    "lastName": "Babu",
    "place": "Coimbatore",
    "email": "thisismanjubrucey@gmail.com",
    "phoneNo": "8667270192",
    "education": {
        "X": {
            "schoolName": "S.B.O.A Mat Hr Sec School",
            "marksObtained": 473,
            "percentage": "95%"
        },
        "XII": {
            "schoolName": "S.B.O.A Mat Hr Sec School",
            "marksObtained": 1122,
            "percentage": "93%"
        },
        "BE": {
            "group": "Computer Science and Engineering",
            "collegeName": "Karpagam College of Engineering",
            "cgpa": 9.1,
            "percentage": "91%"
        }
    },
    "hobbies": [
        "Wall art",
        "Designing",
        "Baking",
        "Doodling",
        "Singing"
    ],
    "extraCurriculam": [
        "Football Zonal level winners",
        "Football District 2nd - interzonal level",
        "Holding a completion certificate of Deutsch A1 level"
    ],
    "personality": [
        "Innovative",
        "Hardworking",
        "Creative",
        "Team work",
        "Positive"
    ]
}

for (let i=0; i < Object.keys(data).length; i++) {
    console.log('response in for loop: ', Object.values(data)[i]);
}

// `forEach` is used to iterate over the elements of the array
Object.keys(data).forEach((_data) => console.log('response in forEach ', data[_data]));

// for in allows to iterate through all the property keys of an object
for (let _data in data) {
    console.log('response in for in ', data[_data]);
}

// for of loop was introduced in the later versions of ES6
// It allows to iterate over iterable objects like arrays, strings, maps, sets etc
for (let value of Object.keys(data)) {
    console.log('response in for of ', data[value]);
}
