import axios from "axios";

export const fetchImages = async (query, page) => {
    const accessKey = "xF9_PmGrqZtQpKHT7N508uvU49VG_ujQNjjqFH2CnJw";
    const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`, {params: {query, page, per_page: 12}})

    // console.log(response.data)
    return response.data
}