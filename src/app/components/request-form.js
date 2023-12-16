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
                                    <div class="mb-3">
                                        <label class="form-label sayem-title-black">Talep Türü</label>
                                        <select class="form-control input-lg" name="request_type">
                                            <option value="" selected="">Lütfen seçiniz</option>
                                            <option value="1">Talep Türü 1</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label sayem-title-black">Talep Başlığı</label>
                                    <input type="email" class="form-control" placeholder="name@example.com"></input>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label sayem-title-black">Talep İçeriği</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>

                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary sayem-primary-button" type="button">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

