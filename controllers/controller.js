

export const main = async (request, response) => {
    try {
        response.render('lists');
    } catch(error) {
        console.log("An error occured in main page..", error);
    }
}


