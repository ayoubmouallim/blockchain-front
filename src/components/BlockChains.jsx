import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlockchainService from "../services/BlockchainService";
import "../styles/customers.css";

function BlockChains() {
    const [blockchains, setBlockchains] = useState([]);
    useEffect(() => {
        BlockchainService.getBlochains()
            .then((response) => {
                console.log(response.data);
                setBlockchains(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    Manage <b>Blockchains</b>
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <Link
                                    to="/blockchain/add"
                                    className="btn btn-success"
                                    data-toggle="modal"
                                >
                                    <span>Add New Blockchain</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Reward</th>
                                <th>Dificulty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockchains &&
                                blockchains.map((blockchain, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{blockchain.nom}</td>
                                            <td>{blockchain.miningReward}</td>
                                            <td>{blockchain.difficulté}</td>
                                            <td>
                                                <Link
                                                    to={`/blockchain/${blockchain.id}`}
                                                    className="btn btn-success text-light"
                                                >
                                                    show blocks
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BlockChains;
