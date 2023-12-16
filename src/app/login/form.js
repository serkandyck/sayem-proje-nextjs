'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function LoginForm() {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
          username: formData.get('username'),
          password: formData.get('password'),
          redirect: false,
        });
    
        console.log("asdasd", { response });
        if (!response?.error) {
          router.push('/');
          router.refresh();
        }
    }
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="card card-body">
                        <div className="col-md-12 col-lg-12">
                            <h4 className="mb-3 text-center sayem-title-black">Yetkili Girişi</h4>
                            <form className="needs-validation" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Kullanıcı Adı</label>
                                    <input name="username" type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Şifre</label>
                                    <input name="password" type="password" className="form-control"></input>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary sayem-primary-button" type="submit">Giriş</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

