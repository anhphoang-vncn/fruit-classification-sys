// This service PORT
const setFrinfoPort = () => {
  let frinfoPort = "11600";
  return frinfoPort;
};

// Frclassifier PORT
const setFrclassifierPort = () => {
  let frclassifierPort = "11500";
  return frclassifierPort;
};

// Frclassifier IP
const setFrclassifierIp = () => {
  let frclassifierPort = "127.0.0.1";
  return frclassifierPort;
};

export default {
  setFrinfoPort: setFrinfoPort,
  setFrclassifierPort: setFrclassifierPort,
  setFrclassifierIp: setFrclassifierIp,
};
