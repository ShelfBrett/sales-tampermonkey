// Hello world 

(window.localStorage.removeItem(['_5d256a7b-5aa6-4723-aec2-fc2d51b87d37:gcmcsessionActive']),
  window.localStorage.removeItem(['_5d256a7b-5aa6-4723-aec2-fc2d51b87d37:gcmcopn']),
   window.localStorage.removeItem('_actmu'),
  function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: 'use1',
    deploymentId: '5d256a7b-5aa6-4723-aec2-fc2d51b87d37'
  });

function setupWebMessaging(demoer_name, vertical) {

    Genesys("command", "Database.set", {
        messaging: {
            customAttributes: {
                ACD_Skill: 'Demo - ' + demoer_name,
                Demo_Vertical: vertical,
                External_Customer_Email: "charles.finley@acmecustomer.com"
            }
        }
   });
}
