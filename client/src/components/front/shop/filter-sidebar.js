export default function FilterSideBar() {
    return (
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <b>SHOP BY</b> <br />
                            <span>PRICE</span> <br />
                            <form action="">
                                <input type="range" />
                            </form>
                        </div>
                        <div className="row">
                            <span className="border-bottom">COLOR</span> <br />
                            <form action="">
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                            </form>
                        </div>
                        <div className="row">
                            <span>SIZE</span> <br />
                            <form action="">
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                                <input type="checkbox" className="d-block m-2" />
                            </form>
                        </div>
                    </div>
                </div>
    )
}