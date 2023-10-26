import { checkForURL } from "./checkURL";

// Main Function
const handleSubmit = async (e) => {
  e.preventDefault();
  const userURL = document.querySelector('#user-URL').value;

  if (checkForURL(userURL)) {
    postURL('http://localhost:8081/add', {userURL})
    .then(newData => updateUI(newData));
  } else {
    alert('Please enter a valid URL');
  }
}

// Function to POST data
const postURL = async (url='', data={}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {
    const newData = await res.json();
    return newData;
  }
  catch (error) {
    console.error('error', error)
  }
}

// Function to update UI 
const updateUI = (newData) => {
  document.querySelector('#results').innerHTML = 
  `
  Agreement: ${newData.agreement}<br>
  Confidence: ${newData.confidence}<br>
  Irony: ${newData.irony}<br>
  Subjectivity: ${newData.subjectivity}
  `
}

export { handleSubmit }