async function sendJSON() {

    let user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        city: document.getElementById('city').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value
    };

    try {

        let response = await fetch("./php/add_user.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        let result = await response.json();
        
    } catch (error) {
        console.log(error);
    }

    return result;
}


async function getJSON() {

    let output = document.querySelector('.info');
    output.innerHTML = "";

    fetch("./php/data.json")
        .then(response => response.json())
        .then(json => {
            let info = json;
            for (let i = 0; i <= info.length; i++) {

                let output_name = info[i][0].name;
                let output_surname = info[i][0].surname;
                let output_city = info[i][0].city;
                let output_number = info[i][0].number;
                let output_email = info[i][0].email;

                output.innerHTML += "<div class='output'>" +
                                        "<p class='output_text'> Name: " + output_name + "<p>" + 
                                        "<p class='output_text'> Surame: " + output_surname + "<p>" + 
                                        "<p class='output_text'> City: " + output_city + "<p>" + 
                                        "<p class='output_text'> Number: " + output_number + "<p>" + 
                                        "<p class='output_text'> Email: " + output_email + "<p>" + 
                                    "</div>";
            }
        });
}
