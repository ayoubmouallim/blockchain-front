import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";
import "../styles/customers.css";

function AddBlockChain() {
    const [blockchain, setBlockchain] = useState({
        name: "",
        difficulty: 4,
        reward: 1,
    });

    const saveBlockChain = (e) => {
        e.preventDefault();
        console.log(blockchain);
        BlockchainService.addBlockchain(blockchain)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => console.log(err));
        setBlockchain({ name: "", difficulty: 4, reward: 1 });
    };

    return (
        <div className="  container mt-4  ">
            <div className="">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add Blockchain</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.name}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Dificulty</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.difficulty}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        difficulty: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Reward</label>
                            <input
                                type="text"
                                className="form-control"
                                value={blockchain.reward}
                                onChange={(e) =>
                                    setBlockchain({
                                        ...blockchain,
                                        reward: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-success"
                            onClick={saveBlockChain}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlockChain;
