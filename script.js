const adviceNumber = document.getElementById('advice-number');
const adviceContent = document.getElementById('advice-content');
const adviceBtn = document.getElementById('advice-btn');

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();

        adviceNumber.textContent = data.slip.id;
        adviceContent.textContent = `"${data.slip.advice}"`;

    } catch (error) {
        console.log('Error fetching advice:', error);
        adviceContent.textContent = 'An error occurred while fetching advice. Please try again.';
    } 
}

getAdvice();

adviceBtn.addEventListener('click', getAdvice);