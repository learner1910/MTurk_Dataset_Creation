// paraphrase_evaluation.js

// Function to fetch questions from CSV and update the HTML
function loadQuestions() {
    // Replace 'path/to/your/data.csv' with the actual path to your CSV file
    fetch('path/to/your/data.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            // Assuming the first row contains column headers
            const sourceDocIndex = headers.indexOf('source_doc');
            const suspDocIndex = headers.indexOf('susp_doc');

            // Generate HTML content for the question
            const questionHTML = `
                <p><strong>Original Text:</strong></p>
                <p>${rows[1].split(',')[sourceDocIndex]}</p>

                <p><strong>Paraphrased Text:</strong></p>
                <p>${rows[1].split(',')[suspDocIndex]}</p>

                <!-- Evaluation Criteria Questions -->
                <!-- Add your evaluation criteria here -->

                <label>
                    <input type="radio" name="semanticEquivalence" value="no"> No
                </label>
                <label>
                    <input type="radio" name="semanticEquivalence" value="partially"> Partially
                </label>
                <label>
                    <input type="radio" name="semanticEquivalence" value="yes"> Yes
                </label>

                <!-- Add more evaluation criteria as needed -->
            `;

            // Update the question container with the generated HTML
            document.getElementById('questionContainer').innerHTML = questionHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the loadQuestions function when the page loads
window.onload = loadQuestions;

// Function to submit the form
function submitForm() {
    // Collect data from the form
    var formData = crowdForm.getAnswers();

    // Log evaluation criteria
    console.log("Semantic Equivalence:", formData.semanticEquivalence);

    // Continue with the form submission logic (if needed)
    crowdForm.submit();
}
