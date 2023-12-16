export default function RequestForm() {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div id="form-card" className="card card-body">
                        <h3 className="text-center mb-4 sayem-title-black">Talep Formu</h3>
                        <div id="err-alert" className="alert alert-danger hidden">
                            Örnek hata.
                        </div>
                        <div id="succ-alert" className="alert alert-success hidden">
                            Örnek Başarı.
                        </div>
                        <fieldset>
                            <form id="request-create" action="/request" method="post">
                                <div className="form-group">
                                    <select className="form-control input-lg" name="request_type" id="request_type">
                                        <option value="" selected="">Talep Türü Seçiniz</option>
                                    </select>
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Talep Başlığı" name="request_title" id="request_title" value="" type="text" minlength="3"></input>
                                </div>
                                <div className="form-group has-success">
                                    <textarea className="form-control input-lg" rows="3" placeholder="Talebiniz" name="request_content" id="request_content" value="" type="text" minlength="3"></textarea>
                                </div>

                                <input className="btn btn-lg sayem-primary-button btn-block" value="Kaydet" type="submit"></input>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}