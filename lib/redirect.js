import Router from "next/router";

export default (target, res) => { 
  if (res) { 
    res.writeHead(303, { Location: target }); 
    res.end(); 
  } else { 
    Router.replace(target); 
  }
};