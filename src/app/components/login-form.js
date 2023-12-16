export default function LoginForm() {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card card-body">
                        <div className="col-md-12 col-lg-12">
                            <h4 className="mb-3 text-center sayem-title-black">Yetkili Girişi</h4>
                            <form className="needs-validation" noValidate="">
                                <div class="mb-3">
                                    <label class="form-label sayem-title-black">Kullanıcı Adı</label>
                                    <input type="text" class="form-control" placeholder="name@example.com"></input>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label sayem-title-black">Şifre</label>
                                    <input type="password" class="form-control"></input>
                                </div>

                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary sayem-primary-button" type="button">Giriş</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

