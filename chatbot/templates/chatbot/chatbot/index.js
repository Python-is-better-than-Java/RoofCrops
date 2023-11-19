import {process} from "./env.js"
const setupTextarea = document.getElementById('setup-textarea')
const setuploading = document.getElementById('output-container')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const url = "https://api.openai.com/v1/completions"

// $(window).on('load', function(){
//     $("#output-container").css('display', 'block');
// });
document.getElementById("send-btn").addEventListener("click", () => {
    //setupInputContainer.innerHTML = '<img src="images/loading.svg" class="loading" id="loading">'
    //movieBossText.innerText = "OK, just wait a second while my digital brain digests that..."
    var prompttext = setupTextarea.value;
    fetchSynopsis(prompttext);
})
async function fetchBotReply(outline){
    const response = await fetchAPI(url, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Authorization":"Bearer " + OPENAI_API_KEY
        },
        body: JSON.stringify({
            'model':'text-davinci-003',
            'prompt':`Generate a short answer to say that you need some time to generate the required information about the plant
            and the agricultural practices required to grow it.
            ###
            OUTLINE: I want to grow rafflesias in my garden. What soil and environmental conditions do I require?
            ANSWER: Rafflesias? Sounds interesting. Give me some time to generate the information about the plant and the required conditions to grow it.
            ###
            OUTLINE: I live in the equatorial region. Which plants can I grow on the terrace of my home?
            ANSWER: There are a lot of plants you can grow. Give me some time to generate the reqiured information.
            ###
            OUTLINE: Give me a list of plants that I cannot grow on the terrace of my home.
            ANSWER: There is a very long list of such plants. I need some time to generate a proper list of some such plants.
            ###
            OUTLINE: ${outline}
            ANSWER:
            `,
            'max_tokens':100,
            'temperature':0.8,
        })
    })
    const data = await response.json();
    //setupInputContainer.innerHTML = '<img src="images/check.svg">'
    //movieBossText.innerText = data.choices[0].text
    fetchSynopsis(outline)
}

async function fetchSynopsis(outline){
    const response = await fetchAPI(url, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Authorization":"Bearer " + OPENAI_API_KEY
        },
        body: JSON.stringify({
            'model':'text-davinci-003',
            'prompt':`prompt: Generate an answer containing information on the plant mentioned in the outline, including its scientific name. If it is feasible to grow it on the terrace of your home,
            then tell the conditions (environmental, nutrients and others), soil type to grow it and any other additional information.
            If it is not feasible, explain why.
            ###
            OUTLINE: Is growing roses on the terrace of your home feasible?
            ANSWER: Roses:

            Scientific Name:
            Roses belong to the genus Rosa.
            
            Feasibility on the Terrace:
            
            Conditions for Growing Roses on the Terrace:
            
            Environmental Conditions:
            
            Sunlight: Roses thrive in full sunlight, requiring at least six hours of direct sunlight per day. Ensure that your terrace receives adequate sunlight.
            Temperature: Roses generally prefer moderate temperatures. Cold-hardy varieties are suitable for cooler climates, while heat-tolerant varieties are better for warmer regions.
            Air Circulation: Good air circulation helps prevent diseases, so ensure that the terrace is well-ventilated.
            Soil Type:
            
            Well-Drained Soil: Roses prefer well-draining soil to prevent waterlogged roots. Use a good-quality potting mix with added organic matter.
            pH Level: Roses generally prefer slightly acidic to neutral soil with a pH range of 6.0 to 6.5.
            Nutrients:
            
            Fertilization: Roses benefit from regular fertilization during the growing season. Use a balanced fertilizer or one specifically formulated for roses.
            Organic Matter: Incorporating organic matter into the potting mix promotes fertility and enhances soil structure.
            Containers:
            
            Pot Size: Choose large containers with drainage holes to allow proper root development.
            Support: Some rose varieties may require support structures, especially climbing or vining types.
            Additional Information:
            
            Variety Selection: Choose rose varieties suitable for container gardening and compact growth if space is limited.
            Mulching: Mulching around the base of the roses helps retain moisture, suppress weeds, and regulate soil temperature.
            Care Tips:
            
            Watering: Provide consistent moisture, and avoid overwatering to prevent root diseases. Ensure proper drainage to prevent waterlogging.
            Pruning: Regular pruning helps maintain shape, control size, and encourage flowering. Prune dead or diseased branches.
            Pest and Disease Control: Keep an eye out for common pests like aphids and diseases such as powdery mildew. Use appropriate measures like insecticidal soap or fungicides when necessary.
            Feasibility Explanation:
            Growing roses on a terrace is generally feasible as long as the conditions mentioned above are met. However, if your terrace lacks sufficient sunlight, space, or proper ventilation, it may not be suitable for cultivating roses. Additionally, the feasibility may also depend on the specific rose varieties chosen, as some are more adaptable to container gardening than others. Always consider the available space and environmental conditions before deciding to grow roses on your terrace.
            #
            OUTLINE: Can I grow pines?
            ANSWER: Growing pines on the terrace of your home can be challenging, and it may not be the most practical choice for several reasons:

            Size: Pines are typically large trees that can grow quite tall. Most pine species have a substantial root system, and their size may exceed the constraints of a typical terrace.
            
            Space: Pines require ample space to develop both above and below ground. The confined space on a terrace may restrict the tree's growth potential and affect its overall health.
            
            Sunlight: Pines generally need full sunlight to thrive. The limited space on a terrace and potential shading from surrounding structures could impact their exposure to sunlight.
            
            Containers: Even in large containers, it can be challenging to provide the necessary soil volume and depth for a pine tree's root system to develop adequately.
            
            Wind Exposure: Pines are often exposed to wind in their natural environment, and the confined space of a terrace may not provide the ideal conditions for them, especially during strong winds.
            
            Considering these factors, it's generally not recommended to grow pines on a typical home terrace. If you have a spacious outdoor area or garden, and the local climate and soil conditions are suitable for pines, you may consider planting them directly in the ground where they can grow to their full size. Always check with local horticulturists or garden experts for advice specific to your region and conditions.
            ###
            prompt: Generate an answer containing some brief information on plants that can be grown and also the conditions (such as nutrients) on the terrace of your home
            if the outline specifies the environmental conditions and/or climate of the place where you live.
            OUTLINE: I live in Chennai, where summers are very hot and winters are not very cold. Also, the rains peak in October. Which plants can I grow?
            ANSWER: Here are some plant options suitable for the climate in Chennai, along with brief information on their nutrient requirements and other conditions:


            Bougainvillea:
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-drained soil with a balanced fertilizer during the growing season. Bougainvilleas prefer a slightly acidic to neutral soil.
            Additional Information: Drought-tolerant once established. Prune to encourage flowering.


            Hibiscus:
            
            Conditions: Full sunlight to partial shade.
            Nutrient Requirements: Well-drained soil with a balanced fertilizer rich in potassium. Maintain soil pH between 6.0 to 6.5.
            Additional Information: Regular pruning encourages bushier growth and more flowers.


            Aloe Vera:
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-draining cactus mix or sandy soil. Use a balanced, diluted fertilizer during the growing season.
            Additional Information: Drought-tolerant; allow the soil to dry between waterings.


            Papaya:
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-draining soil with organic matter. Fertilize with a balanced fertilizer containing micronutrients.
            Additional Information: Requires regular watering. Support the plant as it grows.


            Areca Palm:
            
            Conditions: Bright, indirect light to partial shade.
            Nutrient Requirements: Well-drained soil. Fertilize with a balanced, slow-release fertilizer.
            Additional Information: Keep the soil consistently moist, and mist the leaves occasionally.


            Mint:
            
            Conditions: Partial shade.
            Nutrient Requirements: Well-draining soil with organic matter. Fertilize with a balanced liquid fertilizer.
            Additional Information: Keep the soil consistently moist. Prune regularly to encourage bushy growth.
            Dragon Fruit (Pitaya):
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-draining soil with added compost. Fertilize with a balanced, water-soluble fertilizer during the growing season.
            Additional Information: Requires support as it grows. Provide well-drained soil.


            Lavender:
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-draining soil with minimal organic matter. Fertilize with a balanced, diluted fertilizer.
            Additional Information: Drought-tolerant. Prune after flowering to maintain shape.


            Ferns:
            
            Conditions: Shade to partial shade.
            Nutrient Requirements: Well-draining soil rich in organic matter. Fertilize with a balanced liquid fertilizer.
            Additional Information: Keep the soil consistently moist. Ideal for shaded areas.


            Sedum (Stonecrop):
            
            Conditions: Full sunlight.
            Nutrient Requirements: Well-draining soil. Fertilize sparingly with a balanced, diluted fertilizer.
            Additional Information: Drought-tolerant. Suitable for containers.
            Ensure that you tailor your watering schedule based on the specific needs of each plant and provide adequate drainage for container plants. Regular monitoring and adjusting based on the local weather conditions will contribute to the success of your terrace garden.
            ###
            prompt: If the outline does not pertain to topics related to plants, plant biology, nutrients and environmental requirements for these plants to grow, or anything else related to plants or agriculture subjects,
            generate an answer saying that the query cannot be answered because the model has not been trained to answer such questions.
            OUTLINE: Who is the Prime Minister of India?
            ANSWER: I cannot answer that because the query does not concern what I have been trained to answer. 
            #
            OUTLINE: Solve this question - What is the integral of x^2 * log(1/x)?
            ANSWER: Sorry, I cannot answer that as I am not trained to answer questions on mathematics.
            #
            OUTLINE: Can you generate a code for implementing the Genetic Algorithm?
            ANSWER: I cannot generate codes because I have only been trained on plant biology and agricultural subjects.
            #
            OUTLINE: What is world war 2?
            ANSWER: I cannot answer this as I am not trained to answer questions related to history.
            #
            OUTLINE: What are Newton's laws of motion?
            ANSWER: I cannot answer this as I am not trained to answer questions related to science or arts.
            ###
            prompt: ${outline}
            ANSWER:
            `,
            'max_tokens':1000,
            'temperature':0.8,
        })
    })
    const data = await response.json();
    //setuploading.style.display = "block";
    document.getElementById('output-text').innerText = data.choices[0].text
}

//Helper function to handle fetch and rate limits
async function fetchAPI(url, options){
    const response = await fetch(url, options);
    if (response.status === 429){
        //Handle rate limit by waiting and retrying the request after a delay
        const retryAfter = parseInt(response.headers.get('Retry-After')) || 1;
        await sleep(retryAfter * 1000);
        return fetchAPI(url, options);
    }
    return response;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}