import { Suspense } from 'react';
import AdminCategory from '../../AdminCategory';
import AdminProducts from './AdminProducts';
export default function Admin() {
    return (
        <main className="py-[48px]">
            <AdminCategory />
            <Suspense fallback="Đợi xíu...">
                <AdminProducts />
            </Suspense>
        </main>
    );
}
