export default function RequestForm() {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card card-body">
                        <div className="col-md-12 col-lg-12">
                            <h4 className="mb-3 text-center sayem-title-black">Talep Formu</h4>
                            <form className="needs-validation" noValidate="">
                                <div className="row">
                                    <div className="mb-3">
                                        <label className="form-label sayem-title-black">Talep Türü</label>
                                        <select className="form-control input-lg" name="request_type">
                                            <option value="">Lütfen seçiniz</option>
                                            <option value="1">Talep Türü 1</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Talep Başlığı</label>
                                    <input type="email" className="form-control" placeholder="name@example.com"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Talep İçeriği</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary sayem-primary-button" type="button">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

