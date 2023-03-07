import Ping from "ping-wrapper";
import request from "request";

const servicePing = () => {
  Ping.configure();
  var ping = new Ping("127.0.0.1");
  let countSeconds = 5;
  ping.on("ping", function (data) {
    countSeconds += 1;
    if (countSeconds % 5 == 0) {
      //   call frclassifier
      request(
        "http://localhost:11500/api/test",
        { json: true },
        (err, res, body) => {
          if (err) {
            return console.log(
              "[ERROR] frclassifier >> BAD service  (T.T)\n",
              err
            );
          }
          //   log
          let d = new Date();
          let time1 = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
          let time2 =
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          console.log("[INFO]:", time1, time2, "service GOOD");
        }
      );
    }
  });
  ping.on("fail", function (data) {
    console.log("[ERROR] BAD service :(", data);
  });
};

// const pingToPythonClassifierApi = () => {
//   setTimeout(function () {
//     request(
//       "http://localhost:5000/api/test",
//       { json: true },
//       (err, res, body) => {
//         if (err) {
//           return console.log("[ERROR] BAD service (T.T)\n", err);
//         }
//         let d = new Date();
//         let time1 = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
//         let time2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//         console.log("[INFO]:", time1, time2, "service GOOD");
//       }
//     );
//   }, 1000);
// };

export default {
  servicePing: servicePing,
  //   pingToPythonClassifierApi: pingToPythonClassifierApi,
};
