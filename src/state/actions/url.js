// TODO: reduce throttling
const SERVER_URL = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        return "http://localhost:8000";
    } else {
        // TODO: fix url
        return "https://api.demo.shulesuite.com";
        // return "http://localhost:8000";
    }
};

export default SERVER_URL;

export const URL = SERVER_URL();
