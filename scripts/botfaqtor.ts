export const body = `
  (function ab(){ var request = new XMLHttpRequest(); request.open('GET', "https://scripts.botfaqtor.ru/one/137359", false); request.send(); if(request.status == 200) eval(request.responseText); })();
`;
