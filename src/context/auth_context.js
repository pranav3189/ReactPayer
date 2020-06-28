import React from 'react';

const AuthContext = React.createContext({
  language: "en",
  multilang:["jp"],
  playername :[],
   runscore :[],

  setLanguage: () => {}
});

export default AuthContext;