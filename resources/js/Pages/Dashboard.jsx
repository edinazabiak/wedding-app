import React, { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
import Layout from "../Layouts/DashboardLayout";

function Dashboard() {
    return (
        <>
            <section className="applications container mb-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Üdvözlünk az esküvőnkön!</h2>

                        <p>
                            Köszönjük, hogy eljöttél velünk ünnepelni ezt a nagy Napot! Ez az alkalmazás segít neked, hogy <mark>információkhoz</mark> juthass a lagzi részleteiről. Az alsó menüpontban tudod kiválasztani, hogy a 
                            menetrend, az étlap vagy a vendéglista érdekel téged. 
                        </p>
                        <p>
                            Az esküvő során készült képeket és videókat feltöltheted és megtekintheted a <mark>Galéria</mark> menüpontban, akár a lagzi utáni napokban is.
                        </p>
                        <p>Ha pedig esetleg unatkoznál, a <mark>Játék</mark> menüpontban próbára teheted a tudásodat, hogy mennyire is ismersz minket!
                        </p>
                        <p className="mt-5">
                            Ha bármelyik szolgáltatónkkal elégedett vagy, a lenti gombra kattintva értékelheted őket, amiket később át tudunk adni nekik!
                        </p>
                        <a href={route('serviceProviders')} className="btn btn-primary">Szolgáltatók</a>
                    </div>
                </div>
            </section>
        </>
    );
}

Dashboard.layout = (page) => <Layout children={page} />;

export default Dashboard;