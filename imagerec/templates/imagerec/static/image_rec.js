window.onload = function(){
    const image_input = document.getElementById('imageUpload')
    const formSelect = document.getElementById('image')
    const OPENAI_API_KEY = "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"
    const url = "https://api.openai.com/v1/completions"

    function predict(callback){
        var file = image_input.files[0]
        var formData = new FormData();
        formData.append('imageUpload', file);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/predict', true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(xhr.status == 200){
                    var resultDiv = document.getElementById('result');
                    resultDiv.innerHTML = 'Prediction: ' + xhr.responseText;
                    var result = xhr.responseText
                    callback(null, result);
                }
                else{
                    callback('Error: ' + xhr.status);
                }
            }
        };
        xhr.send(formData)
    }

    formSelect.addEventListener('submit', (event)=>{
        event.preventDefault()
        predict(function(error, result){
            if(error){
                console.error(error);
            }
            else{
                fetchBotReply(result)
            }
        });
    })

    async function fetchBotReply(outline){
        const response = await fetchAPI(url, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                'model':'text-davinci-003',
                'prompt':`Generate 5 recommendations about ${outline} plant mentioned. Start with an encouraging message about home terrace gardening with the points coming after. Don't title the message`,
                'max_tokens':500,
                'temperature':0.8,
            })
        })
        const data = await response.json();
        document.getElementById('chat_result').innerText = data.choices[0].text
    }
    
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
}