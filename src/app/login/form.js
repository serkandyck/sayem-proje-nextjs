'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginForm() {
    const [ error, setError ] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const response = await signIn('credentials', {
          username: formData.get('username'),
          password: formData.get('password'),
          redirect: false,
        });
        
        if (!response.error) {
          router.push('/');
          router.refresh();
        } else {
            toast.error("Hatalı kullanıcı adı veya şifre.")
            setError(true);
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
                                <div className={"alert alert-danger " + (error ? 'block': 'hidden')} role="alert">
                                    Hatalı kullanıcı adı veya şifre.
                                </div>
                                <div className={error ? 'block' : 'hidden'}>error state</div>
                                
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Kullanıcı Adı</label>
                                    <input name="username" type="text" className="form-control" required></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label sayem-title-black">Şifre</label>
                                    <input name="password" type="password" className="form-control" required></input>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary sayem-primary-button" type="submit">Giriş</button>
                                </div>
                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

