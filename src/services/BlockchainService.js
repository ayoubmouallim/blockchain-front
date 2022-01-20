import axios from "axios";

const API_BASE_URL = "http://localhost:8085/blockchaine";

class BlockchainService {
    getBlochains() {
        return axios.get(API_BASE_URL + "/all");
    }
    addBlockchain(blockchain) {
        return axios.post(API_BASE_URL + "/create", blockchain);
    }

    getBlocksById(id) {
        return axios.get(API_BASE_URL + "/" + id);
    }
    mineBlock(data) {
        return axios.post(API_BASE_URL + "/mine", data);
    }
}
export default new BlockchainService();
