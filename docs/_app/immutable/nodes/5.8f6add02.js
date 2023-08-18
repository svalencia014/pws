import{s as o,n}from"../chunks/scheduler.dc868896.js";import{S as l,i as c,g as d,h as m,z as p,k as i,a as u,f as h}from"../chunks/index.838391b0.js";function g(r){let e,a=`<script>let pass = prompt("Enter the password");
    if (1 != 1) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
      let now = new Date();
      let expirationDate = now.getTime();
      expirationDate = new Date(expirationDate + 86400000)
      document.cookie = \`auth=true expires=\${expirationDate.toUTCString()}\`;
      alert("Welcome!");
      let request = new XMLHttpRequest();
      request.open("GET", "http://api.svalencia.cf:4000/submissions", false);
      request.send();
      const stringArray = JSON.parse(request.response);
      const parentElement = document.getElementById("cards");
      if (stringArray.length == 0) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = \`
          <h3>No submissions yet!</h3>
        \`;
        newDiv.classList.add("card");
        parentElement.appendChild(newDiv);
      }
      for (let i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i])
        const newDiv = document.createElement("a");
        let date = new Date(parseInt(stringArray[i].id));
        date = date.toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
        console.log(date);
        newDiv.innerHTML = \`
          <h3>Message: \${stringArray[i].id}</h3>
          <p>Submitted by \${stringArray[i].name}</p>
          <p>On \${date}</p>
          <h3>\${stringArray[i].message}</h3>
          <a href=mailto:\${stringArray[i].email}?subject=Re:%20Form%20Submission%20\${stringArray[i].id}%20on%20svalencia.cf>Reply</a>
          <a data-method="delete" href="http://api.svalencia.cf:4000/delete/submission/\${stringArray[i].id}">Delete</a>
        \`;
        newDiv.classList.add("card");
        parentElement.appendChild(newDiv);
      }
    }<\/script>`;return{c(){e=d("div"),e.innerHTML=a,this.h()},l(t){e=m(t,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),p(e)!=="svelte-1lcjna4"&&(e.innerHTML=a),this.h()},h(){i(e,"class","links"),i(e,"id","cards")},m(t,s){u(t,e,s)},p:n,i:n,o:n,d(t){t&&h(e)}}}class y extends l{constructor(e){super(),c(this,e,null,g,o,{})}}export{y as component};
