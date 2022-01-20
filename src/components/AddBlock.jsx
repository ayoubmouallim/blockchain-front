import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";

function AddBlock({ match }) {
    const [data, setData] = useState({
        blockchainID: "",
        pres_hash: "0000321654",
        min_adr: "112233",
        src_adr: "000032165411",
        des_adr: "",
        montant: "0",
    });

    React.useEffect(() => {
        if (match?.params?.id) {
            console.log(match.params);
            setData({ ...data, blockchainID: match.params.id });
        }
    }, []);

    const mineBlock = (e) => {
        e.preventDefault();
        console.log(data);
        const miningData = {
            blockchainID: data.blockchainID,
            pres_hash: data.pres_hash,
            min_adr: data.min_adr,
            transactions: [
                {
                    src_adr: "000032165411",
                    des_adr: data.des_adr,
                    montant: data.montant,
                },
            ],
        };
        BlockchainService.mineBlock(miningData)
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="  container mt-4  ">
            <div className="">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Mine Block</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.montant}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        montant: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Addresse</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.src_adr}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        des_adr: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Destination Addresse</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.des_adr}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        des_adr: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" onClick={mineBlock}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlock;
