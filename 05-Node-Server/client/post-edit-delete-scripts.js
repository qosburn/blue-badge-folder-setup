/* *************************
 *** POST JOURNAL ***
 ************************** */
function postJournal() {
  //console.log('postJournal Function Called');
  let title = document.getElementById('title').value;
  let date = document.getElementById('date').value;
  let entry = document.getElementById('entry').value;
  const accessToken = localStorage.getItem('SessionToken');
  let newEntry = { journal: { title: title, date: date, entry: entry } };
  fetch('http://localhost:3000/journal/create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: accessToken,
    }),
    body: JSON.stringify(newEntry),
  })
    .then((response) => {
      console.log(response.json);
      displayMine();
    })
    .catch((err) => {
      console.log(err);
    });
}

/* *************************
 *** UPDATE JOURNAL ***
 ************************** */

function editJournal(postId) {
  //console.log('editJournal Function Called');
  console.log(postId);
  const fetch_url = `http://localhost:3000/journal/update/${postId}`;
  const accessToken = localStorage.getItem('SessionToken');

  let card = document.getElementById(postId);
  let input = document.createElement('input');

  if (card.childNodes.length < 2) {
    card.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'updatedEntry');
    input.setAttribute('placeholder', 'Edit you journal Entry');
  } else {
    let updated = document.getElementById('updatedEntry').value;
    let updatedEntry = { journal: { entry: updated } };
    const response = fetch(fetch_url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify(updatedEntry),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        displayMine();
      });
    card.removeChild(card.lastChild);
  }
}
// -- Marco
// function editJournal(postId) {
//   console.log('editJournal Function Called');
//   let card = document.getElementById(postId);
//   let input = document.createElement('input');
//   if (card.childNodes.length < 2) {
//     card.appendChild(input);
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', 'updateEntry');
//     input.setAttribute('placeholder', 'Edit your journal entry');
//   } else {
//     let update = document.getElementById('updateEntry').value;
//     let updateEntry = { journal: { entry: update } };
//     const fetch_url = `http://localhost:3000/journal/update/${postId}`;
//     const accessToken = localStorage.getItem('SessionToken');
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
//     myHeaders.append('Authorization', accessToken);
//     const raw = JSON.stringify(updateEntry);
//     requestOptions = {
//       method: 'PUT',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };
//     fetch(fetch_url, requestOptions)
//       .then((response) => {
//         return response.json();
//       })
//       .then(displayMine())
//       .catch((err) => console.log(err));
//     card.removeChild(card.lastChild);
//   }
// }

/* *************************
 *** DELETE JOURNAL ***
 ************************** */
function deleteJournal(postId) {
  console.log('deleteJournal working');
  console.log(postId);

  const fetch_url = `http://localhost:3000/journal/delete/${postId}`;
  const accessToken = localStorage.getItem('SessionToken');
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', accessToken);
  // debugger;
  requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
  };
  fetch(fetch_url, requestOptions)
    .then((response) => {
      console.log(response);
      displayMine();
    })
    .catch((err) => console.error(err));
}

// function deleteJournal(postId) {
//   console.log('deleteJournal working');
//   console.log(postId);

//   const fetch_url = `http://localhost:3000/journal/delete/${postId}`;
//   const accessToken = localStorage.getItem('SessionToken');

//   fetch(fetch_url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Athorization: accessToken,
//     },
//   }).then((response) => {
//     console.log(response);
//     displayMine();
//   });
// }
