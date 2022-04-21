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
  }),
    Genesys("command", "Database.set", {
        messaging: {
            customAttributes: {
                ACD_Skill: "Demo - Brett",
                //Demo_Vertical: "Financial", // Maps to Genesys Architect Inbound Message Flow "Demo - All (sc)" Case 1
                //Demo_Vertical: "Healthcare", // Maps to Genesys Architect Inbound Message Flow "Demo - All (sc)" Case 2
                //Demo_Vertical: "Other?", // Not yet implemented
                //Demo_Vertical: "Insurance",
                //Demo_Vertical: "Transportation",
                //Demo_Vertical: "Consumer Goods",
                Demo_Vertical: "Public Health",
                External_Customer_Email: "charles.finley@acmecustomer.com"
            }
        }
   });