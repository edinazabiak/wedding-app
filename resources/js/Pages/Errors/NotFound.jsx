import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function NotFound() {
    return (
        <>
            <section className="bg-white">
                <div className="container py-5">
                    <div className="row">
                        <h2 className="text-center text-primary fw-bold mb-3">404 - Oldal nem található</h2>
                        <h3 className="text-center">A keresett oldal nem található!</h3>
                    </div>
                </div>
            </section>

            <section className="contact ">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <p>
                                <i className="fa-solid fa-location-dot"></i>4029
                                Debrecen, Pacsirta utca 51.
                            </p>
                            <p>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+3652212625">+36 52 212 625</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:megrendeles@immanuelotthon.hu">
                                    megrendeles [kukac] immanuelotthon.hu
                                </a>
                            </p>
                            <p>
                                <i className="fa-solid fa-globe"></i>
                                <a href="https://www.immanuelotthon.hu/">
                                    Immánuel Otthon és Iskola
                                </a>
                            </p>
                        </div>
                        <div className="col-12 col-md-7">
                            <form
                                className="needs-validation"
                                encType="multipart/form-data"
                            >
                                <div className="row">
                                    <div className="col-12 col-sm-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Név"
                                            aria-label="Név"
                                            name="name"
                                            id="name"
                                            value=""
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="E-mail cím"
                                            aria-label="E-mail cím"
                                            name="email"
                                            id="email"
                                            value=""
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea
                                            className="form-control"
                                            placeholder="Üzenet helye"
                                            aria-label="Üzenet helye"
                                            name="body"
                                            id="body"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-dark"
                                        >
                                            Küldés
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

NotFound.layout = page => <PublicLayout children={page} />;