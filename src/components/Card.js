import React from 'react'

const Card = () => {
    return (
        <div>
            <div
                className="card m-3 mt-5"
                style={{ width: "18rem", maxHeight: "360px" }}
            >
                <img className="card-img-top" src="https://source.unsplash.com/random/200x100/?burger/" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(5), (i, e) => {
                                return (
                                    <option value={i} id={i}>
                                        {e + 1}
                                    </option>
                                );
                            })}
                        </select>

                        <select className="m-2 h-100 bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className="fs-5 d-inline">Total</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
