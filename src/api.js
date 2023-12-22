import axios from "axios";
import {
    notification
} from "antd";
const publicUrl = "https://dev-camp.indegene.com/takeda-api/";


export const getCsatRating = (obj) => {
    return axios.get(publicUrl + `api/public-api/campaign-csat-external/get-csat-status?campaignId=${obj?.campaignId}`)
        .then(res => {
            if (res.data.status === 200)
                return res.data.body;
            else
                return undefined
        }).catch((e) => {
            notification["error"]({
                message: "Error",
                description: "Contact to Administrator",
                duration: 4
            });
        })
}

export const submitCsatRating = (obj) => {
    const config = {
        headers: { 'locale': "en" }
    };
    axios.post(publicUrl + `api/public-api/campaign-csat-external/save-rating`, { obj }, config)
        .then(res => {
            return res.data;
        })
}