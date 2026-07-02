const requestLogger=<T extends (...args:any[])=>any>(action:T):T=>{
  return ((...args:Parameters<T>)=>{
    console.log("Request:",{
      time:new Date().toLocaleString(),
      action:action.name,
      arguments:args,
    });
    return action(...args);
  }) as T;
};
export default requestLogger;
