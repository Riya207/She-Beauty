let availableKeywords = [
    'Face',
    'Makeup Products',
    'Skin Products',
    'Hair Products',
    'Body Products',
    'Eyes',
    'Lips',
    'Nails',
    'Cleanser',
    'Moisturizer',
    'Suncare',
    'Serum',
    'Body Lotion',
    'Body Wash',
    'Fragrance',
    'Powder',
    'Shampoo',
    'Conditioner',
    'Hair Oil',
];

// Map the keywords to their corresponding product URLs
const productLinks = {
    'Face': 'makeup/face.html',
    'Makeup Products': 'makeup/makeup.html',
    'Skin Products': 'skin/skincare.html',
    'Hair Products': 'hair/hair.html',
    'Body Products': 'body/body.html',
    'Eyes': 'makeup/eyes.html',
    'Lips': 'makeup/lip.html',
    'Nails': 'makeup/nails.html',
    'Cleanser': 'skin/cleanser.html',
    'Moisturizer': 'skin/moisturiser.html',
    'Suncare': 'skin/suncare.html',
    'Serum': 'skin/serum.html',
    'Body Lotion': 'body/body lotion.html',
    'Body Wash': 'body/body wash.html',
    'Fragrance': 'body/fragrance.html',
    'Powder': 'body/powder.html',
    'Shampoo': 'hair/shampoo.html',
    'Conditioner': 'hair/conditioner.html',
    'Hair Oil': 'hair/hair-oil.html',
};

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value.trim();
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if (!result.length || input === '') {
        resultsBox.style.display = "none"; // Hide result box
    } else {
        resultsBox.style.display = "block"; // Show result box if there are results
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    }).join('');

    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}

function selectInput(list) {
    const selectedKeyword = list.innerHTML;
    if (productLinks[selectedKeyword]) {
        // Redirect to the corresponding product page
        window.location.href = productLinks[selectedKeyword];
    }
    resultsBox.style.display = "none"; // Hide result box after selection
}

// Hide result box when clicking outside
document.addEventListener("click", function (event) {
    if (!inputBox.contains(event.target) && !resultsBox.contains(event.target)) {
        resultsBox.style.display = "none";
    }
});
