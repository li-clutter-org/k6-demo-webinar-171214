import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    stages: [
        { duration: "10s", target: 25 },
        { duration: "10s" },
        { duration: "10s", target: 0 }
    ],
    thresholds: {
        http_req_duration: ["p(95)<100", "p(99)<150"]
    }
};

export default function() {
    let res = http.get("http://test.loadimpact.com/");
    check(res, {
        "has status 200": (r) => r.status === 200,
        "has correct title": (r) => r.body.indexOf("Welcome to the LoadImpact.com demo site!") !== -1
    });
    http.batch([
        [ "GET", "http://test.loadimpact.com/style.css" ],
        [ "GET", "http://test.loadimpact.com/images/logo.png" ]
    ]);
    sleep(3);
}
